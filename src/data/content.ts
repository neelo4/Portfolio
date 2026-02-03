export const profile = {
  name: "Neelofar Khan",
  title: "Senior Frontend Developer",
  location: "London, United Kingdom",
  availability: "Currently crafting self-directed fintech experiments",

  summary: `I design calm, data-rich web apps for teams who live in complex dashboards all day. My toolkit is React, TypeScript, Next.js, and a design-system mindset that keeps accessibility, performance, and realtime data top of mind. This portfolio is a living build-log of the products, experiments, and component libraries I craft for fintech and infra teams.`,
  email: "neelo4khan@gmail.com",

  linkedin: "https://www.linkedin.com/in/neelofar-k-32b726b8/",
  github: "https://github.com/neelo4",
  resumeLink:
    "https://www.linkedin.com/in/neelofar-k-32b726b8/details/featured/",
  heroHighlights: [
    "Independent fintech R&D sprints & open devlogs",
    "Component libraries with design tokens + Storybook systems",
    "Realtime data visualisations with GraphQL + streaming UX",
  ],
};

export const heroDetails = {
  eyebrow: "Independent Frontend Studio · 2026",
  photo: {
    src: "/images/neelofar.jpg",
    alt: "Neelofar Khan",
    caption: "London, United Kingdom",
  },
};

export const aboutContent = {
  intro:
    "I build interfaces for people who make high-stakes decisions—platform engineers provisioning infra, analysts watching markets, operators monitoring AI pipelines. I care about focus, typography, animation restraint, and making advanced workflows feel effortless across light and dark surfaces.",
  current:
    "Currently running a personal fintech design-system lab, contributing to open-source React tooling, and documenting everything through build logs + teardown posts.",
  focus: [
    "Design tokens, theming engines, and npm-ready UI kits",
    "Storybook automation, docs-as-code, and DX tooling",
    "Realtime data visualisation & AI-assisted product surfaces",
  ],
};

export const experiences = [
  {
    company: "Ernst & Young",
    role: "Software Engineer",
    summary:
      "Built EY's private-cloud cockpit and AI SRE copilots; treated every release like a case study for future design-system drops.",
    highlights: [
      "Composed a React/TypeScript control plane with GraphQL live tiles, theming APIs, and lab-quality accessibility baked into each widget.",
      "Spun up an npm-published component atlas (tokens, charts, admin primitives) so banking squads could assemble flows in hours, not weeks.",
      "Paired with ML+SRE crews to ship an RAG-powered troubleshooting assistant using WebSockets/RxJS streams that now resolves incidents 70% faster.",
    ],
  },
  {
    company: "Quickwork Technologies",
    role: "Software Engineer",
    summary:
      "Prototyped market-ops workspaces that kept traders inside a single keyboard-driven surface.",
    highlights: [
      "Designed Redux + RxJS data lanes that hydrated multi-monitor dashboards with millisecond updates and zero dropped frames.",
      "Documented a modular design kit/CLI that output themed React packages with semantic versioning and Storybook previews.",
      "Automated Cypress + Jest suites watching 40+ core flows, giving product the confidence to push intraday patches.",
    ],
  },
  {
    company: "Tech Mahindra Business Services",
    role: "Experience Engineer · CRM Pods",
    summary:
      "Refined Angular-based CRM journeys for financial operations teams and spun those learnings into starter libraries.",
    highlights: [
      "Built contract-safe Angular modules with typed data adapters and accessible micro-interactions.",
      "Shipped reusable visualization blueprints (charts, what-if canvases) that rolled out to five enterprise accounts.",
      "Coached teams through their first automated test pipelines, folding in unit + integration coverage targets.",
    ],
  },
  {
    company: "L&T Technology Services (Rockwell)",
    role: "Associate Engineer",
    summary:
      "Cut my teeth on journey-mapping platforms, animation systems, and regression tooling.",
    highlights: [
      "Invented SCSS architecture patterns for map-heavy UIs so designers could theme clusters without touching logic.",
      "Implemented Selenium + JS smoke suites that ran between every release train, freeing engineers to focus on new workflows.",
      "Facilitated internal guilds where we swapped snippets, motion tests, and component ideas that later became full features.",
    ],
  },
];

