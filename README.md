# Fieldnote (demo site)

A small fake SaaS marketing site used to demo **Deja View** visual regression checks.
Plain HTML and CSS with no build step, so it can be served by GitHub Pages or any static host.

| Page | Path |
|---|---|
| Home | `/` |
| Pricing | `/pricing/` |
| Customers | `/customers/` |
| Changelog | `/changelog/` |

Run it locally:

```bash
python3 -m http.server 4321
```

On purpose, the site has some live content: a ticking conversation counter and a "Synced x min ago" label.
Deja View should learn to ignore these, so they shouldn't show up as changes.

## CI

`.github/workflows/sightline.yml` runs on every push to `main`. It deploys the site to GitHub Pages, then asks Deja View to screenshot the deployed pages and compare them with the approved baseline.
The check fails when there are visual changes to review, and the job summary links to the Deja View review page.

It needs a repository variable `SIGHTLINE_URL` (the Sightline server) and two secrets: `SIGHTLINE_TOKEN` (a Sightline API token from Settings → API tokens) and `SIGHTLINE_PROJECT` (the project id, `p_…`).
