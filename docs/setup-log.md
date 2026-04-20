# Setup Log

## 2026-04-20 — Initial Build

### Platform Decisions
- **Personal site**: GitHub Pages (free, standard in academia + tech)
- **Blog / newsletter**: Substack (frictionless writing, built-in email subscribers)
- **Code repos**: GitHub (already active)
- **Social**: LinkedIn primary for now; X to activate later

### Site Stack
- Astro 4.16.19 + Tailwind (Astrofy template base)
- Hosted via GitHub Pages
- Repo: `github.com/jacoblee1214/jacoblee1214.github.io`

### First-Pass Transformation (handoff 1)
- Replaced Astrofy placeholder content with personal branding
- New pages: Home, Projects, About, CV
- Menu reduced to 5: Home / Projects / Writing / About / CV
- Deleted: blog, store, services, RSS, related layouts
- Writing links externally to `jacoblee1214.substack.com`
- Sitemap integration removed (Astro 4 incompatibility — see content-decisions.md)

### Second-Pass Refinement (handoff 2)
- Home page featured projects: Tanzania / Sound-based / VLM/LLM Study (reshuffled)
- Removed `</>` decoration from section titles
- Expanded Skills section to include LLM/VLM, agents, robotics keywords
- Added M.S. thesis entry in Education
- Created this docs/ folder

### Third-Pass Refinement (handoff 3)
- Generated 6 distinct SVG placeholders for project cards (colored backgrounds + category labels)
- Replaced Astro default `post_img.webp` references across index and projects pages
- Fixed hero CTA: "Let's connect!" (Twitter link) replaced with "Email" (mailto)
- Profile image handled separately by user (optimized to 600x600)

### Deployment Day (2026-04-20)
- First push to GitHub: commit `ddd6f62`
- Workflow failure #1: `withastro/action@v3` couldn't detect package manager (no pnpm version specified)
- Workflow fix: replaced with explicit Node setup + npm install + npm run build
- Second push: commit with fixed `deploy.yml` — **SUCCESS**
- Site live at https://jacoblee1214.github.io
- Jekyll auto-build still failing (harmless — different workflow, not used); `.nojekyll` added to disable

### Lessons
- `withastro/action` auto-detection can fail silently. Writing the workflow explicitly (setup-node → install → build → upload) is more reliable.
- GitHub Pages has two build modes: "Deploy from branch" (Jekyll) and "GitHub Actions". Must set to Actions for custom build pipelines.
