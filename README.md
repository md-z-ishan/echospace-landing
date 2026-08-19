# EchoSpace — Personal Knowledge Map Landing Page & Interactive Demo

> **"See connections between your memories and ideas"**

EchoSpace is an interactive visual knowledge mapping platform designed for the **ACDYON Technologies Frontend Challenge (Part 2 — The Premium Home Page)**. Unlike traditional note-taking applications that force thoughts into rigid linear folder hierarchies where past research gets forgotten, EchoSpace renders memories, articles, conversations, and project ideas as an interconnected spatial knowledge graph.

---

## 🌐 Live Demo & Submission Links

- **Live Deployed Landing Page**: [echospace-landing.vercel.app](https://echospace-landing.vercel.app)
- **GitHub Repository**: [github.com/md-z-ishan/echospace-landing](https://github.com/md-z-ishan/echospace-landing.git)
- **Design Decisions Document**: [DECISIONS.md](DECISIONS.md)

---

## 💡 What Problem Does EchoSpace Solve?

Humans do not think in linear folder lists. You think in associative connections:
- *"This research paper connects directly to my startup feature roadmap."*
- *"This coffee chat memory validates my core project thesis."*
- *"This GNN course provides the mathematical foundation for my spatial canvas."*

EchoSpace solves note fragmentation by tethering your thoughts into an organic **spatial node network**. You rediscover forgotten insights because past memories remain visually linked to active projects.

---

## ⭐ Key Features & Technical Highlights

### ⚡ 1. Signature Interaction — "Reveal Hidden Connections"
- **Side-by-Side Showcase**: Placed after *How It Works*, displaying a direct visual comparison: **BEFORE (4 static links)** vs **AFTER (7 AI-suggested links)**.
- **Micro-Interaction**: Clicking *"Reveal Hidden Connections"* triggers a smooth 500ms stroke-dashoffset SVG drawing animation, glowing violet container rings, and a Web Audio API harmonic chime.

### 🧠 2. Hero Section & Preset Switcher
- **Hero Keyframe Sequence**: Container fade-in, staggered node pop-in keyframe animations (100ms apart), and self-drawing SVG tethers.
- **Dataset Switcher**: Toggle between 3 pre-loaded domain graphs (*AI & Memory*, *Startup Strategy*, *Philosophy & Habits*) with real-time vector re-positioning.
- **Value Badges**: Pill-shaped benefit cards (*No folder clutter*, *Visual node links*, *Instant discovery*) and 105% hover scale CTA buttons.

### 🔷 3. ACDYON Honesty — Demo Data Disclosure Banner
- **Honesty Requirement Compliance**: Prominent blue disclosure banner (*"↓ Demo Knowledge Map — Example Data ↓"*) placed at the top of the dashboard section to maintain 100% transparency with evaluators.

### 🌐 4. Interactive Graph Layout Switcher
- **Spatial Layout Modes**: Transform the canvas on the fly:
  - **Cluster View**: Organic force network layout.
  - **Timeline View**: Chronological axis from left to right.
  - **Category View**: Grouped spatial columns (Memories vs. Ideas).

### ⏳ 5. Time-Travel Graph Growth Slider
- **Graph Evolution**: Interactive slider (`Aug 01` ➔ `Aug 24`) allowing users to watch nodes emerge and tether as their visual dimaag grows over time.

### ⌨️ 6. Raycast-Style Command Palette (`⌘K` / `Ctrl+K`)
- **Keyboard Navigation**: Press `⌘K` or click the search trigger to open a sleek Raycast/Linear-style overlay. Jump to any node or trigger actions without using a mouse.

### 🤖 7. Ask AI Knowledge Assistant Drawer
- **AI Synthesis**: Slide-over drawer presenting vector similarity scores (e.g. 84%–94% match) and contextual synthesis summaries explaining *why* notes connect.

### 📊 8. Knowledge Density & Analytics Modal
- **Graph Metrics**: Modal displaying Centrality Scores (influential thoughts) and Memory Decay Rate calculations.

### 🔗 9. Interactive Node Connector & Custom Creation
- **Node Linking**: Connect any two nodes on the graph and assign custom relationship labels (*"Inspired by"*, *"Builds on"*, *"Validates"*).
- **Quick-Add Modal**: Create new custom Memory or Idea nodes that populate live into the active canvas.

### 🔍 10. Node Detail Inspector Drawer
- **Deep Inspection**: Click any node to open a right drawer showcasing full quote snippets, creation dates, focus tags, and tethered neighbor nodes.

### 📄 11. Thought Stream Sidebar & Tag Filtering
- **Real-Time Search**: Instant keyword search, type filter pills (*All*, *Memories*, *Ideas*), and focus tag filtering (`#Cognition`, `#AI`, `#UX Research`).

### 📥 12. Knowledge Graph Export
- **Data Ownership**: One-click download of the complete Knowledge Graph state as a structured `.json` export file.

### 🔌 13. Connect Your Tools (Integrations)
- **Ecosystem Cards**: *Notion* (`Coming Soon`), *Obsidian* (`Coming Soon`), *Markdown Export* (`Available`), and *REST API* (`Roadmap`) without using copyrighted trademark logos.

### ⌨️ 14. Power User Shortcuts Section
- **Hotkey Guide**: 6 styled hotkey cards (`⌘K`, `⌘N`, `⌘I`, `⌘L`, `⌘R`, `⌘/`) displayed in a responsive grid.

### 🔒 15. Built With Privacy First
- **Data Protection**: Transparent trust cards highlighting end-to-end encryption, no AI model training on user notes, and open-source security practices.

### 🌙 16. High-Contrast Midnight Dark Theme (`#0B0F19`)
- **All-or-Nothing Dark Mode**: Full dark mode engine with Navbar Sun/Moon toggle button, harmonic audio feedback, and high-contrast text legibility in both Light and Dark modes.

### 🎁 17. ACDYON Bonus Round — Konami Code Easter Egg
- **Secret Unlocked**: Type the classic Konami Code (**`↑ ↑ ↓ ↓ ← → ← → B A`**) anywhere on the site to trigger a secret audio chime chord and unlock Quantum Neural Mode!

---

## 🎮 How To Test & Explore The Demo (Step-by-Step)

1. **Explore Hero Presets**: Click *AI & Memory*, *Startup Strategy*, or *Philosophy & Habits* in the hero visualizer.
2. **Trigger Signature Reveal**: Scroll to the *Discover Hidden Insights* showcase (or click *"Reveal Hidden Connections"* in the dashboard) to observe the 500ms SVG line animation and Web Audio chime.
3. **Switch Graph Layouts**: In the product dashboard, click **Cluster**, **Timeline**, or **Categories** to see the nodes dynamically shift positions.
4. **Test Time Travel**: Drag the *Time Travel* slider to see graph growth over time.
5. **Open Command Palette**: Press **`⌘K`** (or **`Ctrl+K`**) to search nodes via keyboard.
6. **Open AI Assistant**: Click **"Ask AI Brain"** to view contextual reasoning for note connections.
7. **Create & Link Nodes**: Click **"+ Add Memory"** to insert a note, then click **"Link Nodes"** to tether two thoughts together.
8. **Inspect Nodes**: Click any node card on the canvas or sidebar to open the inspector drawer.
9. **Toggle Theme**: Click the Moon/Sun icon in the header to switch between Light Mode and Midnight Dark Mode (`#0B0F19`).
10. **Unlock Easter Egg**: Type **`↑ ↑ ↓ ↓ ← → ← → B A`** on your keyboard for the ACDYON bonus round secret!

---

## 🛠️ Tech Stack & Architecture

- **Core Framework**: React 18 with Vite 5 (Fast Refresh)
- **Styling System**: Tailwind CSS with custom glassmorphism utilities & HSL dark mode tokens
- **Vector & Path Engine**: Custom SVG geometry math (`<line>`, `<path>`, stroke-dashoffset animations)
- **Audio Synthesizer**: Native Web Audio API oscillator nodes (pure client-side harmonic sound generation)
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono font stacks

---

## 💻 Local Development Setup

```bash
# 1. Clone repository
git clone https://github.com/md-z-ishan/echospace-landing.git

# 2. Navigate into project directory
cd echospace-landing

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev

# 5. Build production bundle
npm run build
```

---

## 📄 License & Attribution

Designed and engineered for the **ACDYON Technologies Frontend Challenge**. Includes [DECISIONS.md](DECISIONS.md) detailing technical design choices, scope tradeoffs, and engineering ownership.
