# My Webpage


## 📂 Project Structure


```
MyWebpage/
├── public/
│   ├── favicon.ico
│   ├── img1.jpg
│   ├── img2.jpg
│   ├── img3.jpg
│   ├── img4.jpg
│   └── og-image.png
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── research/
│   │   │   └── page.tsx
│   │   ├── resume/
│   │   │   └── page.tsx
│   │   ├── search/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── CustomCursor.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ScrollFire.tsx
│   │   ├── Starfield.tsx
│   │   └── Timeline.tsx
│   ├── content/
│   │   └── blogs/
│   ├── data/
│   │   ├── blogs.ts
│   │   ├── models.ts
│   │   ├── projects.ts
│   │   ├── publication.ts
│   │   └── timeline.ts
│   └── lib/
│       └── utils.ts
├── README.md
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```


## 🛠️ Setup & Deployment


### 0. Starter Pack

1. Ensure you have `NodeJS` & `npm` (v18+)

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

or if you decide to clone

```
# Clone the repository
git clone https://github.com/PiyushWithPant/PiyushWithPant.github.io.git

# Install dependencies
npm install
```
### Development Run Application

1. Ensure you have these in your `package.json`
```
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```

2. Execute the below command

```
npm run dev
```

This will run the application at `http://localhost:3000/` (Check terminal once to confirm PORT)


### Build & Static export

This project is configured for GitHub Pages via static HTML export.

```
npm run build
```



### TODO

1. Make it responsive (better for phones, esp the navbar)
2. Remove the custom cursor on phone

> By Piyush Pant  ( पियुष पंत )