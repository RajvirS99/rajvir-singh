# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start dev server at http://localhost:3000
pnpm build    # Production build (also runs generateStaticParams for blog routes)
pnpm start    # Serve the production build
pnpm lint     # ESLint (flat config, extends next/core-web-vitals + next/typescript)
```

Package manager is **pnpm** (see `pnpm-lock.yaml`). There is no test runner configured.

## Architecture

A minimal Next.js 16 (App Router) + React 19 + Tailwind v4 personal portfolio. Single-page profile at `/` plus an MDX-backed blog.

**Tabbed profile (`app/page.tsx` → `app/components/Tabs.tsx`)**
The home page renders a profile block and a client-side `TabsContainer`. Tabs (Experience, Projects, Blogs, Open Source Contributions) are switched purely in React state — no routing — and each tab maps to a component in `app/components/`. The content in these tab components (Experience, Projects, OpenSourceContributions, and the Blogs list) is **hardcoded inline data**, not loaded from a CMS or filesystem.

**Blog (MDX, two parallel systems — keep in sync)**
- Posts live as `.mdx` files in `content/blog/`. Each file exports a `metadata` object (`title`, `date`, `description`) used for page `<title>`/meta and listing.
- `lib/blog.ts` reads the `content/blog/` directory at build time (`getAllPostSlugs`, `getAllPosts`) by dynamically importing each MDX module to pull its `metadata`.
- `app/blog/[slug]/page.tsx` is statically generated (`generateStaticParams` + `dynamicParams = false`); unknown slugs `notFound()`. It dynamically imports the MDX module and renders its default export inside a Tailwind Typography (`prose`) article.
- **Gotcha:** the Blogs list shown on the home tab (`app/components/Blogs.tsx`) is a separate **hardcoded** array of posts, independent of `lib/blog.ts`. Adding a new post requires creating the `.mdx` file **and** updating this array if it should appear on the home page.

**MDX pipeline (`next.config.mjs`)**
`@next/mdx` wraps the Next config. `pageExtensions` includes `md`/`mdx` so MDX files are first-class. Remark/rehype plugins: `remark-gfm` and `rehype-pretty-code` (Shiki) for syntax highlighting with separate `github-dark`/`github-light` themes (`defaultColor: false`, so highlighting follows the active theme via CSS). `mdx-components.tsx` is the required hook for customizing MDX element rendering (currently pass-through).

**Theming (no library — manual class toggling)**
- An inline `<script>` in `app/layout.tsx` runs before paint to read `localStorage.theme` (falling back to `prefers-color-scheme`) and add `dark`/`light` to `<html>`, preventing a flash of wrong theme.
- `app/components/Header.tsx` is the actual interactive toggle (Sun/Moon from `lucide-react`); it persists the choice to `localStorage` and toggles the `<html>` class. It also contains the "Resume" link (`/resume.pdf`).
- `app/components/ThemeSwitcher.tsx` is a **stub** and not used — Header owns theming.
- `suppressHydrationWarning` is set on both `<html>` and `<body>` because the pre-paint script (and browser extensions) mutate these before hydration.

## Conventions

- Import alias `@/*` maps to the repo root (e.g. `@/lib/blog`, `@/content/blog/...`).
- Server Components by default; only files needing state/effects (`Tabs`, `Header`) carry `"use client"`.
- Inline SVG icon components live in `assets/` (e.g. `Github.tsx`, `ResumeIcon.tsx`) and take `SVGProps`; they use `currentColor`/`stroke` so color is driven by parent text color and the theme.
- Static assets served from the URL root go in `public/` (e.g. `resume.pdf` for the header link).
- Styling is Tailwind utility classes inline; dark mode via `dark:` variants. Tailwind v4 is configured through `postcss.config.mjs` (`@tailwindcss/postcss`), not a `tailwind.config` file.
