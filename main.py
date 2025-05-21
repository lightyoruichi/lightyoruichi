import json
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from contextlib import asynccontextmanager
import os
# import asyncio # Not strictly needed for sync file reading if loaded at startup

SITE_CONTENT = {}

def load_site_content():
    global SITE_CONTENT
    try:
        with open("data/hari.json", "r") as f:
            SITE_CONTENT = json.load(f)
        print("Site content loaded successfully.") # Added for feedback
    except FileNotFoundError:
        SITE_CONTENT = {} # Handle error gracefully
        print("Error: data/hari.json not found!")
    except json.JSONDecodeError:
        SITE_CONTENT = {}
        print("Error: Could not decode data/hari.json!")

@asynccontextmanager
async def lifespan(app: FastAPI):
    load_site_content()
    yield

app = FastAPI(lifespan=lifespan)

# Mount static files (CSS, JS, images)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Setup Jinja2 templates
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_home(request: Request):
    home_page_data = SITE_CONTENT.get("homePage", {})
    return templates.TemplateResponse(request, "home.html", {
        "title": home_page_data.get("heroLine", SITE_CONTENT.get("siteTitle", "Harinder Singh")),
        "meta_description": home_page_data.get("metaDescription", ""),
        "personas": SITE_CONTENT.get("personas", {}),
        "hero_line": home_page_data.get("heroLine", "Welcome"),
        "inspirations": SITE_CONTENT.get("inspirations", [])
    })

@app.get("/monk", response_class=HTMLResponse)
async def monk_page(request: Request):
    persona_data = SITE_CONTENT.get("personas", {}).get("monk", {})
    site_title = SITE_CONTENT.get("siteTitle", "Harinder Singh")
    return templates.TemplateResponse(request, "monk_page.html", {
        "title": persona_data.get("title", "The Monk"),
        "meta_description": persona_data.get("metaDescription", ""),
        "persona": persona_data,
        "social_links": SITE_CONTENT.get("socialLinks", []),
        "site_title": site_title
    })

@app.get("/hacker", response_class=HTMLResponse)
async def hacker_page(request: Request):
    persona_data = SITE_CONTENT.get("personas", {}).get("hacker", {})
    site_title = SITE_CONTENT.get("siteTitle", "Harinder Singh")
    return templates.TemplateResponse(request, "hacker_page.html", {
        "title": persona_data.get("title", "The Hacker"),
        "meta_description": persona_data.get("metaDescription", ""),
        "persona": persona_data,
        "social_links": SITE_CONTENT.get("socialLinks", []),
        "site_title": site_title
    })

@app.get("/strategist", response_class=HTMLResponse)
async def strategist_page(request: Request):
    persona_data = SITE_CONTENT.get("personas", {}).get("strategist", {})
    site_title = SITE_CONTENT.get("siteTitle", "Harinder Singh")
    return templates.TemplateResponse(request, "strategist_page.html", {
        "title": persona_data.get("title", "The Strategist"),
        "meta_description": persona_data.get("metaDescription", ""),
        "persona": persona_data,
        "social_links": SITE_CONTENT.get("socialLinks", []),
        "site_title": site_title
    })

# To run the app (from the terminal in the project root directory):
# Ensure you have an ASGI server like uvicorn installed: pip install uvicorn
# Then run: uvicorn main:app --reload 