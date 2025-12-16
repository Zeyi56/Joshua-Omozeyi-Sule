# Data Analyst Portfolio Template

This is a minimal, responsive static portfolio template for a data analyst. It includes sections for About, Skills, Projects, and Contact.

Files:
- [index.html](index.html) — main page
- [styles.css](styles.css) — styles
- [script.js](script.js) — simple project renderer and filter

How to use:
1. Open `index.html` in a browser to preview.
2. Replace placeholder text (Your Name, email) and add a `resume.pdf` file if needed.
3. Edit the `projects` array in `script.js` to add real projects and links.
4. Host with GitHub Pages or any static host.

Next steps / suggestions:
- Add screenshots or GIFs for each project.
- Link to notebooks, dashboards, or live demos.
- Add analytics / contact form backend as needed.

Running the demo API (churn model):

1. From the workspace root, install the API dependencies (recommended in a virtualenv):

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r api/requirements.txt
```

2. Start the API server (runs on port 5000):

```bash
python3 api/app.py
```

3. The static portfolio is served by a simple HTTP server. From the workspace root run:

```bash
python3 -m http.server 41933
```

Then open `http://127.0.0.1:41933/` in your browser. The churn demo will call the API at `http://127.0.0.1:5000/predict`.

License: CC0 — use and adapt freely.
