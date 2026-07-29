# AstroSphere - Modern Responsive Landing Page and Blog

A beautiful, modern, fully responsive Astro website built with Tailwind CSS. It features a responsive landing page, a dedicated blog post listing page, and dynamic routing for individual blog posts powered by Astro Content Collections.

This project is meticulously designed to be simple, clean, and pre-structured for seamless integration with **Pages CMS** or any other Git-based Content Management System.

---

## Features

- **🚀 Perfect Performance**: Zero JavaScript shipped to the client by default thanks to Astro’s static generation.
- **🎨 Beautiful Modern Styling**: Utility-first CSS using Tailwind CSS with sleek hover animations, subtle gradients, and custom responsive layouts.
- **📱 Fully Responsive**: Thoughtfully built and styled for optimal mobile, tablet, and desktop viewing.
- **📝 Content Collections**: Pre-configured markdown schema for blog posts using schema-typed frontmatter values (date, tags, description, images).
- **📂 Component Architecture**: Clean, isolated, reusable elements such as Hero, Navbar, Footer, Features, Blog Cards, and CTAs.
- **🔧 CMS Ready**: Easy to extend or map with modern editors like Pages CMS. No database setup needed.

---

## Tech Stack

- **Framework**: [Astro (v5+)](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Fonts**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

---

## Folder Structure

```text
src/
├── assets/             # Project asset placeholders
├── components/         # Reusable UI elements (Navbar, Footer, BlogCard, FeatureCard, etc.)
├── content/            # Static data and Collections
│   ├── blog/           # Markdown blog posts
│   └── config.ts       # Collection Schema declaration (Strictly typed with Zod)
├── layouts/            # Global page shell wrappers (Layout.astro)
├── pages/              # Routing files
│   ├── blog/
│   │   ├── [...slug].astro  # Dynamic blog article route
│   │   └── index.astro      # Main Blog landing list page
│   └── index.astro          # Landing homepage
└── styles/             # Stylesheet configuration (global.css containing tailwind imports)
```

---

## Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v22+ recommended).

### 1. Install Dependencies

In the root of the project folder, run:

```bash
npm install
```

### 2. Run the Development Server

Start the local server with background/standard mode:

```bash
npm run dev
```

The dev server will spin up. Usually, you can open [http://localhost:4321](http://localhost:4321) in your browser to view and preview the site.

### 3. Build for Production

To compile the site into static HTML ready for web hosting:

```bash
npm run build
```

The compiled output will be generated inside the `dist/` directory, optimized and ready to deploy.

---

## CMS Compatibility & Customization

To edit, remove, or add blog articles, simply modify or create new markdown (`.md`) files inside `src/content/blog/`. Make sure every new markdown file contains the required frontmatter properties defined inside `src/content/config.ts`:

```yaml
---
title: "Your Post Title"
author: "Author Name"
pubDate: YYYY-MM-DD
image: "https://your-image-url.com"
tags: ["Tag1", "Tag2"]
description: "A short snippet summary of the post."
---
Your markdown content here...
```
