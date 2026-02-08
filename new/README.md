# My Webpage


### Project Structure


```
my-website/
├── public/              # Your images, PDFs, and favicon
├── src/
│   ├── components/      # REUSABLE PIECES (Navbar, Footer, Timeline)
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── PublicationCard.js
│   ├── app/             # YOUR PAGES
│   │   ├── layout.js    # The "Shell" (Navbar & Footer live here)
│   │   ├── page.js      # Your Homepage
│   │   ├── publications/
│   │   │   └── page.js  # Your Publications page
│   │   └── globals.css  # Your original CSS goes here
├── package.json
└── next.config.js
```