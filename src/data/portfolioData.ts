export type ProjectCategory = 'All' | 'Product & Web' | 'Brand Identity' | 'Spatial & Hardware';

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  year: string;
  client: string;
  summary: string;
  image: string;
  featured?: boolean;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  challenge: string;
  outcome: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  timeline: string;
  iconType: 'architecture' | 'glass' | 'motion' | 'brand';
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  detail: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  outcome: string;
}

export const PORTFOLIO_PROFILE = {
  brandName: 'Alif Studio',
  ownerName: 'Rayan Tariq',
  roleTitle: 'Creative Developer & UI Architect',
  location: 'Zurich & Remote',
  availability: 'Available for Q1 2027 commissions',
  email: 'hello@alifstudio.design',
  heroImage: '/src/assets/images/hero_red_black_portrait_1795554897700.jpg',
  studioImage: '/src/assets/images/about_crimson_atelier_1795554899505.jpg',
  headlineLead: 'Designing',
  headlineAccent: 'bold',
  headlineEnd: 'digital experiences.',
  heroDescription:
    'Independent creative studio crafting high-contrast web interfaces, frosted glass design systems, and fluid interactive products engineered in clean HTML, CSS, and JavaScript.',
  stats: [
    { value: '42+', label: 'Shipped Digital Products' },
    { value: '8 Yrs', label: 'Design & Code Craft' },
    { value: '18', label: 'Design Systems Built' },
    { value: '96%', label: 'Client Retention Rate' },
  ],
  aboutLead:
    'Sharp visual contrast meets tactile glass depth. Every pixel, blur layer, and interaction is built with intent.',
  aboutBody:
    'We partner with ambitious founders, product teams, and luxury brands to replace forgettable templates with bold typographic hierarchy, responsive layouts, and fluid micro-interactions.',
  experience: [
    {
      period: '2023 — Present',
      role: 'Principal Creative Developer',
      organization: 'Alif Studio',
      detail: 'Leading end-to-end UI design, custom glassmorphic component systems, and high-impact brand launches.',
    },
    {
      period: '2020 — 2023',
      role: 'Staff Product Designer',
      organization: 'Krono Labs, Berlin',
      detail: 'Architected a unified design token library across 14 product teams, cutting UI release cycles by 38%.',
    },
    {
      period: '2018 — 2020',
      role: 'Frontend & Motion Engineer',
      organization: 'Nordic Type Foundry',
      detail: 'Engineered interactive specimen showcases and sub-second editorial storefronts with custom animation curves.',
    },
  ] satisfies ExperienceItem[],
  craftPillars: [
    {
      title: 'Frontend & Glass UI Engineering',
      items: ['Semantic HTML5 & Modern CSS', 'Interactive JavaScript & TypeScript', 'Frosted Backdrop-Blur Systems', '60fps Motion & Hover Choreography'],
    },
    {
      title: 'Visual & Product Architecture',
      items: ['High-Contrast Grid Layouts', 'Scalable Component Libraries', 'Responsive Mobile-First Design', 'Art Direction & Brand Systems'],
    },
  ],
  recognition: [
    { year: '2025', title: 'Site of the Month — Independent Craft', body: 'MOD-01 Audio Controller Launch' },
    { year: '2024', title: 'Swiss Digital Design Merit', body: 'Apex Crimson Footwear Flagship' },
    { year: '2023', title: 'Best Financial Interface', body: 'Core Terminal & Analytics Suite' },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'product-architecture',
    number: '01',
    title: 'Web & UI Architecture',
    tagline: 'Sharp, responsive websites engineered from scratch.',
    description:
      'Custom portfolio sites, SaaS flagships, and product landing pages built with crisp typographic hierarchy, clean HTML/CSS/JS, and fast load speeds.',
    deliverables: ['Responsive Grid Architecture', 'Interactive UI Components', 'Speed & Accessibility Tuning'],
    timeline: '4–6 weeks',
    iconType: 'architecture',
  },
  {
    id: 'design-systems',
    number: '02',
    title: 'Glassmorphism & Design Systems',
    tagline: 'Multi-layered frosted glass UI with crisp contrast.',
    description:
      'Cohesive component libraries featuring specular glass highlights, dark/light theme parity, and documented CSS tokens for engineering teams.',
    deliverables: ['Dark & Light Token System', 'Frosted Glass Component Kit', 'Interactive Style Guide'],
    timeline: '3–5 weeks',
    iconType: 'glass',
  },
  {
    id: 'motion-systems',
    number: '03',
    title: 'Motion & Micro-Interactions',
    tagline: 'Tactile animations that respond instantly to user input.',
    description:
      'Smooth scroll choreography, cursor-tracking light reflections, interactive modals, and GPU-accelerated transitions tuned for 60fps fluidity.',
    deliverables: ['Cursor & Hover Reflections', 'Modal & Filter Choreography', 'Reduced-Motion Accessibility'],
    timeline: '2–4 weeks',
    iconType: 'motion',
  },
  {
    id: 'brand-direction',
    number: '04',
    title: 'Brand Direction & Visuals',
    tagline: 'Commanding visual identities with bold color discipline.',
    description:
      'High-impact art direction, custom editorial photography concepts, and cohesive digital brand guidelines built to stand out immediately.',
    deliverables: ['Visual Identity & Palette', 'Editorial Art Direction', 'Launch Campaign Assets'],
    timeline: '4–6 weeks',
    iconType: 'brand',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'core-fintech',
    title: 'Core Hardware & Terminal',
    category: 'Product & Web',
    year: '2025',
    client: 'Core Financial Systems',
    summary:
      'Matte-black hardware key paired with a high-contrast portfolio analytics interface featuring razor-sharp crimson data visualization.',
    image: '/src/assets/images/project_crimson_fintech_1795554898418.jpg',
    featured: true,
    deliverables: ['Web Application UI', 'Hardware Companion Flow', 'Data Visualization System'],
    metrics: [
      { label: 'Task Completion Speed', value: '2.4x' },
      { label: 'Active Analysts', value: '18,200' },
      { label: 'Lighthouse Score', value: '100/100' },
    ],
    challenge:
      'Financial analysts needed an uncluttered dark workspace where critical gains and alerts stand out immediately without chaotic rainbow charts.',
    outcome:
      'We built an obsidian glass interface using pure white tabular numerals and a single decisive crimson accent reserved strictly for active telemetry.',
  },
  {
    id: 'apex-footwear',
    title: 'Apex 01 Streetwear Drop',
    category: 'Brand Identity',
    year: '2025',
    client: 'Apex Footwear Lab',
    summary:
      'Stark white-and-crimson editorial campaign and interactive product showcase engineered for a limited architectural sneaker release.',
    image: '/src/assets/images/project_scarlet_editorial_1795554900095.jpg',
    deliverables: ['Campaign Direction', 'E-Commerce Storefront', 'Interactive Lookbook'],
    metrics: [
      { label: 'Drop Sell-Through', value: '98%' },
      { label: 'Checkout Conversion', value: '+52%' },
      { label: 'Avg. Session Time', value: '3m 48s' },
    ],
    challenge:
      'Create a high-energy footwear launch experience that feels as crisp and sculptural as a gallery exhibition.',
    outcome:
      'Designed stark white concrete framing paired with smoked glass size selectors and rapid single-page checkout transitions.',
  },
  {
    id: 'mod01-synth',
    title: 'MOD-01 Analog Controller',
    category: 'Spatial & Hardware',
    year: '2024',
    client: 'Synthesis Audio Works',
    summary:
      'Industrial web flagship and interactive MIDI patch editor for an anodized black-and-crimson desktop synthesizer.',
    image: '/src/assets/images/project_obsidian_synth_1795554899305.jpg',
    deliverables: ['Launch Experience', 'Web MIDI Configurator', 'Product Photography'],
    metrics: [
      { label: 'Pre-Orders Week 1', value: '3,400+' },
      { label: 'Configurator Usage', value: '74%' },
      { label: 'Error Reduction', value: '-41%' },
    ],
    challenge:
      'Translate tactile knurled crimson knobs and crisp hardware switches into an intuitive browser-based patch editor.',
    outcome:
      'Engineered precision glassmorphic rotary controls with sub-200ms feedback and high-contrast parameter labels.',
  },
  {
    id: 'atelier-architecture',
    title: 'Kunsthalle Red Monograph',
    category: 'Product & Web',
    year: '2024',
    client: 'Zurich Architecture Forum',
    summary:
      'Digital exhibition archive pairing brutalist white concrete photography with bold black-and-red editorial navigation.',
    image: '/src/assets/images/about_crimson_atelier_1795554899505.jpg',
    deliverables: ['Exhibition Archive', 'Responsive Grid System', 'Editorial Typography'],
    metrics: [
      { label: 'Monthly Visitors', value: '94K' },
      { label: 'Archived Plates', value: '1,480' },
      { label: 'Accessibility Score', value: '100%' },
    ],
    challenge:
      'Unify architectural photography, floorplans, and curatorial essays into a fast, distraction-free web publication.',
    outcome:
      'Delivered a dual light/dark glass reading system that keeps white gallery spaces crisp while letting dark plates breathe.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Strategy & Framing',
    detail: 'Defining visual direction, user flow, and high-contrast layout hierarchy before coding.',
  },
  {
    step: '02',
    title: 'Glass & Grid System',
    detail: 'Crafting reusable CSS frosted surfaces, typography scales, and sharp border geometry.',
  },
  {
    step: '03',
    title: 'Interactive Engineering',
    detail: 'Building responsive components, interactive filters, modals, and smooth 60fps animations.',
  },
  {
    step: '04',
    title: 'Audit & Launch',
    detail: 'Testing contrast, keyboard navigation, mobile responsiveness, and production build speed.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      'Alif Studio transformed our hardware launch from a plain spec sheet into an unforgettable black-and-crimson digital experience. Pre-orders jumped 52% in week one.',
    name: 'Henrik Lindholm',
    role: 'Head of Product',
    company: 'Synthesis Audio Works',
    outcome: '+52% Launch Conversion',
  },
  {
    quote:
      'Their frosted glass design system works seamlessly across both dark trading terminals and light executive views, cutting our frontend QA cycle nearly in half.',
    name: 'Nadia Al-Mansoor',
    role: 'VP of Engineering',
    company: 'Core Financial Systems',
    outcome: '38% Faster UI Delivery',
  },
];
