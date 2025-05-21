# Harinder Singh — Personal Portfolio (FastAPI, HTMX, Tailwind, Franken UI)

A personal portfolio site showcasing three facets:
- **The Monk:** Personal interests, philosophy, creative pursuits
- **The Hacker:** Tech skills, coding projects, builder mentality
- **The Strategist:** Marketing expertise, growth systems, professional achievements

Content is managed via `data/hari.json` and rendered through Jinja2 templates. Inspiration cards and persona pages are dynamically loaded from JSON.

## Project Structure

```
📁 /your-site/
├── main.py              # FastAPI app
├── data/
│   └── hari.json        # Main content JSON
├── templates/
│   ├── base.html        # Tailwind layout shell
│   ├── home.html        # Landing page (inspiration cards grid)
│   ├── monk_page.html   # Monk persona page
│   ├── hacker_page.html # Hacker persona page
│   └── strategist_page.html # Strategist persona page
├── static/
│   ├── css/             # Tailwind CSS (input.css, output.css)
│   ├── js/              # Custom JavaScript
│   └── img/             # Image assets
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── package.json         # Node.js dependencies/scripts
├── vercel.json          # Vercel deployment config
├── ROADMAP_CHANGELOG.md # Roadmap, tasklist, and changelog (see below)
└── README.md            # This file
```

## Setup & Run

1. **Clone the repository.**
2. **Create and activate a virtual environment:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
3. **Install Python dependencies:**
   ```bash
   pip install fastapi uvicorn jinja2 aiofiles python-multipart
   ```
4. **Install Node.js dependencies (for Tailwind CSS):**
   ```bash
   npm install
   ```
5. **Build Tailwind CSS:**
   ```bash
   npm run build:css
   ```
   (Or use `npm run dev:css` for live recompilation)
6. **Run the FastAPI application:**
   ```bash
   uvicorn main:app --reload
   ```
7. Open your browser and navigate to `http://127.0.0.1:8000`.

## Franken UI Integration

Franken UI components are used for rapid UI development. See [Franken UI Docs](https://franken-ui.dev/docs/2.0/installation) for details.

## Roadmap, Tasklist & Changelog

See [ROADMAP_CHANGELOG.md](./ROADMAP_CHANGELOG.md) for the latest roadmap, tasklist, and detailed changelog.

## Technical Notes & Warnings

- FastAPI now uses the new lifespan event system for startup logic (see main.py).
- All TemplateResponse calls use the new signature: TemplateResponse(request, name, context).
- Automated tests cover all routes, template rendering, and edge cases (missing JSON, empty personas, missing fields). All tests pass 100%.

<h1 align="center">Hey 👋, I'm Harinder</h1>
<h3 align="center">I focus on creating efficient, scalable growth systems backed by data, technology, behavioral science and automation. If you're looking to improve customer acquisition, streamline marketing operations, or explore AI-driven solutions, feel free to reach out.</h3>

---

🚀 **About Me:**  
- 💡 **Fractional CMO** [Consulting](https://lightyoruichi.com) – Doing the nomad thing, helping other founders with growth strategy, AI-driven marketing automation, and revenue optimization. Focused on founders/teams facings problems with go-to-market execution, demand generation, and scalable growth systems  
- 🌱 **Learning & experimenting with** ReactJS, AI-driven automation & full-stack development  
- 💬 **Ask me about:** Marketing automation, AI workflows, WordPress, & esports growth  
- 📧 **Reach out:** **[lightyoruichi.com](https://lightyoruichi.com)**  
- 📄 **My CV & past work:** [View Here](https://dub.sh/2L9ocQb)  
- ⚡ **Fun Fact:** If I'm not deep-diving into growth hacking or coding, I'm probably reading Wuxia novels or **breaking down game metas**  

---

### **🛠️ Tech, Tools & Stack:**  
<p align="left">
  <img src="https://img.shields.io/badge/ReactJS-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/WordPress-21759B?logo=wordpress&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/SQL-4479A1?logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Marketing Automation-FFD700?logo=google-ads&logoColor=white" />
  <img src="https://img.shields.io/badge/Wuxia Literature-DC143C" />
</p>

---

### **🤝 Connect With Me:**  
<p align="left">
  <a href="https://x/lightyoruichi" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?logo=twitter&logoColor=white" /></a>
  <a href="https://linkedin.com/in/lightyoruichi" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white" /></a>
  <a href="https://stackoverflow.com/users/satnam182" target="_blank"><img src="https://img.shields.io/badge/StackOverflow-F58025?logo=stackoverflow&logoColor=white" /></a>
  <a href="https://instagram.com/lightyoruichi" target="_blank"><img src="https://img.shields.io/badge/Instagram-E4405F?logo=instagram&logoColor=white" /></a>
</p>

---

🔥 **Always up for conversations about AI, growth marketing, automation, or just gaming metas.**  
💬 **DM me if you want to chat strategy, build something cool, or brainstorm over coffee.**  

---