export const projects = [
  {
    name: "Scroll Island",
    description:
      "Experimental React experience with dynamic scroll-driven state, smooth CSS transitions, and jQuery-powered micro-interactions focused on performance.",
    tech: ["React", "CSS Animations", "jQuery"],
    link: "https://scroll-island-react.vercel.app/",
  },
  {
    name: "Fintech Component Library",
    description:
      "Production-ready TypeScript component kit published to npm with Storybook docs and accessibility-first patterns to accelerate fintech UI delivery.",
    tech: ["TypeScript", "Storybook", "npm"],
    link: "https://www.npmjs.com/package/fintech-component-library",
  },
  {
    name: "Emotions Detector",
    description:
      "Realtime AI-powered emotion detection application using OpenAI APIs, live analytics, and responsive UX for interaction insights.",
    tech: ["React", "OpenAI", "Realtime APIs"],
    link: "https://emotions-detector.vercel.app/",
  },
  {
    name: "AI Code Documentation Generator",
    description:
      "Intelligent documentation assistant that analyses JS/TS codebases and generates README/API docs with configurable templates and exports.",
    tech: ["React", "TypeScript", "OpenAI"],
    link: "https://ai-doc-generator-neon.vercel.app/",
  },
];

export const skills = [
  {
    title: "Frontend Craft",
    items: [
      "React, Next.js, Angular 9",
      "TypeScript, Modern JavaScript (ES2023)",
      "Advanced CSS, SCSS, Tailwind, Responsive Design",
      "Component-driven architecture, Storybook, Atomic design",
    ],
  },
  {
    title: "State & Data",
    items: [
      "Redux, Context API, RxJS, Zustand/useImmer patterns",
      "GraphQL (Apollo), REST, WebSockets, SSE",
      "Chart.js, D3.js, real-time data viz systems",
    ],
  },
  {
    title: "Quality & Ops",
    items: [
      "Jest, React Testing Library, Cypress, TDD",
      "CI/CD with Jenkins, semantic releases, Docker fundamentals",
      "Documentation, API specs, integration guides",
    ],
  },
];

export const education = {
  school: "Institute of Engineers, Kolkata",
  degree: "B.Tech in Computer Science",
};

export const achievements = [
  "Certification in REST API, AWS",
  "Runner-up, State-level Debate Competition (Maulana Azad Institute of Technology, 2008)",
];

export const roleAlignment = [
  "Self-funded experiments (Scroll Island, AI Doc Generator, Fintech Component Library) that turn into reusable kits and teaching moments for the teams I pair with.",
  "Design-systems craft: design tokens, theming engines, and Storybook spaces that let other engineers plug in without reinventing layouts.",
  "Realtime data instincts—GraphQL, WebSockets/SSE, RxJS—paired with motion guidelines so dense dashboards stay calm and legible.",
  "Testing and delivery muscle-memory with Jest, RTL, Cypress, and semantic-release pipelines that keep independent launches as rigorous as enterprise releases.",
  "Developer relations habits: pairing, mentoring, writing build logs, and translating messy requirements into opinionated component APIs.",
  "Balanced tooling approach: excited about Next.js, Vite, and module federation, yet comfortable meeting teams inside legacy Angular workspaces when needed.",
  "Accessibility and performance budgets defined at the beginning of a project, tracked through CI, and shared through dashboards other teams can reuse.",
  "Remote-friendly rituals—async demos, Loom walkthroughs, annotated PRs—that make collaboration feel intentional across time zones.",
];

export const roleAlignmentIntro =
  "This section isn’t a pitch—it’s how I run my own product lab, document learnings, and collaborate with teams who care about the craft.";
