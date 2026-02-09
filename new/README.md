# My Webpage


### Project Structure


```
MyWebpage/
├── public/              # Images, Favicons, Resume PDF
├── src/
│   ├── app/             # Next.js 15 App Router (Pages & Layouts)
│   │   ├── layout.tsx   # Navbar, Sidebar, Footer, Visitor Count
│   │   ├── page.tsx     # Bento-Grid Landing Page
│   │   ├── publications/
│   │   ├── research/
│   │   └── blog/
│   ├── components/      # Reusable UI (Cards, Buttons, Timeline)
│   │   ├── ui/          # Low-level "Classy" elements
│   │   └── bento/       # Bento grid specific components
│   ├── data/            # THE SOURCE OF TRUTH (Your JSON files)
│   │   ├── publications.ts
│   │   ├── models.ts
│   │   └── timeline.ts
│   └── lib/             # Utilities (The Sorter, SEO helpers)
│       └── utils.ts
├── next.config.ts       # Configured for GitHub Pages
└── tailwind.config.ts   # Custom colors & Glassmorphism themes
```