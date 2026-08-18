# EchoSpace — Personal Knowledge Map Landing Page & Interactive Demo

> **"See connections between your memories and ideas"**

EchoSpace is a visual knowledge mapping platform that transforms scattered thoughts into an interconnected personal knowledge graph. Unlike traditional note apps that force linear folder hierarchies, EchoSpace makes relationships between memories, articles, conversations, and ideas visually explicit.

![EchoSpace Knowledge Graph Demo](https://raw.githubusercontent.com/md-z-ishan/echospace-landing/main/public/favicon.svg)

---

## Live Demo & Repository

- **Live Landing Page**: [echospace-landing.vercel.app](https://echospace-landing.vercel.app)
- **GitHub Repository**: [github.com/md-z-ishan/echospace-landing](https://github.com/md-z-ishan/echospace-landing.git)

---

## What is EchoSpace?

Humans do not think linearly. You think in connections:
- *"This article connects to that project idea."*
- *"This coffee chat memory validates my core thesis."*
- *"This GNN course provides the math for my spatial canvas."*

EchoSpace solves note fragmentation by rendering your thoughts as **visual spatial nodes** connected by organic relationship links. You rediscover forgotten memories because they are visually tethered to current projects.

---

## Key Features

- 🧠 **Interactive Hero Canvas Network**: Live SVG/Canvas graph with glowing pulse connections, mouse hover halos, and dynamic particle effects.
- ⚡ **Signature Interaction — "Reveal Hidden Connections"**: Click to trigger a smooth 500ms draw animation that reveals AI-suggested vector similarity links between thoughts.
- 📄 **Thought Stream Sidebar**: Filter memories vs. ideas, search by tag or keyword, and inspect node metadata with explicit **DEMO DATA** labeling.
- ➕ **Dynamic Quick-Add Node Modal**: Create your own custom Memory or Idea node and watch it instantly populate into the live knowledge graph.
- 🔍 **Node Detail Inspector Drawer**: Click any node on the graph to inspect full snippet quotes, connected neighbors, AI reasoning, and tags.
- 📐 **Linear vs. Connected Graph Comparison**: Interactive comparison showcase highlighting why traditional folder-based note apps fail.
- 🎯 **Use Cases & Presets**: Specialized profile previews for Writers, Learners, and Creators.
- 📱 **Mobile First & Fully Responsive**: Designed for 390px mobile screens up to 1440px+ ultra-wide displays without horizontal overflow.

---

## Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Vanilla CSS tokens, Deep Indigo `#1E293B`, Glowing Violet `#A78BFA`, Cyan `#06B6D4`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Visualization Engine**: HTML5 Canvas & SVG Bezier Pathing
- **Fonts**: Google Fonts (`Inter` & `JetBrains Mono`)

---

## Quick Start & Local Setup

```bash
# 1. Clone repository
git clone https://github.com/md-z-ishan/echospace-landing.git
cd echospace-landing

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# Open http://localhost:5173/ in your browser
```

---

## Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
echospace-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── Controls.jsx
│   │   │   ├── NodeInspector.jsx
│   │   │   ├── NodeMap.jsx
│   │   │   ├── QuickAddModal.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── StatusBar.jsx
│   │   ├── ui/
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Node.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroVisual.jsx
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── demoData.js
│   ├── hooks/
│   │   └── useNodeMap.js
│   ├── sections/
│   │   ├── DashboardSection.jsx
│   │   ├── FinalCTASection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── HowItWorksSection.jsx
│   │   ├── ProblemSection.jsx
│   │   └── UseCasesSection.jsx
│   ├── styles/
│   │   ├── animations.css
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── DECISIONS.md
├── README.md
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Design Decisions

See [DECISIONS.md](./DECISIONS.md) for full design rationale, trade-off analysis, AI usage disclosures, and the 20-question interview defense guide.

---

## Author & Credits

Built by **Zishan** for the EchoSpace product showcase.
