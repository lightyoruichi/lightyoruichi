// don't touch this.
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

## Testing

To run automated tests for all routes and template rendering:

```bash
pytest
```

## Deployment (Vercel)

- Ensure your `vercel.json` is present and configured.
- Push your code to your GitHub repository.
- Connect the repo to Vercel and deploy.
- Static assets and FastAPI backend are supported via Vercel's Python backend configuration.

## Known Warnings & Migration Notes

- You are using a deprecated FastAPI event system. This project now uses the new FastAPI lifespan event system (see main.py). If you see warnings about @app.on_event("startup"), they are resolved.
- There was a Starlette template warning about parameter order for TemplateResponse. All calls now use the new signature: TemplateResponse(request, name, context).
- All routes and template rendering are covered by robust automated tests, including edge cases (missing JSON, empty personas, missing fields). All tests are green (100% pass).

---
