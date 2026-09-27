# DESIGN.md — Cal Poly Pomona ("Become by Doing") & Refero Design System

> **A calibrated, production-ready AI design specification** for Cursor, Claude Code, Antigravity, Codex, and v0. 
> Built on the **Cal Poly Pomona** polytechnic visual identity, enriched with **Refero Styles** minimalist standards.

---

## 1. Aesthetic Tenets & Sovereign Ethos

1. **Polytechnic Mastery & Hands-On Execution**:
   The visual architecture avoids generic academic boilerplate. It treats the university experience as an engineering proving ground: rocket test stands, autonomous rover chassis, and micro-propagation biotechnology facilities.

2. **Weight & Contrast Anchors**:
   - **Institutional Monolith**: Deep, unapologetic Forest Green (`#004731`) grounds the interface.
   - **Sovereign Accent Stripe**: A vertical solid Athletic Gold (`#FFB81C`) bar anchors primary card blocks on the left edge.
   - **High-Voltage Action**: Chartreuse Lime (`#A4D65E`) is reserved strictly for primary conversions ("SEE HOW") and live status indicators.

3. **Technical Precision (CAD Architecture)**:
   - Drafting coordinate gridlines (`rgba(0, 71, 49, 0.12)`) at 28px intervals.
   - Dimensioning origin markers (`○──────`) leading directly into serif titles.
   - Ground contour elevation plots with telemetry summits (`PEAK SUMMIT EL: +1,142m`).
   - Industrial warning diagonal cross-hatching at the top right of hero media.

---

## 2. Color Palette & Token System

### Institutional Brand Palette
| Token Name | Hex Code | HSL Value | Application Role |
| :--- | :--- | :--- | :--- |
| \`--cpp-forest\` | \`#004731\` | \`hsl(161, 100%, 14%)\` | Primary institutional canvas, hero cards, header links |
| \`--cpp-gold\` | \`#FFB81C\` | \`hsl(41, 100%, 55%)\` | Solid left vertical anchor stripe, crest accents |
| \`--cpp-lime\` | \`#A4D65E\` | \`hsl(86, 56%, 60%)\` | Primary CTA button fill ("SEE HOW"), CAD alerts |
| \`--cpp-darkmoss\` | \`#002418\` | \`hsl(161, 100%, 9%)\` | High-depth card backing, control widget backgrounds |
| \`--cpp-cream\` | \`#F8F9F5\` | \`hsl(80, 20%, 97%)\` | Technical CAD drafting floor background |
| \`--cpp-slate\` | \`#CBD5E1\` | \`hsl(215, 25%, 84%)\` | Coordinate axes, dashed datum lines |
| \`--cpp-ink\` | \`#003624\` | \`hsl(160, 100%, 11%)\` | Button text on lime/gold, high-contrast dark labels |

---

## 3. Typographic Hierarchy

- **Institutional Serif Headline**:
  - Font: \`Playfair Display\`, \`Georgia\`, \`serif\`
  - Weight: \`600\` (SemiBold)
  - Letter-Spacing: \`-0.025em\`
  - Scale: \`clamp(2.25rem, 5vw, 4rem)\`
  - Text: *"Become by Doing"*

- **Navigation & Functional Buttons**:
  - Font: \`Plus Jakarta Sans\`, \`Inter\`, sans-serif
  - Weight: \`700\` / \`800\` (Bold uppercase)
  - Letter-Spacing: \`+0.08em\`
  - Navigation: \`APPLY\`, \`VISIT\`, \`INFO\`, \`GIVE\`, \`MYCPP\`
  - Primary CTA: \`SEE HOW\`

- **Telemetry & Drafting Coordinates**:
  - Font: \`JetBrains Mono\`, \`Space Mono\`, monospace
  - Weight: \`500\`
  - Letter-Spacing: \`+0.05em\`
  - Format: \`AZ-902 // ELEV: 1,142M // CHAMBER PSI: 850\`

---

## 4. Key Component Blueprints

### The "Become by Doing" Hero Block
\`\`\`html
<div class="relative bg-[#004731] text-white flex flex-col md:flex-row items-stretch border-l-[16px] border-[#FFB81C] shadow-2xl">
  <!-- Content Area -->
  <div class="flex-1 px-8 py-7 flex flex-col justify-center">
    <div class="flex items-center gap-3 mb-2 text-[#A4D65E]">
      <span class="w-2.5 h-2.5 rounded-full border-2 border-current"></span>
      <span class="w-14 h-px bg-current"></span>
      <span class="font-mono text-xs uppercase tracking-widest font-semibold">Aerospace & Mechanical</span>
    </div>
    
    <h1 class="font-serif text-4xl lg:text-5xl font-semibold tracking-tight text-white">
      Become by Doing
    </h1>

    <div class="mt-5">
      <button class="bg-[#A4D65E] hover:bg-[#bbf075] text-[#003624] font-extrabold text-sm tracking-wider uppercase px-8 py-3.5 shadow-md transition-all">
        SEE HOW →
      </button>
    </div>
  </div>

  <!-- Carousel Widget -->
  <div class="bg-[#003624] px-5 py-4 flex md:flex-col items-center justify-between border-t md:border-t-0 md:border-l border-[#002418]">
    <div class="flex items-center gap-1.5 bg-[#002418] p-1.5 rounded">
      <button class="w-9 h-9 bg-[#004731] hover:bg-[#A4D65E] text-white hover:text-[#003624]">←</button>
      <span class="font-mono text-xs px-2.5 text-[#A4D65E] font-bold">1 / 3</span>
      <button class="w-9 h-9 bg-[#A4D65E] text-[#003624] font-bold">→</button>
    </div>
  </div>
</div>
\`\`\`

---

## 5. Tailwind CSS Configuration

\`\`\`css
@import "tailwindcss";

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
\`\`\`
