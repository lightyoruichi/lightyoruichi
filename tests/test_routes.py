import pytest
from fastapi.testclient import TestClient
from main import app
import re
import os
import shutil
import json

@pytest.mark.asyncio
async def test_home_route():
    client = TestClient(app)
    response = client.get("/")
    assert response.status_code == 200
    assert "Harinder" in response.text or "Monk" in response.text
    assert "<title>" in response.text
    assert "meta name=\"description\"" in response.text or "meta name=\'description\'" in response.text

@pytest.mark.asyncio
async def test_monk_route():
    client = TestClient(app)
    response = client.get("/monk")
    assert response.status_code == 200
    assert re.search(r"The Monk", response.text)
    assert "About The Monk" in response.text
    assert "<title>The Monk" in response.text

@pytest.mark.asyncio
async def test_hacker_route():
    client = TestClient(app)
    response = client.get("/hacker")
    assert response.status_code == 200
    assert re.search(r"The Hacker", response.text)
    assert "About The Hacker" in response.text
    assert "<title>The Hacker" in response.text

@pytest.mark.asyncio
async def test_strategist_route():
    client = TestClient(app)
    response = client.get("/strategist")
    assert response.status_code == 200
    assert re.search(r"The Strategist", response.text)
    assert "About The Strategist" in response.text
    assert "<title>The Strategist" in response.text

def test_missing_json(monkeypatch):
    # Temporarily rename the JSON file
    if os.path.exists("data/hari.json"):
        shutil.move("data/hari.json", "data/hari.json.bak")
    try:
        from main import load_site_content, SITE_CONTENT
        load_site_content()
        client = TestClient(app)
        response = client.get("/")
        assert response.status_code == 200
        # Should fallback gracefully
        assert "Harinder" in response.text or "Welcome" in response.text
    finally:
        if os.path.exists("data/hari.json.bak"):
            shutil.move("data/hari.json.bak", "data/hari.json")
        load_site_content()

def test_empty_personas(monkeypatch):
    # Backup and replace JSON with empty personas
    if os.path.exists("data/hari.json"):
        shutil.copy("data/hari.json", "data/hari.json.bak")
    try:
        with open("data/hari.json", "r") as f:
            data = json.load(f)
        data["personas"] = {}
        with open("data/hari.json", "w") as f:
            json.dump(data, f)
        from main import load_site_content
        load_site_content()
        client = TestClient(app)
        response = client.get("/monk")
        assert response.status_code == 200
        # Should fallback to default title
        assert "The Monk" in response.text
    finally:
        if os.path.exists("data/hari.json.bak"):
            shutil.move("data/hari.json.bak", "data/hari.json")
        load_site_content()

def test_missing_fields(monkeypatch):
    # Backup and remove fields from monk persona
    if os.path.exists("data/hari.json"):
        shutil.copy("data/hari.json", "data/hari.json.bak")
    try:
        with open("data/hari.json", "r") as f:
            data = json.load(f)
        if "personas" in data and "monk" in data["personas"]:
            del data["personas"]["monk"]["about"]
        with open("data/hari.json", "w") as f:
            json.dump(data, f)
        from main import load_site_content
        load_site_content()
        client = TestClient(app)
        response = client.get("/monk")
        assert response.status_code == 200
        # Should not error, and page should still render
        assert "The Monk" in response.text
    finally:
        if os.path.exists("data/hari.json.bak"):
            shutil.move("data/hari.json.bak", "data/hari.json")
        load_site_content() 