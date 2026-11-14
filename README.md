# Zerodha Clone

A responsive stockbroker landing-page clone built with React.js and CSS as a frontend learning project.

> **Project brief:** SapphireIQ Student Project Guide  
> **Current stage:** Module 1 — Project Setup & Layout Foundations

## Overview

The goal is to recreate the landing-page structure of the Zerodha website using React, reusable components, and responsive CSS. This is an educational frontend project only.

## Technology

- **React 19** — component-based UI
- **Vite 6** — development server and production build tooling
- **CSS** — reset, base styles, and page styling

## Getting started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal (usually `http://localhost:5173`).

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project structure

```text
zerodha-clone-sapphire-iq/
├── index.html
├── package.json
├── .gitignore
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Sections.jsx
        └── Footer.jsx
```

## Module roadmap

### Module 1 — Project Setup & Layout Foundations

**PRD objectives**
- Initialize the React project and folder structure.
- Set up a CSS reset/base stylesheet for consistent rendering.
- Break the page into a component hierarchy: Navbar, Hero, Sections, Footer.

**Implemented**
- Vite + React project scaffold and npm scripts.
- HTML entry point and React mounting file.
- CSS reset and base stylesheet.
- Root `App` component composing Navbar, Hero, Sections, and Footer.
- Placeholder components for each page region.
- `.gitignore` for dependencies, build output, and environment files.

**Checkpoint:** Run `npm install` and `npm run dev`; confirm that the page loads and displays all four placeholder regions. The placeholders intentionally contain no Module 2–4 design implementation.

### Module 2 — Hero Section & Navigation

- Build a responsive navigation bar with logo and links.
- Build the hero section with heading, subtext, and call-to-action buttons.
- Make the navigation sticky on scroll.

### Module 3 — Feature & Content Sections

- Build reusable feature and statistics components.
- Populate sections with realistic stockbroker-site content.
- Arrange content in a responsive grid and render repeated items from data.

### Module 4 — Footer, Polish & Deployment

- Build a responsive footer with links and legal text.
- Test mobile, tablet, and desktop layouts.
- Deploy the finished site.

## Learning outcomes

- Plan a component tree from a visual design.
- Build reusable React components.
- Establish a consistent CSS baseline.
- Develop and build a React application with Vite.

## Project status

- [x] Module 1 scaffold and component placeholders added.
- [ ] Module 1 local run/build verification.
- [ ] Module 2 — Hero Section & Navigation.
- [ ] Module 3 — Feature & Content Sections.
- [ ] Module 4 — Footer, Polish & Deployment.

## Disclaimer

This is an educational frontend recreation project. It is not affiliated with, endorsed by, or connected to Zerodha. It does not provide brokerage, trading, investment, or financial services. Brand names and references belong to their respective owners.
