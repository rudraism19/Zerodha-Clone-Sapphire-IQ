# Zerodha Clone

A responsive stockbroker landing-page clone built with React.js and CSS as a frontend learning project.

> **Project brief:** SapphireIQ Student Project Guide  
> **Scope:** Frontend UI only. This repository is initialized with the project README; application implementation is not included yet.

## Overview

The goal is to recreate the clean, responsive structure of the Zerodha website's landing page. The project focuses on component-based UI, reusable content sections, responsive layouts, navigation, and deployment.

### Project goals

- Build a responsive landing page using React.js and CSS.
- Organize the interface into reusable components.
- Recreate the navigation, hero, feature/content sections, and footer.
- Test the layout across mobile, tablet, and desktop screen sizes.
- Deploy the finished frontend.

## Technology

| Technology / Tool | Purpose |
| --- | --- |
| React.js | Component-based UI |
| Vite or Create React App | Project setup and development tooling |
| CSS | Styling, Flexbox, Grid, media queries |
| Vercel or Netlify | Deployment |

## Planned application structure

The exact folder structure will be finalized during Module 1. The component hierarchy should include:

- **Navbar** — logo, navigation links, sticky behavior.
- **Hero** — heading, supporting text, and call-to-action buttons.
- **Feature and content sections** — reusable sections, cards, and statistics.
- **Footer** — navigation links and legal information.

## Roadmap

The project is divided into the four modules defined in the SapphireIQ project brief.

### Module 1 — Project Setup & Layout Foundations

**Learning objectives**
- Initialize the React project and folder structure.
- Set up a CSS reset/base stylesheet for consistent rendering.
- Break the page into a component hierarchy: Navbar, Hero, Sections, Footer.

**Core concepts**
- Component-based layout: map a visual design to a component tree before styling.
- CSS reset: neutralize browser default styles for a consistent baseline.

**Tools and technologies**
- Vite / Create React App
- CSS reset
- Component folder structure

**Hands-on checkpoint:** The project scaffold renders with empty placeholder sections matching the target page structure.

### Module 2 — Hero Section & Navigation

**Learning objectives**
- Build a responsive navigation bar with logo and links.
- Build the hero section with heading, subtext, and call-to-action buttons.
- Make the navigation sticky on scroll.

**Core concepts**
- Above-the-fold design: prioritize the content visible without scrolling.
- Sticky positioning: keep navigation accessible while scrolling.

**Tools and technologies**
- CSS Flexbox
- `position: sticky`
- Button components

**Hands-on checkpoint:** The navigation bar and hero section match the live reference site's layout and content.

### Module 3 — Feature & Content Sections

**Learning objectives**
- Build reusable section components for features and stats.
- Populate them with realistic stockbroker-site content.
- Arrange content in a responsive grid.

**Core concepts**
- Reusable section components: one component renders many similar content blocks.
- Grid-based content layout: arrange feature cards or stats in rows and columns.

**Tools and technologies**
- CSS Grid
- Reusable card components

**Hands-on checkpoint:** Feature and stats sections render from a data array, not hardcoded per-item markup.

### Module 4 — Footer, Polish & Deployment

**Learning objectives**
- Build a responsive footer with links and legal text.
- Test and fix layout issues across mobile, tablet, and desktop widths.
- Deploy the finished site.

**Core concepts**
- Responsive breakpoints: adjust layout at defined screen-width thresholds.
- Cross-device testing: catch layout issues before deployment.

**Tools and technologies**
- CSS media queries
- Vercel / Netlify

**Hands-on checkpoint:** The full page is deployed and looks correct on mobile, tablet, and desktop.

## Prerequisites

- **React fundamentals:** JSX, functional components, props, and component composition.
- **CSS fundamentals:** Flexbox, Grid, responsive layouts, and media queries.
- **Tooling:** Vite / Create React App and basic deployment knowledge.

## Getting started

This repository currently contains the project brief only. Application source code and package configuration have not been added yet.

After Module 1 is implemented, installation and local development commands will be documented here.

## Expected outcome

A fully responsive, deployed landing page combining:

| Component | Responsibility |
| --- | --- |
| Navbar | Sticky navigation |
| Hero + Sections | Hero content and reusable content components |
| Footer | Links and legal information |

## Skills practiced

- Component-based layout planning from a visual design.
- Building responsive navigation and hero sections.
- Data-driven, reusable content section components.
- Cross-device responsive testing and deployment.

Use the module exercises as checkpoints while building the application.

## Project status

**Current status:** Planning / README initialized.  
**Implementation status:** Not started.

## Disclaimer

This is an educational frontend recreation project. It is not affiliated with, endorsed by, or connected to Zerodha. It does not provide brokerage, trading, investment, or financial services. Brand names and references belong to their respective owners.
