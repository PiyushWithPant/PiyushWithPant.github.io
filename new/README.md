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


### Usage Guide


#### 0. Starter Pack

1. Install `NodeJS` & `npm`

2. Install the following packages as below -

```
# This creates "package.json"
npm init -y

# This installs the "Core 3" requirements for Next.js
npm install next@latest react@latest react-dom@latest

# This installs UI requirements
npm install framer-motion lucide-react clsx tailwind-merge

# This installs Development tools required
npm install -D typescript @types/node @types/react @types/react-dom postcss autoprefixer tailwindcss
```

