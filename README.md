# Mohan Giri — portfolio

Personal site: projects, background and writing. Live at https://girimohan.vercel.app.

Built with Next.js 16 (App Router, fully static), React 19, TypeScript and Tailwind CSS. Deployed on Vercel.

## Develop

```bash
pnpm install --frozen-lockfile
pnpm dev          # http://localhost:3000
pnpm build        # production build (also type-checks)
pnpm typecheck
```

After adding or removing a dependency, run `pnpm install --frozen-lockfile` once before `pnpm build`.
Builds straight after `pnpm add`/`pnpm remove` have failed locally with a Next.js prerender invariant,
and a clean install fixes it.

## Where things live

| What | File |
|---|---|
| Name, links, experience, education, skills | `lib/data/profile.ts` |
| Projects (and the "smaller projects" list) | `lib/data/projects.ts` |
| Blog posts | `lib/data/blogs.ts` |
| Lab experiments | `lib/data/experiments.ts` |
| Home page sections | `components/sections/` |
| Hero tiles (terminal, live pipeline) | `components/hero/` |
| Colours, fonts, animations | `app/globals.css`, `tailwind.config.ts` |

Project pages are generated from `lib/data/projects.ts` at `/projects/<slug>`. Old numeric URLs (`/projects/3`) redirect to the slug.

To add a project, add an entry to `projects`. Array order is display order. Put screenshots in `public/images/projects/`.
The home page's "Selected work" order is set in `components/sections/projects-section.tsx`.

## Contact form

The form on `/contact` posts to [Web3Forms](https://web3forms.com). Set `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel's environment variables.
Without it, the form is disabled and visitors are pointed to email.
