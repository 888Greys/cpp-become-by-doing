export const STYLES_DATABASE = [
  {
    id: 'cal-poly-pomona',
    title: 'Cal Poly Pomona',
    brandName: 'Cal Poly Pomona',
    subtitle: 'Become by Doing • Polytechnic Engineering System',
    category: 'Polytechnic & Tech',
    featured: true,
    websiteUrl: 'https://www.cpp.edu',
    badge: 'Polytechnic Master',
    previewImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    description:
      'Cal Poly Pomona embodies the quintessential American polytechnic ethos: rigorous hands-on technical execution. Anchored by authoritative deep forest green (#004731), high-voltage athletic gold (#FFB81C), and a high-visibility chartreuse lime (#A4D65E) CTA. The visual language marries historic academic serif headlines with aerospace CAD coordinate grids, elevation contour lines, and industrial hazard striping.',
    tags: ['Deep forest green', 'Athletic Gold', 'CAD Grid', 'Serif Headline', 'Polytechnic', 'Higher Ed'],
    accentColor: '#004731',
    secondaryColor: '#FFB81C',
    ctaColor: '#A4D65E',
    colors: {
      accent: [
        { name: 'Cal Poly Forest Green', hex: '#004731', hsl: 'hsl(161, 100%, 14%)', role: 'Primary institutional canvas, hero card blocks, dark UI elements' },
        { name: 'Athletic Gold', hex: '#FFB81C', hsl: 'hsl(41, 100%, 55%)', role: 'Sovereign anchor stripes, accent rules, active navigation indicators' },
        { name: 'Chartreuse Lime', hex: '#A4D65E', hsl: 'hsl(86, 56%, 60%)', role: 'Primary high-contrast CTA buttons (SEE HOW), hover halos, CAD alerts' },
        { name: 'Deep Poly Moss', hex: '#002C1E', hsl: 'hsl(161, 100%, 9%)', role: 'Shaded card backgrounds, terminal surfaces, high-depth containers' },
      ],
      neutrals: [
        { name: 'Engineered Cream', hex: '#F9FAF6', hsl: 'hsl(80, 20%, 97%)', role: 'Technical canvas, CAD blueprint background, secondary cards' },
        { name: 'Coordinate Slate', hex: '#CBD5E1', hsl: 'hsl(215, 25%, 84%)', role: 'Dashed axis lines, graph rulers, contour dividers' },
        { name: 'CAD Grid Green', hex: '#0047311f', hsl: 'rgba(0, 71, 49, 0.12)', role: 'Technical graph paper grid overlay lines' },
        { name: 'Charcoal Blueprint', hex: '#1E293B', hsl: 'hsl(217, 33%, 17%)', role: 'Technical metadata, equipment telemetry, high-contrast labels' },
        { name: 'Pure White', hex: '#FFFFFF', hsl: 'hsl(0, 0%, 100%)', role: 'Serif display headline, high-contrast text on forest green' }
      ]
    },
    typography: {
      headlineFont: 'Playfair Display, Georgia, serif',
      bodyFont: 'Plus Jakarta Sans, system-ui, sans-serif',
      monoFont: 'JetBrains Mono, monospace',
      weights: {
        headline: '600 (SemiBold)',
        subhead: '400 (Regular)',
        navigation: '700 (Bold, Uppercase)',
        cadCoordinates: '500 (Medium)'
      }
    },
    carouselSlides: [
      {
        id: 1,
        headline: 'Become by Doing',
        subhead: 'Liquid Rocket Propulsion Test Stand • Mojave Desert Field Operations',
        tag: 'AEROSPACE & MECHANICAL ENGINEERING',
        cta: 'SEE HOW',
        image: 'https://images.unsplash.com/photo-1517976487507-5b3b4b371f73?auto=format&fit=crop&w=1400&q=85',
        telemetry: 'GRID: AZ-902 // PROPULSION: LOX/METHANE // ELEV: 1,142M'
      },
      {
        id: 2,
        headline: 'Learn by Building',
        subhead: 'Autonomous Baja SAE Off-Road Vehicle Fabrication & Sensor Suite',
        tag: 'ROBOTICS & MECHATRONICS',
        cta: 'EXPLORE LAB',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85',
        telemetry: 'CHASSIS: CHRO-MOLY 4130 // CAN BUS: 500 KBPS // SPEED: 65 MPH'
      },
      {
        id: 3,
        headline: 'Discover by Solving',
        subhead: 'Controlled Environment Agriculture & AI Plant Biotechnology Lab',
        tag: 'DON B. HUNTLEY COLLEGE OF AGRICULTURE',
        cta: 'VIEW RESEARCH',
        image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1400&q=85',
        telemetry: 'HYDROPONIC EC: 2.1 mS/cm // PAR FLUX: 450 umol/m²/s'
      }
    ],
    designMd: `# DESIGN.md — Cal Poly Pomona ("Become by Doing")

A design system specification engineered for AI coding agents (Cursor, Claude Code, Antigravity, v0, Lovable).

## 1. Design Philosophy: Sovereign Polytechnic Mastery

- **Core Mantra**: "Become by Doing" (hands-on experiential engineering over passive observation).
- **Aesthetic Tenet**: Balance institutional university gravitas with industrial CAD precision.
- **Visual Weight**: Unapologetic forest green (#004731) slabs combined with razor-thin technical drafting lines, elevation contour plots, and high-visibility warning accents (#FFB81C Gold, #A4D65E Chartreuse).

---

## 2. Color Palette & Token Hierarchy

### Primary Brands
- \`--color-cpp-forest\`: \`#004731\` (The foundational deep forest green)
- \`--color-cpp-darkmoss\`: \`#002418\` (High-depth shadow surfaces)
- \`--color-cpp-gold\`: \`#FFB81C\` (Sovereign athletic gold accent stripe)
- \`--color-cpp-lime\`: \`#A4D65E\` (Chartreuse primary action button "SEE HOW")
- \`--color-cpp-cream\`: \`#F8F9F5\` (CAD technical graph background)

### Semantic Tokens
- \`surface-primary\`: \`#004731\`
- \`surface-accent-stripe\`: \`#FFB81C\` (Solid 12px-16px left edge bar)
- \`action-primary-bg\`: \`#A4D65E\`
- \`action-primary-text\`: \`#003322\` (Deep dark green text on lime button, never pure black)
- \`text-headline\`: \`#FFFFFF\`
- \`text-telemetry-mono\`: \`#94A3B8\` (Muted slate coordinates)
- \`border-cad-grid\`: \`rgba(0, 71, 49, 0.12)\` (24px x 24px drafting grid)

---

## 3. Typography Architecture

- **Headline Display**: Classic editorial serif (\`Playfair Display\`, \`Georgia\`, \`Fraunces\`)
  - Weight: \`600\`
  - Size: \`clamp(2.5rem, 6vw, 4.25rem)\`
  - Tracking: \`-0.02em\` (Tight, confident, human)
  - Color: Pure White \`#FFFFFF\`

- **Navigation & Action Labels**: Modern geometric sans-serif (\`Plus Jakarta Sans\`, \`Inter\`)
  - Weight: \`700\` (Bold uppercase)
  - Tracking: \`0.08em\`
  - Links: \`APPLY\`, \`VISIT\`, \`INFO\`, \`GIVE\`, \`MYCPP\`

- **Engineering Telemetry & Dimensions**: Precision Monospace (\`JetBrains Mono\`, \`Space Mono\`)
  - Weight: \`500\`
  - Size: \`11px - 13px\`
  - Format: \`GRID: AZ-902 // PROPULSION: NOMINAL\`

---

## 4. Iconic Visual Components

### A. The Overlapping "Become by Doing" Hero Block
\`\`\`html
<div class="relative bg-[#004731] pl-6 pr-10 py-8 flex flex-col md:flex-row items-center justify-between border-l-[14px] border-[#FFB81C]">
  <div class="flex items-center gap-4">
    <!-- CAD coordinate marker line -->
    <div class="hidden lg:flex items-center text-[#A4D65E]">
      <span class="w-3 h-3 rounded-full border-2 border-current"></span>
      <span class="w-16 h-px bg-current"></span>
    </div>
    <h1 class="font-serif text-4xl lg:text-5xl text-white font-semibold">
      Become by Doing
    </h1>
  </div>
  
  <div class="flex items-center gap-6 mt-6 md:mt-0">
    <!-- Chartreuse CTA Button -->
    <button class="bg-[#A4D65E] hover:bg-[#b2e56c] text-[#003624] font-bold px-8 py-3.5 tracking-wider uppercase transition-all duration-200 hover:scale-[1.03]">
      SEE HOW
    </button>
    <!-- Step Carousel Controls -->
    <div class="flex items-center bg-[#003624] text-white rounded">
      <button class="p-3 hover:bg-[#002418]">←</button>
      <span class="px-3 font-mono text-xs">1 / 3</span>
      <button class="p-3 hover:bg-[#002418] bg-[#A4D65E] text-[#003624]">→</button>
    </div>
  </div>
</div>
\`\`\`

### B. The CAD Dimensioning & Contour Grid
- Place underneath the hero visual.
- Render horizontal dashed line \`border-dashed border-b border-[#004731]/30\`.
- Render technical SVG contour graph displaying mountain / telemetry elevation peak.
- Diagonal green/lime caution crosshatch at the top right corner.

---

## 5. Micro-Interactions & Motion
- **Button Hover**: 2px subtle translateY with scale(1.02), background brightening to \`#b5e772\`.
- **Carousel Transition**: 450ms smooth cubic-bezier(0.16, 1, 0.3, 1) slide crossfade.
- **CAD Coordinate Hover**: Displays live latitude/longitude telemetry marker.`,
    tailwindConfig: `// Tailwind CSS v4 @theme configuration
@theme {
  --color-cpp-forest: #004731;
  --color-cpp-darkmoss: #002418;
  --color-cpp-gold: #FFB81C;
  --color-cpp-lime: #A4D65E;
  --color-cpp-cream: #F8F9F5;
  --color-cpp-slate: #CBD5E1;

  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

// Or Tailwind CSS v3 tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        cpp: {
          forest: '#004731',
          darkmoss: '#002418',
          gold: '#FFB81C',
          lime: '#A4D65E',
          cream: '#F8F9F5',
          slate: '#CBD5E1',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    }
  }
};`,
    cssVariables: `:root {
  /* Cal Poly Pomona Brand Palette */
  --cpp-forest: #004731;
  --cpp-forest-rgb: 0, 71, 49;
  --cpp-darkmoss: #002418;
  --cpp-gold: #FFB81C;
  --cpp-lime: #A4D65E;
  --cpp-cream: #F8F9F5;
  --cpp-slate: #CBD5E1;

  /* Typography */
  --font-family-headline: 'Playfair Display', Georgia, serif;
  --font-family-body: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-family-mono: 'JetBrains Mono', monospace;

  /* Component Dimensions */
  --anchor-stripe-width: 14px;
  --border-radius-card: 0px; /* Sharp architectural corners */
  --border-radius-pill: 9999px;
}`
  },
  {
    id: 'cursor',
    title: 'Cursor',
    brandName: 'Cursor',
    subtitle: 'Warm parchment atelier lit by embers',
    category: 'Dev Tools',
    featured: false,
    websiteUrl: 'https://cursor.com',
    badge: 'AI Code Editor',
    previewImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Cursor uses a warm parchment editorial language: cream canvas, ink-black text, and a single ember-orange accent (#f54e00) that activates links and emphasis. Headlines whisper at weight 400 with tight tracking. Surfaces stay flat with hairline borders and warm gray shadows.',
    tags: ['Warm Parchment', 'Ember Orange', 'Ink Black', 'Editorial', 'Dev Tools'],
    accentColor: '#26251e',
    secondaryColor: '#f54e00',
    ctaColor: '#f54e00',
    colors: {
      accent: [
        { name: 'Ember', hex: '#f54e00', hsl: 'hsl(19, 100%, 48%)', role: 'Orange accent for links, tags, and emphasized phrases' },
        { name: 'Amber', hex: '#c08532', hsl: 'hsl(35, 59%, 47%)', role: 'Warm action button fill and accent strokes' },
        { name: 'Forest', hex: '#34785c', hsl: 'hsl(155, 39%, 33%)', role: 'Green secondary action tone' },
      ],
      neutrals: [
        { name: 'Ink', hex: '#26251e', hsl: 'hsl(52, 11%, 13%)', role: 'Primary text, navigation text, near-black' },
        { name: 'Parchment', hex: '#f7f7f4', hsl: 'hsl(60, 14%, 96%)', role: 'Warm canvas background' },
        { name: 'Bone', hex: '#f2f1ed', hsl: 'hsl(48, 17%, 94%)', role: 'Card surfaces and elevated containers' },
        { name: 'Stone', hex: '#cdcdc9', hsl: 'hsl(60, 4%, 80%)', role: 'Hairline borders and 1px dividers' }
      ]
    },
    typography: {
      headlineFont: 'CursorGothic, Inter, sans-serif',
      bodyFont: 'EB Garamond, Georgia, serif',
      monoFont: 'berkeleyMono, JetBrains Mono, monospace',
      weights: {
        headline: '400 (Regular with tight letter-spacing)',
        subhead: '400 (Serif)',
        navigation: '500 (Medium)'
      }
    },
    designMd: `# DESIGN.md — Cursor

## 1. Philosophy
Warm parchment atelier lit by embers. Authority through typographic restraint and paper-like layering rather than high-contrast shadows or neon glows.

## 2. Palette
- Canvas: #f7f7f4 (Parchment)
- Text Primary: #26251e (Ink)
- Accent: #f54e00 (Ember)
- Borders: #cdcdc9 (Stone)
- Cards: #f2f1ed (Bone)

## 3. Typography
- Headlines: Regular 400 with negative tracking (-0.03em)
- Prose: EB Garamond 400 for literary elegance
- Code & Metas: Monospace tabular numerals`,
    tailwindConfig: `@theme {
  --color-cursor-parchment: #f7f7f4;
  --color-cursor-ink: #26251e;
  --color-cursor-ember: #f54e00;
  --color-cursor-bone: #f2f1ed;
  --color-cursor-stone: #cdcdc9;
}`,
    cssVariables: `:root {
  --cursor-parchment: #f7f7f4;
  --cursor-ink: #26251e;
  --cursor-ember: #f54e00;
  --cursor-bone: #f2f1ed;
  --cursor-stone: #cdcdc9;
}`
  },
  {
    id: 'teenage-engineering',
    title: 'teenage engineering',
    brandName: 'teenage engineering',
    subtitle: 'industrial catalogue under studio light',
    category: 'Hardware & Audio',
    featured: false,
    websiteUrl: 'https://teenage.engineering',
    badge: 'Industrial Design',
    previewImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
    description:
      'Chiseled Nordic industrial design catalogue. Raw machined surfaces, ultra-minimalist grid alignment, dot-matrix telemetry, high-contrast hazard orange buttons (#ff4400), and stark Swiss typography.',
    tags: ['Industrial', 'Hardware', 'Raw Aluminum', 'Dot Matrix', 'Swiss Grid'],
    accentColor: '#111111',
    secondaryColor: '#ff4400',
    ctaColor: '#ff4400',
    colors: {
      accent: [
        { name: 'Safety Orange', hex: '#ff4400', hsl: 'hsl(16, 100%, 50%)', role: 'Rotary knob accents and alert CTAs' },
        { name: 'Machined Black', hex: '#111111', hsl: 'hsl(0, 0%, 7%)', role: 'Chassis surfaces and primary labels' },
      ],
      neutrals: [
        { name: 'Anodized White', hex: '#fbfbfb', hsl: 'hsl(0, 0%, 98%)', role: 'Pristine product canvas' },
        { name: 'Aluminum Gray', hex: '#e2e2e0', hsl: 'hsl(60, 3%, 88%)', role: 'Component borders and modular housings' },
      ]
    },
    typography: {
      headlineFont: 'Neue Haas Grotesk, Helvetica, sans-serif',
      bodyFont: 'Inter, sans-serif',
      monoFont: 'JetBrains Mono, monospace',
      weights: {
        headline: '700 (Bold)',
        subhead: '400 (Regular)',
        navigation: '600 (SemiBold)'
      }
    },
    designMd: `# DESIGN.md — teenage engineering

## 1. Philosophy
Industrial product catalogue under clean 5600K studio lights. Sharp mechanical precision with zero decorative fluff. Every pixel represents a physical tactile knob or PCB tracer.

## 2. Palette
- Background: #fbfbfb
- Text: #111111
- Accent: #ff4400 (Safety Orange)
- Aluminum: #e2e2e0`,
    tailwindConfig: `@theme {
  --color-te-orange: #ff4400;
  --color-te-black: #111111;
  --color-te-aluminum: #e2e2e0;
}`,
    cssVariables: `:root {
  --te-orange: #ff4400;
  --te-black: #111111;
  --te-aluminum: #e2e2e0;
}`
  },
  {
    id: 'apple',
    title: 'Apple',
    brandName: 'Apple',
    subtitle: 'Titanium clarity & specular edge optics',
    category: 'Hardware & OS',
    featured: false,
    websiteUrl: 'https://apple.com',
    badge: 'Precision Minimal',
    previewImage: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=1200&q=80',
    description:
      'Apple combines pure optical perfection with deep blacks, dynamic specular highlights, ultra-fine typography in SF Pro, and subtle 40px glassmorphism backdrops.',
    tags: ['Titanium', 'Glassmorphism', 'SF Pro', 'OLED Black'],
    accentColor: '#0071e3',
    secondaryColor: '#f5f5f7',
    ctaColor: '#0071e3',
    colors: {
      accent: [
        { name: 'Interactive Blue', hex: '#0071e3', hsl: 'hsl(210, 100%, 45%)', role: 'Links, pill buttons, and chevron indicators' },
        { name: 'Titanium White', hex: '#f5f5f7', hsl: 'hsl(240, 11%, 96%)', role: 'Light contrast containers and card tiles' },
      ],
      neutrals: [
        { name: 'Pitch Black', hex: '#000000', hsl: 'hsl(0, 0%, 0%)', role: 'Deep canvas backdrop' },
        { name: 'Smoke Muted', hex: '#86868b', hsl: 'hsl(240, 2%, 54%)', role: 'Subtitles and secondary specifications' },
      ]
    },
    typography: {
      headlineFont: 'SF Pro Display, system-ui, sans-serif',
      bodyFont: 'SF Pro Text, system-ui, sans-serif',
      monoFont: 'SF Mono, monospace',
      weights: {
        headline: '600 (SemiBold)',
        subhead: '400 (Regular)',
        navigation: '400 (Regular, Tracking Tight)'
      }
    },
    designMd: `# DESIGN.md — Apple

## 1. Philosophy
Optical clarity, surgical industrial precision, and effortless human interaction.

## 2. Palette
- Canvas: #000000 / #f5f5f7
- Action: #0071e3 (Apple Blue)
- Muted: #86868b`,
    tailwindConfig: `@theme {
  --color-apple-blue: #0071e3;
  --color-apple-canvas: #000000;
  --color-apple-muted: #86868b;
}`,
    cssVariables: `:root {
  --apple-blue: #0071e3;
  --apple-canvas: #000000;
  --apple-muted: #86868b;
}`
  },
  {
    id: 'slush',
    title: 'Slush',
    brandName: 'Slush',
    subtitle: 'Inflatable sticker universe on deep violet',
    category: 'Events & Community',
    featured: false,
    websiteUrl: 'https://slush.org',
    badge: 'Playful Neubrutalism',
    previewImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    description:
      'Slush embraces electric neubrutalism: neon laser pink, radioactive lime pills, deep cosmic purple, and tactile rounded cards with high-energy typography.',
    tags: ['Electric Pink', 'Neubrutalism', 'High Contrast', 'Tactile Pills'],
    accentColor: '#ff2d55',
    secondaryColor: '#1a103c',
    ctaColor: '#2bf883',
    colors: {
      accent: [
        { name: 'Neon Laser Pink', hex: '#ff2d55', hsl: 'hsl(349, 100%, 59%)', role: 'Punchy badges and hero accents' },
        { name: 'Radioactive Lime', hex: '#2bf883', hsl: 'hsl(146, 94%, 57%)', role: 'High-energy CTA buttons' },
      ],
      neutrals: [
        { name: 'Cosmic Violet', hex: '#120b29', hsl: 'hsl(254, 58%, 10%)', role: 'Main dark background' },
        { name: 'Ultra White', hex: '#ffffff', hsl: 'hsl(0, 0%, 100%)', role: 'High-contrast typography' },
      ]
    },
    typography: {
      headlineFont: 'Space Grotesk, sans-serif',
      bodyFont: 'Plus Jakarta Sans, sans-serif',
      monoFont: 'JetBrains Mono, monospace',
      weights: {
        headline: '800 (ExtraBold)',
        subhead: '500 (Medium)',
        navigation: '700 (Bold)'
      }
    },
    designMd: `# DESIGN.md — Slush

## 1. Philosophy
Electric neubrutalism built for youth culture and world-class startup founders. High saturation, tactile pills, and irreverent confidence.`,
    tailwindConfig: `@theme {
  --color-slush-pink: #ff2d55;
  --color-slush-lime: #2bf883;
  --color-slush-violet: #120b29;
}`,
    cssVariables: `:root {
  --slush-pink: #ff2d55;
  --slush-lime: #2bf883;
  --slush-violet: #120b29;
}`
  },
  {
    id: 'elevenlabs',
    title: 'ElevenLabs',
    brandName: 'ElevenLabs',
    subtitle: 'Warm cream editorial with acoustic waveform precision',
    category: 'AI & Audio',
    featured: false,
    websiteUrl: 'https://elevenlabs.io',
    badge: 'AI Audio',
    previewImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
    description:
      'Warm cream editorial balanced with acoustic waveform telemetry. Clean serif body, crisp black containers, audio spectrum analyzers, and subtle tactile buttons.',
    tags: ['Cream Editorial', 'Audio Waveform', 'Serif Headlines', 'AI Voice'],
    accentColor: '#000000',
    secondaryColor: '#f7f6f2',
    ctaColor: '#000000',
    colors: {
      accent: [
        { name: 'Soundwave Ink', hex: '#000000', hsl: 'hsl(0, 0%, 0%)', role: 'Primary CTAs and high-contrast typography' },
        { name: 'Acoustic Cream', hex: '#f7f6f2', hsl: 'hsl(48, 20%, 96%)', role: 'Warm studio backdrop' },
      ],
      neutrals: [
        { name: 'Frequency Gray', hex: '#71717a', hsl: 'hsl(240, 5%, 46%)', role: 'Audio metadata and telemetry timestamps' },
      ]
    },
    typography: {
      headlineFont: 'Playfair Display, serif',
      bodyFont: 'Inter, sans-serif',
      monoFont: 'JetBrains Mono, monospace',
      weights: {
        headline: '600 (SemiBold)',
        subhead: '400 (Regular)',
        navigation: '500 (Medium)'
      }
    },
    designMd: `# DESIGN.md — ElevenLabs

## 1. Philosophy
Acoustic editorial precision. Reconciling literary depth with generative neural audio models.`,
    tailwindConfig: `@theme {
  --color-eleven-cream: #f7f6f2;
  --color-eleven-black: #000000;
}`,
    cssVariables: `:root {
  --eleven-cream: #f7f6f2;
  --eleven-black: #000000;
}`
  }
];
