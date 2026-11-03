# M0RC — Personal Portfolio & Brand

<p align="center">
<strong>Building Digital Experiences for a Better Tomorrow.</strong>
</p>

<p align="center">
<img src="https://img.shields.io/badge/Version-0.6.0-white?style=for-the-badge&labelColor=050505" />
<img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=050505" />
<img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite&logoColor=646CFF&labelColor=050505" />
<img src="https://img.shields.io/badge/Responsive-Mobile%20Ready-success?style=for-the-badge&labelColor=050505" />
<img src="https://img.shields.io/badge/License-MIT-white?style=for-the-badge&labelColor=050505" />
</p>

---

## About M0RC

M0RC is a personal portfolio and brand presentation project designed to introduce my professional identity, showcase my work, and communicate the vision behind my brand.

It combines a personal resume with a company-style presentation, providing a central place to explore my skills, projects, services, and future direction.

The project is built with a minimal black-and-white visual identity, focusing on clean layouts, modern styling, smooth animations, and reusable React components.

## Features

- Personal portfolio and professional introduction.
- Brand and company presentation.
- Modern black-and-white visual identity.
- Component-based architecture using React.
- Fully responsive layout across desktop, tablet, and mobile.
- Entrance animations and hover/transform interactions across all sections.
- Custom styling and visual design.
- Built with Vite for a fast development experience.
- Continuous development and planned improvements.

## Tech Stack

| Technology | Purpose |
|---|---|
| React | UI development |
| Vite | Development server and build tool |
| CSS | Styling, animations, and responsive design |
| JavaScript | Application logic |

## Design

The visual identity follows a minimal black-and-white aesthetic.

The design focuses on simplicity, contrast, typography, and a consistent visual language to create a professional digital presence. As of v0.6.0, this visual language is now reinforced with subtle motion — fade-in entrances, hover transforms, and animated underlines — to make the interface feel more alive without breaking the minimal aesthetic.

## Responsive Design

Starting in v0.6.0, all core components (Menu, Header, About, Services, Footer) are fully responsive, with dedicated breakpoints for:

- Desktop — full multi-column layouts.
- Tablet (≤ 992px) — adjusted spacing, resized typography, condensed grids.
- Mobile (≤ 768px) — stacked layouts, full-width buttons, collapsible navigation menu.
- Small mobile (≤ 480px) — further typography and spacing refinements.

The navigation menu now includes an animated hamburger toggle for small screens, and the Services section uses a responsive CSS Grid that reflows from 4 → 2 → 1 columns depending on viewport width.

## Current Status

<kbd>v0.6.0 — Responsive & Animation Update</kbd>

This release builds on the initial brand identity (v0.5.0) by introducing full responsive behavior and interactive motion design across every core component.

What's new in v0.6.0:

- Responsive design implemented for Menu, Header, About, Services, and Footer.
- Mobile navigation with animated hamburger menu.
- Entrance animations (staggered fade-ins) across all sections.
- Hover and transform effects on buttons, cards, icons, and links.
- Minor copy and accessibility fixes (alt text, semantic corrections).

Known limitations:

- Some planned sections and features are still under development.
- Shared animation styles are not yet consolidated into a single global stylesheet.
- Additional technologies and improvements are planned for future releases.

## Roadmap

M0RC is intended to be an actively maintained and continuously evolving project.

Planned improvements include:
- Consolidate shared animations into a global Animations.css.
- Additional pages, sections, and interactive features.
- Improved component architecture.
- Integration of new technologies.
- Performance and accessibility improvements.
- Further development of the M0RC brand identity.

## Versioning

The project follows semantic versioning.

- v0.5.0 — Initial development version (brand identity, core structure).
- v0.6.0 — Current version (responsive design, animations, interactions).
- v1.0.0 — Planned first stable release.

Future versions will introduce new features, improvements, and technologies as the project evolves.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
<strong>M0RC</strong><br/>
Building Digital Experiences for a Better Tomorrow.
</p>

---

Changes from your v0.5.0 version:
- Version badge updated to 0.6.0, added a "Responsive" badge
- New Responsive Design section describing breakpoints and what's now responsive
- "Current Status" rewritten to describe what changed in this release instead of repeating v0.5.0 text
- Moved "Responsive design is not implemented yet" out of known limitations (it's done now) and removed it from the roadmap, replaced with the animation-consolidation task
- Table formatting fixed to proper Markdown table syntax (your original used | without header separator, which may not render correctly on GitHub)