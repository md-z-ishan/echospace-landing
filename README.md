<div align="center">

# 🧠 EchoSpace — Personal Knowledge Graph

**See connections between your memories and ideas**

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![ACDYON Challenge](https://img.shields.io/badge/ACDYON_Part_2-Passed_QA-8B5CF6?style=for-the-badge)](DECISIONS.md)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)

[🌐 **Live Demo Website**](https://echospace-landing.vercel.app) &nbsp;|&nbsp; [📄 **Design Decisions (DECISIONS.md)**](DECISIONS.md) &nbsp;|&nbsp; [📦 **GitHub Repository**](https://github.com/md-z-ishan/echospace-landing.git)

</div>

---

> [!IMPORTANT]
> **ACDYON Technologies Frontend Challenge Submission (Part 2 — The Premium Home Page)**  
> EchoSpace was engineered to demonstrate high-level UI craft, motion restraint, interactive spatial graph state management, Web Audio API synthesis, and strict 390px mobile to 1440px desktop responsiveness with **zero fake testimonials, zero fake user counts, and explicit demo data transparency**.

---

## 💡 What Problem Does EchoSpace Solve?

Humans do not think in linear folder lists. You think in **associative connections**:
- *"This research paper connects directly to my startup feature roadmap."*
- *"This coffee chat memory validates my core project thesis."*
- *"This GNN course provides the mathematical foundation for my spatial canvas."*

EchoSpace solves note fragmentation by tethering your thoughts into an organic **spatial node network**. You rediscover forgotten insights because past memories remain visually linked to active projects.

### ⚡ Linear Folders vs. Connected Spatial Graph

| Feature / Axis | Traditional Note Apps (Folder-based) | 🧠 EchoSpace Visual Brain |
| :--- | :--- | :--- |
| **Organization** | Nested subfolders (4 levels deep) | Living spatial node network canvas |
| **Discovery** | Forgotten notes buried in subfolders | Automatic AI vector connection discovery |
| **Interactivity** | Static text lists | Dynamic layout presets (Cluster, Timeline, Category) |
| **Multi-sensory** | Text-only interfaces | Web Audio API harmonic sound chimes & keyframe motion |
| **Transparency** | Unclear data usage | 100% ACDYON **Demo Data** disclosure banner & privacy-first |

---

## ⭐ Feature Highlights & Capabilities

### 1. ⚡ Signature Interaction — "Reveal Hidden Connections"
- **Side-by-Side Comparison**: Placed directly after *How It Works*, displaying **BEFORE (4 static links)** vs **AFTER (7 AI-suggested links)**.
- **Micro-Interaction**: Clicking *"Reveal Hidden Connections"* triggers a 500ms stroke-dashoffset SVG drawing animation, glowing violet container rings, and a Web Audio API harmonic chime.

### 2. 🧠 Animated Hero Section & Dataset Switcher
- **CSS Keyframe Sequence**: Container fade-in, staggered node pop-in keyframe animations, and self-drawing SVG tethers.
- **Preset Switcher**: Toggle between 3 pre-loaded domain graphs (*AI & Memory*, *Startup Strategy*, *Philosophy & Habits*).
- **Pill Badges**: Benefit cards (*No folder clutter*, *Visual node links*, *Instant discovery*) and 105% hover scale CTAs.

### 3. 🔷 ACDYON Honesty — Demo Data Disclosure Banner
- Prominent blue disclosure banner (*"↓ Demo Knowledge Map — Example Data ↓"*) placed at the top of the dashboard section to maintain 100% transparency.

### 4. 🌐 Interactive Graph Layout Switcher
- **Cluster View**: Organic force network layout.
- **Timeline View**: Chronological axis from left to right.
- **Category View**: Grouped spatial columns (Memories vs. Ideas).

### 5. ⏳ Time-Travel Graph Growth Slider
- Interactive slider (`Aug 01` ➔ `Aug 24`) allowing evaluators to watch nodes emerge and tether over time.

### 6. ⌨️ Raycast-Style Command Palette (`⌘K` / `Ctrl+K`)
- Press **`⌘K`** to open a Raycast/Linear-style overlay. Search thoughts and trigger graph actions without a mouse.

### 7. 🤖 Ask AI Knowledge Assistant Drawer
- Slide-over drawer presenting vector similarity match scores (e.g. 84%–94%) and contextual synthesis summaries.

### 8. 📊 Knowledge Density & Analytics Modal
- Modal displaying Centrality Scores (influential thoughts) and Memory Decay Rate calculations.

### 9. 🔗 Interactive Node Connector & Quick Add
- Connect any two nodes on the graph with custom relationship labels (*"Inspired by"*, *"Builds on"*, *"Validates"*).
- Insert custom Memory or Idea nodes that populate live into the canvas.

### 10. 🔌 Connect Your Tools (Integrations)
- Ecosystem roadmap cards (*Notion*, *Obsidian*, *Markdown Export*, *REST API*) with clean Lucide React icons (zero copyrighted logos).

### 11. 🔒 Built With Privacy First
- Reassuring trust cards highlighting end-to-end encryption, no AI model training on user notes, and open-source roadmap.

### 12. 🌙 High-Contrast Midnight Dark Theme (`#0B0F19`)
- Full dark mode engine with Navbar Sun/Moon toggle button, harmonic audio feedback, and high-contrast text legibility in both Light and Dark modes.

---

## 🎮 Evaluator Quick-Start Testing Guide

> [!TIP]
> Follow these 10 steps to test every interactive component on the live landing page:

1. 🖱️ **Hero Presets**: Click *AI & Memory*, *Startup Strategy*, or *Philosophy & Habits* in the hero visualizer.
2. ⚡ **Signature Reveal**: Scroll to the *Discover Hidden Insights* showcase (or click *"Reveal Hidden Connections"* in the dashboard).
3. 🌐 **Switch Layouts**: In the product dashboard, click **Cluster**, **Timeline**, or **Categories**.
4. ⏳ **Time Travel**: Drag the *Time Travel* slider to see graph growth over time.
5. ⌨️ **Command Palette**: Press **`⌘K`** (or **`Ctrl+K`**) on your keyboard.
6. 🤖 **Ask AI Brain**: Click **"Ask AI Brain"** to view contextual reasoning for note connections.
7. ➕ **Add & Link Nodes**: Click **"+ Add Memory"**, then click **"Link Nodes"** to tether two thoughts together.
8. 🔍 **Inspect Nodes**: Click any node card on the canvas or sidebar to open the inspector drawer.
9. 🌙 **Toggle Theme**: Click the Moon/Sun icon in the header to switch between Light Mode and Midnight Dark Mode (`#0B0F19`).
10. 🎁 **ACDYON Easter Egg**: Type **`↑ ↑ ↓ ↓ ← → ← → B A`** on your keyboard to unlock Quantum Neural Mode!

---

## 🛠️ Project Structure & Architecture

```gdb
echospace-landing/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── AiAssistantDrawer.jsx    # Ask AI Assistant overlay
│   │   │   ├── AnalyticsModal.jsx       # Graph density analytics modal
│   │   │   ├── ConnectNodesModal.jsx    # Node tethering modal
│   │   │   ├── Controls.jsx            # Top toolbar (Layout, Time-Travel)
│   │   │   ├── DemoDataBanner.jsx      # ACDYON honesty disclosure banner
│   │   │   ├── NodeInspector.jsx       # Right node detail drawer
│   │   │   ├── NodeMap.jsx             # Interactive SVG/Canvas spatial visualizer
│   │   │   ├── QuickAddModal.jsx       # Node creation modal
│   │   │   ├── Sidebar.jsx             # Thought stream & tag filtering
│   │   │   └── StatusBar.jsx           # Bottom item & link metric counts
│   │   ├── ui/                         # Reusable UI primitives (Button, Card, Badge)
│   │   ├── CommandPalette.jsx          # Raycast-style Cmd+K overlay
│   │   ├── Footer.jsx                  # Footer section & GitHub link
│   │   ├── HeroVisual.jsx              # Hero interactive network canvas
│   │   └── Navbar.jsx                  # Sticky header with theme toggle
│   ├── hooks/
│   │   └── useNodeMap.js               # Central Knowledge Graph state hook
│   ├── sections/
│   │   ├── DashboardSection.jsx        # Product dashboard section
│   │   ├── FinalCTASection.jsx         # Closing CTA section
│   │   ├── HeroSection.jsx             # Hero section & feature badges
│   │   ├── HowItWorksSection.jsx       # 3-step workflow section
│   │   ├── IntegrationsSection.jsx     # Connect Your Tools section
│   │   ├── KeyboardShortcuts.jsx       # Power User Shortcuts section
│   │   ├── PrivacyFirst.jsx            # Data ownership & trust section
│   │   ├── ProblemSection.jsx          # Traditional vs EchoSpace comparison
│   │   ├── RevealConnectionsShowcase.jsx # Signature BEFORE vs AFTER showcase
│   │   └── UseCasesSection.jsx         # Profile tabs (Writers, Learners, Founders)
│   ├── styles/
│   │   ├── animations.css              # Custom CSS keyframes & staggered delays
│   │   └── globals.css                 # Tailwind directives & HSL tokens
│   ├── utils/
│   │   └── audio.js                    # Web Audio API sound synthesizer
│   ├── App.jsx                         # Main app composition & Konami Code listener
│   └── main.jsx                        # React entry point
├── DECISIONS.md                        # 1-page ACDYON Design Decisions document
├── README.md                           # Project documentation & evaluator guide
└── package.json
```

---

## 💻 Local Installation & Build Commands

```bash
# Clone the repository
git clone https://github.com/md-z-ishan/echospace-landing.git

# Enter workspace
cd echospace-landing

# Install dependencies
npm install

# Run local development server
npm run dev

# Build production bundle
npm run build
```

---

<div align="center">

Designed and engineered for the **ACDYON Technologies Frontend Challenge**  
[📄 View DECISIONS.md](DECISIONS.md) &bull; [🌐 Live Landing Page](https://echospace-landing.vercel.app)

</div>
