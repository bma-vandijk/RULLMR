# RULLMR

Course website for **Responsible Use of Large Language Models in Research**.

Live site (after GitHub Pages has finished its first build):  
<https://bma-vandijk.github.io/RULLMR/>

## How the site is put together

This is a [Jekyll](https://jekyllrb.com/) site. You edit Markdown; GitHub builds HTML and hosts it.

| File | What it is for |
| --- | --- |
| `_config.yml` | Site-wide name, URL, contact, and which pages appear as tabs |
| `index.md` | Home |
| `about.md`, `syllabus.md`, `schedule.md` | The tabs |
| `_layouts/default.html` | Shared page frame (head, header, footer) |
| `_includes/header.html` | Draft banner, course name, tabs, and theme toggle |
| `_includes/footer.html` | Footer line |
| `assets/css/main.css` | Colours, type, layout. Start here to change the look |
| `assets/js/accordion.js` | Opens and closes session lists on Syllabus and Schedule |
| `assets/practicals/` | Notebooks, data, and environment files, one folder per session |
| `.github/workflows/pages.yml` | Builds and publishes the site on every push to `main` |
| `course_outline.md` | Working notes for authors; not published as a page |

Everyday content edits belong in the `.md` files. Add practical files under `assets/practicals/` (one subfolder per session), then add a labelled link in that session on `schedule.md`. The files are copied to the live site; the schedule does not list them automatically.

GitHub Pages can host notebooks, CSVs, `environment.yml`, and `env.example` files without a second repository. Keep secrets out of git. Files above roughly 50–100 MB are better on GitHub Releases, Zenodo, or OSF, with a link from the schedule.

## Local preview (optional)

You need Ruby. From this folder:

```bash
bundle install
bundle exec jekyll serve
```

Open <http://127.0.0.1:4000/RULLMR/>.

## Publishing

Push to `main`. GitHub Actions builds the site. If the Pages environment asks for approval the first time, confirm it under the repo **Settings → Pages** and **Settings → Environments**.
