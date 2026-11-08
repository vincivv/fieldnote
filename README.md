# Fieldnote (demo site)

A small fake SaaS marketing site used to demo **Sightline** visual regression checks.
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
Sightline should learn to ignore these, so they shouldn't show up as changes.
