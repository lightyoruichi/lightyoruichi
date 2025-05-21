# ROADMAP, TASKLIST & CHANGELOG

**Project:** Harinder Singh — Personal Portfolio (FastAPI, HTMX, Tailwind, Franken UI)

---

## Project Context & Goals

This portfolio site presents three facets of Harinder Singh:
- **The Monk:** Personal interests, philosophy, creative pursuits
- **The Hacker:** Tech skills, coding projects, builder mentality
- **The Strategist:** Marketing expertise, growth systems, professional achievements

**Tech Stack:** FastAPI, HTMX, Tailwind CSS, Franken UI, Jinja2, JSON content

**Content:** Managed via `data/hari.json` and rendered through Jinja2 templates. Inspiration cards and persona pages are dynamically loaded from JSON.

**Vision:**
- Fast, modular, and easy to update
- No JS frameworks bloat
- Clean separation of content and code
- Deployable on Vercel, GitHub, or similar
- Mobile-first, PWA feel, and highly themeable

---

## Roadmap

### v0.4.x (Current)
- [ ] Integrate Franken UI components more thoroughly across all templates
- [ ] Add dynamic inspiration/quote cards to homepage (from JSON)
- [ ] Refine persona pages (Monk, Hacker, Strategist) with richer content and visuals
- [ ] Add more image assets and update references in data files
- [ ] Polish mobile responsiveness and accessibility
- [ ] Add automated tests for routes and template rendering
- [ ] Prepare for public launch and Vercel deployment

### v0.5.x (Planned)
- [ ] Add blog/notes section (optional, markdown or JSON-driven)
- [ ] Add dark mode/theme switcher
- [ ] Integrate analytics (privacy-friendly)
- [ ] Add more case studies and public playbooks
- [ ] Explore PWA enhancements (manifest, offline support)

---

## Tasklist

### Completed
- [x] Project scaffold: FastAPI, Jinja2, Tailwind, Franken UI
- [x] Persona content structure in `data/hari.json`
- [x] Initial templates: base, home, persona pages
- [x] Tailwind and Franken UI setup
- [x] CSS variable theming scaffolded
- [x] Vercel deployment config
- [x] Dynamic inspiration card grid on homepage
- [x] Updated documentation and project structure

### In Progress
- [ ] Franken UI component integration (cards, buttons, layouts)
- [ ] Persona page content enrichment
- [ ] Image asset population and path updates
- [ ] Mobile and accessibility polish

### Planned
- [ ] Blog/notes section
- [ ] Theme switcher
- [ ] Analytics
- [ ] PWA features

---

## Changelog

### v0.4.0 (2024-06-09)
**Major:**
- Refactored `home.html` to use a dynamic inspiration card grid, loading from JSON.
- Updated persona quotes in `data/hari.json` with real, themed quotes.
- Scaffolded CSS variable theming in `static/css/input.css` for Tailwind and Franken UI.
- Created `package.json` and `vercel.json` for build and deployment.
- Updated all documentation to reference new roadmap and changelog file.

**Minor:**
- Improved README and PRD for clarity and structure.
- Added instructions for Franken UI integration.

### v0.4.1 (2024-06-09)
**Major:**
- Migrated from @app.on_event("startup") to FastAPI lifespan event system.
- Updated all TemplateResponse calls to use the new signature (request, name, context).
- Added robust automated tests for all routes, template rendering, and edge cases (missing JSON, empty personas, missing fields).
- All tests pass 100% (green).

**Minor:**
- Documented known warnings and their resolution in README and PRD.

### v0.3.0 (2024-06-08)
**Major:**
- Added persona pages (Monk, Hacker, Strategist) with dynamic content from `data/hari.json`.
- Implemented Tailwind CSS and Franken UI setup.
- Added initial static assets and placeholder images.

**Minor:**
- Improved navigation and base layout.
- Added social/contact links.

### v0.2.0 (2024-06-07)
**Major:**
- Project scaffolded with FastAPI, Jinja2, and HTMX.
- Initial content structure in `data/hari.json`.
- Basic home and base templates.

**Minor:**
- Added setup instructions and project context docs.

### v0.1.x (2024-06-06 and earlier)
- Initial project planning and stack selection
- Created context and content markdown files
- Defined project vision and goals
- Early experiments with layout and navigation

---

## Summary of Previous Versions
- v0.1.x: Project inception, planning, and initial scaffolding
- v0.2.x: Basic FastAPI app, content structure, and templates
- v0.3.x: Persona pages, Tailwind/Franken UI setup, navigation improvements

---

## References
- See `README.md` and `prd.md` for setup and structure
- See `context.md` and `content.md` for project background and content 