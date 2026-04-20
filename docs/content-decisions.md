# Content Decisions

## Positioning

**Tagline:** Physical AI Systems Engineer

**Core framing:** Not "a VLA researcher" but "an engineer with 10 years of deploying AI on physical machines, currently working on humanoid robotics." The breadth is the moat.

## What's Disclosed vs Hidden

- **Current company name**: HIDDEN in this version. The field "an AI engineer working on humanoid robotics" is used instead of naming the employer.
- **Past affiliations**: Fully disclosed (CAU, SNU, UConn) — publicly documented anyway.
- **Personal projects (Jarvis, Claude Skills, VLM experiments)**: Disclosed under "VLM/LLM Study" project.

Reasoning: Current employer asked to be kept private at least for the opening phase of the blog/site. Once content is established (5+ posts), may re-evaluate.

## Featured Projects — Home Page

Chosen to show past–present–future arc in three cards:
1. **Tanzania** — depth of experience (10-yr career moat)
2. **Sound-based Monitoring** — published industrial AI (technical credibility)
3. **VLM/LLM Study** — builder mindset (forward-looking)

FDM and other factory projects live on the full Projects page, not the home teaser.

## Writing Channel

- Substack at `jacoblee1214.substack.com`
- Kept separate from the personal site rather than blog-on-site
- Reasoning: email subscribers + lower friction to write
- Reserved `hyunsulee.substack.com` as a second publication for future use

## Tech Stack Judgment Calls

1. **Sitemap integration removed** because `@astrojs/sitemap@3.7.2` requires Astro 5 hooks. Astro 4 is fine without it for now.
2. **HorizontalCard nested-anchor fixed** (tags changed from `<a>` to `<span>`).
