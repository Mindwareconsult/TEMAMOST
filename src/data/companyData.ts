import { ServiceItem, ProjectItem, TeamMember, InsightArticle, TestimonialItem, CertificateCredential, ClientOrganization } from '../types';

export const COMPANY_CONTACT = {
  name: 'Temamost Nigeria Ltd',
  tagline: 'Building With Precision. Delivering With Confidence.',
  established: 2017,
  cacNumber: 'RC 1441087',
  vatReg: 'TIN 20618815-0001 / FIRS Compliant',
  address: 'Plot 5, Peter Odili Extension (New Road), by Chelsea Filling Station, Gbalajam Junction, Woji Community Layout, Port Harcourt, Rivers State, Nigeria',
  phones: ['+234 811 864 1790', '+234 806 377 9466'],
  emails: ['contact@temamost.com', 'temamostinfo@gmail.com'],
  workingHours: 'Mon - Fri: 8:00 AM - 5:30 PM | Sat: By Project Schedule',
  coordinates: {
    lat: 4.8156,
    lng: 7.0498,
    mapLabel: 'Plot 5 Peter Odili Ext., Woji, Port Harcourt'
  }
};

export const CORE_VALUES = [
  {
    letter: 'T',
    title: 'TRUST',
    tagline: 'The Foundation of Every Partnership',
    description: 'We earn client confidence through unyielding transparency, honest progress reporting, contractual fidelity, and ethical engineering practices.'
  },
  {
    letter: 'E',
    title: 'EXCELLENCE',
    tagline: 'Uncompromising Technical Standards',
    description: 'From soil mechanics and structural reinforcement to finishing aesthetics, our work adheres to rigorous Nigerian and international engineering codes.'
  },
  {
    letter: 'M',
    title: 'MEASURED PERFORMANCE',
    tagline: 'Precision in Cost, Time & Quality',
    description: 'Every milestone is quantified against critical-path schedules, rigorous QA/QC checklists, and strict budget variance control systems.'
  },
  {
    letter: 'A',
    title: 'ACCOUNTABILITY',
    tagline: 'Single-Point Responsibility',
    description: 'We take complete ownership of site safety, workforce welfare, regulatory compliance, and post-handover facility performance.'
  }
];

export const COMPANY_STATS = [
  { value: '2017', label: 'YEAR ESTABLISHED', desc: 'Over 8 years of engineering excellence' },
  { value: '2,000+', label: 'PROJECTS & ENGAGEMENTS', desc: 'Residential, commercial & infrastructure' },
  { value: '100%', label: 'QUALITY & HSE FOCUS', desc: 'Zero-compromise safety record on site' },
  { value: 'NIGERIA', label: 'DELIVERY REACH', desc: 'Port Harcourt HQ with nationwide capability' }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'pre-construction',
    number: '01',
    title: 'Pre-Construction Services',
    shortDesc: 'Strategic project scoping, design collaboration, feasibility validation, and early cost modelling before capital is committed.',
    fullDesc: 'Pre-construction sets the trajectory of your entire capital project. Temamost bridges the gap between architectural concept and constructability. We analyze local soil profiles, perform value engineering, de-risk supply chain dependencies, and build transparent BoQ (Bills of Quantities) to prevent cost overruns.',
    iconName: 'Compass',
    capabilities: [
      'Development Consulting & Feasibility Studies',
      'Architectural & Engineering Design Collaboration',
      'Value Engineering & Constructability Reviews',
      'Comprehensive Bills of Quantities (BoQ) & Budgeting',
      'Regulatory Approvals & Statutory Permitting Support'
    ],
    deliverables: [
      'Preliminary Cost Baseline & Cash Flow Model',
      'Constructability Assessment Report',
      'Master Project Milestone Schedule',
      'Material Sourcing & Procurement Strategy'
    ],
    ourApproach: 'We analyze site realities early—especially Niger Delta geotechnical conditions—so investors avoid expensive foundation redesigns and delay penalties down the road.',
    clientBenefits: [
      'Eliminates unbudgeted surprise variations',
      'Shortens the procurement lead time',
      'Guarantees regulatory compliance with Rivers State physical planning'
    ],
    sectorFocus: ['Commercial Developers', 'Private Estates', 'Industrial Hubs'],
    image: '/projects/under-construction/POTii.jpg'
  },
  {
    id: 'general-construction',
    number: '02',
    title: 'General Construction',
    shortDesc: 'Hands-on site execution, reinforced concrete structures, structural steelwork, MEP coordination, and precision craftsmanship.',
    fullDesc: 'As prime building contractors, Temamost mobilizes vetted craftsmen, heavy plant machinery, and registered site engineers. We manage every phase from earthworks and piling to reinforced concrete frames, masonry, roofing, and architectural finishes.',
    iconName: 'Building2',
    capabilities: [
      'Reinforced Concrete & Heavy Structural Framing',
      'Structural Steel Fabrication & Erection',
      'Commercial & Residential Building Construction',
      'Masonry, Advanced Cladding & Curtain Walling',
      'Comprehensive Site Safety & HSE Enforcement'
    ],
    deliverables: [
      'Daily & Weekly Site Progress Reports',
      'Concrete Cube Test & Structural Integrity Certifications',
      'Material Quality Verification Logs',
      'Snag-Free Handover Documentation'
    ],
    ourApproach: 'Field engineers remain permanently on site to audit batching ratios, rebar reinforcement placements, and curing cycles to maintain structural longevity.',
    clientBenefits: [
      'Direct accountability with a reputable corporate entity',
      'High-grade structural resilience against moisture and subsidence',
      'Clean finishes delivered within scheduled turnover dates'
    ],
    sectorFocus: ['Multi-Family Residences', 'Corporate Head Offices', 'Logistics Warehouses'],
    image: '/projects/under-construction/IMG_3431.JPG.jpeg'
  },
  {
    id: 'construction-management',
    number: '03',
    title: 'Construction Management',
    shortDesc: 'Acting as the client’s technical advisor to control project costs, schedules, quality assurance, and contractor performance.',
    fullDesc: 'Our construction management service places senior Temamost engineers at the helm of your project as owner representatives. We oversee subcontractors, audit materials, enforce safety standards, and keep strict cost accounting so your capital is protected at all times.',
    iconName: 'Layers',
    capabilities: [
      'Subcontractor Prequalification & Bid Evaluation',
      'Independent Quality Assurance (QA/QC) Audits',
      'Critical Path Schedule (CPM) Tracking',
      'Site Logistics & Resource Optimization',
      'Contract Administration & Claim Verification'
    ],
    deliverables: [
      'Earned Value Analysis & Budget Variance Tracking',
      'Third-Party Materials Laboratory Test Audits',
      'Subcontractor Performance Scoring',
      'Executive Monthly Dashboard for Stakeholders'
    ],
    ourApproach: 'We operate with total fiduciary loyalty to the client, preventing contractor inflation, sub-standard material substitutions, and schedule drift.',
    clientBenefits: [
      'Significant cost savings through aggressive commercial oversight',
      'Unbiased technical eyes protecting owner equity',
      'Consistent adherence to building specifications'
    ],
    sectorFocus: ['Institutional Clients', 'Foreign Direct Investors', 'Public Sector Agencies'],
    image: '/projects/under-construction/S4.jpg'
  },
  {
    id: 'program-management',
    number: '04',
    title: 'Program Management',
    shortDesc: 'Multi-site portfolio governance, resource allocation, and strategic oversight for large capital rollout campaigns.',
    fullDesc: 'When enterprises require multi-facility expansions, estate rollouts, or multi-phase infrastructure developments, Temamost provides unified program governance. We harmonize cross-project resources, standardize engineering benchmarks, and provide centralized reporting to boardrooms.',
    iconName: 'Kanban',
    capabilities: [
      'Multi-Project Portfolio Scheduling & Prioritization',
      'Bulk Material Procurement & Supply Chain Synergy',
      'Corporate Risk & Regulatory Oversight',
      'Standardized Engineering Specifications across Sites',
      'Executive Governance & Stakeholder Alignment'
    ],
    deliverables: [
      'Portfolio Master Schedule & Milestone Trackers',
      'Centralized Risk Register & Mitigation Strategy',
      'Consolidated Financial Reporting Across All Assets',
      'Standard Operating Procedures (SOP) Manual'
    ],
    ourApproach: 'We turn fragmented construction jobs into a synchronized engineering program that leverages economies of scale.',
    clientBenefits: [
      'Volume purchasing discounts on steel, cement, and MEP gear',
      'Uniform brand and architectural identity across all regional branches',
      'Executive peace of mind with single-source accountability'
    ],
    sectorFocus: ['Commercial Banks & Retail Chains', 'Industrial Parks', 'Residential Masterplans'],
    image: '/projects/industrial/S2.jpg'
  },
  {
    id: 'design-build',
    number: '05',
    title: 'Design & Build',
    shortDesc: 'Unified single-contract delivery combining architectural vision, structural engineering, and construction execution.',
    fullDesc: 'Design & Build eliminates the adversarial relationship between designers and builders. Temamost delivers your project under one unified contract. Our design team and construction engineers work in lockstep from sketch to handover, cutting delivery times by up to 30%.',
    iconName: 'PenTool',
    capabilities: [
      'Integrated Architectural & Structural Engineering',
      'Building Information Modeling (BIM) Coordination',
      'Fast-Track Project Delivery Timelines',
      'Continuous Value Engineering during Drafting',
      'Unified Contractual Liability'
    ],
    deliverables: [
      'Full Working Drawings & Structural Calculation Sheets',
      '3D Photorealistic Renderings & Virtual Walkthroughs',
      'Integrated Schedule & Guaranteed Maximum Price (GMP)',
      'Complete As-Built Drawings & Operations Manuals'
    ],
    ourApproach: 'No blame games between architect and contractor. If there is a question on site, our in-house engineering team resolves it immediately.',
    clientBenefits: [
      'Faster project completion with overlapping design and site phases',
      'Guaranteed cost ceiling with minimal scope variance',
      'Seamless aesthetic execution from blueprint to real life'
    ],
    sectorFocus: ['Luxury Residential Villas', 'Boutique Commercial Hubs', 'Private Medical Facilities'],
    image: '/projects/residential/DB.jpg'
  },
  {
    id: 'turnkey-solutions',
    number: '06',
    title: 'Turnkey Solutions',
    shortDesc: 'Complete concept-to-commissioning execution. You hand us the site brief; we hand you the ready-to-occupy keys.',
    fullDesc: 'Turnkey solutions are engineered for busy developers, corporations, and diaspora clients who desire hassle-free delivery. Temamost manages every detail: site surveying, soil testing, design, regulatory approvals, structural construction, interior MEP installations, and commissioning.',
    iconName: 'KeyRound',
    capabilities: [
      'Concept Formulation & Site Feasibility Studies',
      'Full Civil, Structural, Mechanical & Electrical Engineering',
      'Turnkey Procurement of Elevators, Generators & HVAC',
      'Interior Fit-Out, Joinery & Finishing Works',
      'Facility Commissioning & Regulatory Handover'
    ],
    deliverables: [
      'Fully Operational, Tested & Commissioned Facility',
      'All Statutory Certificates & Occupancy Documentation',
      'Equipment Warranties & Preventative Maintenance Schedules',
      'Staff Operating Manuals & As-Built Schematics'
    ],
    ourApproach: 'Turn the key and start operations immediately. Every pump, light fixture, safety fire system, and backup system is tested and certified.',
    clientBenefits: [
      'Zero operational friction for the property owner',
      'Comprehensive warranty on structure and MEP systems',
      'Ideal for international investors and corporate expansions'
    ],
    sectorFocus: ['Industrial Plants', 'Corporate Headquarters', 'Turnkey Residential Developments'],
    image: '/projects/residential/P1.jpg'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'multi-storey-building-construction',
    slug: 'multi-storey-building-construction',
    title: 'Multi-Storey Building Construction Project',
    category: 'Buildings under construction',
    tags: ['Buildings under construction', 'Structural Works'],
    location: 'Port Harcourt, Rivers State',
    year: '2025',
    scope: 'Reinforced concrete frame, column casting, floor deck formwork, structural scaffolding',
    status: 'Under Construction',
    featured: true,
    description: 'Active multi-level building construction project executed by Temamost Nigeria Ltd in Port Harcourt. The project showcases in-situ reinforced concrete framing, column casting, suspended beam and slab deck formwork, and rigorous site safety scaffolding.',
    challenges: 'High-density vertical construction requiring rigorous formwork leveling, propping integrity, and strict concrete slump testing under high ambient humidity.',
    solution: 'Engineered multi-tier steel and timber propping systems with phased concrete pouring schedules and on-site batch quality monitoring.',
    results: 'Concrete frame advancing on schedule with verified structural column alignment and zero safety incidents.',
    featuredImage: '/projects/under-construction/IMG_3431.JPG.jpeg',
    coverImage: '/projects/under-construction/IMG_3431.JPG.jpeg',
    galleryImages: [
      '/projects/under-construction/IMG_3431.JPG.jpeg',
      '/projects/under-construction/IMG_3432.JPG.jpeg'
    ],
    galleryItems: [
      {
        src: '/projects/under-construction/IMG_3431.JPG.jpeg',
        caption: 'Reinforced concrete columns, beam formwork, and multi-level structural deck under construction',
        alt: 'Temamost Nigeria Ltd multi-storey building construction site in Port Harcourt'
      },
      {
        src: '/projects/under-construction/IMG_3432.JPG.jpeg',
        caption: 'Elevation view of upper structural framework and site safety scaffolding',
        alt: 'Temamost Nigeria Ltd concrete frame construction elevation'
      }
    ]
  },
  {
    id: 'contemporary-luxury-residential-project',
    slug: 'contemporary-luxury-residential-project',
    title: 'Contemporary Luxury Residential Villa Project',
    category: 'Residential',
    tags: ['Residential', 'Structural Works'],
    location: 'Port Harcourt, Rivers State',
    year: 'Completed Project',
    scope: 'Turnkey residential construction, reinforced concrete frame, exterior glazing, perimeter boundary wall',
    status: 'Completed',
    featured: true,
    description: 'Contemporary multi-level private residence delivered with architectural precision by Temamost Nigeria Ltd. Features cantilevered balcony projections, modern geometric rooflines, exterior fenestration, and secure perimeter gate integration.',
    challenges: 'Achieving clean off-shutter geometric balcony cantilevers while preserving waterproof roof drainage in coastal precipitation.',
    solution: 'Designed reinforced structural concrete tie-beams and cantilever slabs paired with integrated concealed rainwater drainage channels.',
    results: 'Delivered to client specifications with flawless architectural finishes and verified acoustic insulation.',
    featuredImage: '/projects/residential/P1.jpg',
    coverImage: '/projects/residential/P1.jpg',
    galleryImages: [
      '/projects/residential/P1.jpg',
      '/projects/residential/P2.jpg',
      '/projects/residential/P3.jpg',
      '/projects/residential/P4.jpg'
    ],
    galleryItems: [
      {
        src: '/projects/residential/P1.jpg',
        caption: 'Completed contemporary luxury residential villa elevation with cantilevered balconies',
        alt: 'Temamost Nigeria Ltd contemporary residential building construction project'
      },
      {
        src: '/projects/residential/P2.jpg',
        caption: 'Side elevation highlighting architectural fenestration and structural lines',
        alt: 'Temamost Nigeria Ltd residential villa architectural design'
      },
      {
        src: '/projects/residential/P3.jpg',
        caption: 'Compound entrance view and perimeter boundary fencing integration',
        alt: 'Temamost Nigeria Ltd luxury residence entrance and boundary wall'
      },
      {
        src: '/projects/residential/P4.jpg',
        caption: 'Architectural angle showing clean geometric lines and durable paint finish',
        alt: 'Temamost Nigeria Ltd modern residential building craftsmanship'
      }
    ]
  },
  {
    id: 'commercial-building-development',
    slug: 'commercial-building-development',
    title: 'Commercial Building Construction Project',
    category: 'Commercial',
    tags: ['Commercial', 'Structural Works'],
    location: 'Port Harcourt, Rivers State',
    year: 'Completed Project',
    scope: 'Commercial facility construction, multi-level reinforced concrete frame, exterior plastering, external civil paving',
    status: 'Completed',
    featured: true,
    description: 'Commercial building project delivered by Temamost Nigeria Ltd in Port Harcourt. Built with reinforced concrete framework, exterior architectural detailing, integrated MEP pathways, and durable exterior civil finishes.',
    challenges: 'Balancing multi-tenant spatial flexibility with robust structural load capacity and traffic-ready entrance aprons.',
    solution: 'Engineered wide column grids and heavy-duty external interlocking pavement capable of bearing continuous vehicular movement.',
    results: 'Facility completed with full compliance to physical planning regulations and commercial client satisfaction.',
    featuredImage: '/projects/commercial/LP4.jpg',
    coverImage: '/projects/commercial/LP4.jpg',
    galleryImages: [
      '/projects/commercial/LP4.jpg',
      '/projects/commercial/LP3.jpg',
      '/projects/commercial/POT4.jpg'
    ],
    galleryItems: [
      {
        src: '/projects/commercial/LP4.jpg',
        caption: 'Exterior facade of completed commercial building development',
        alt: 'Temamost Nigeria Ltd commercial building construction'
      },
      {
        src: '/projects/commercial/LP3.jpg',
        caption: 'Commercial building entrance perspective and architectural lines',
        alt: 'Temamost Nigeria Ltd commercial facility front view'
      },
      {
        src: '/projects/commercial/POT4.jpg',
        caption: 'Commercial site finishing and external perimeter works',
        alt: 'Temamost Nigeria Ltd commercial site finishing'
      }
    ]
  },
  {
    id: 'industrial-facility-steel-superstructure',
    slug: 'industrial-facility-steel-superstructure',
    title: 'Industrial Facility & Steel Superstructure Project',
    category: 'Industrial',
    tags: ['Industrial', 'Steel Works', 'Structural Works'],
    location: 'Port Harcourt Industrial Corridor',
    year: 'Completed Project',
    scope: 'Industrial facility structural framing, high-bay steel superstructure, heavy industrial slab',
    status: 'Completed',
    featured: true,
    description: 'Industrial facility project delivered by Temamost Nigeria Ltd, featuring heavy-duty structural framework, industrial building envelope, foundation anchor bolts, and high-load capacity ground slabs.',
    challenges: 'Erecting large clear-span structural elements while ensuring absolute joint precision and structural rigidity against operational vibration.',
    solution: 'Utilized precision-calibrated crane rigging, certified welding protocols, and high-tensile connection assemblies.',
    results: 'Delivered durable industrial asset capable of heavy industrial equipment staging and high warehouse throughput.',
    featuredImage: '/projects/industrial/S2.jpg',
    coverImage: '/projects/industrial/S2.jpg',
    galleryImages: [
      '/projects/industrial/S2.jpg',
      '/projects/industrial/S1.jpg'
    ],
    galleryItems: [
      {
        src: '/projects/industrial/S2.jpg',
        caption: 'Industrial facility structural framework and high-bay building envelope',
        alt: 'Temamost Nigeria Ltd industrial facility and structural steel works'
      },
      {
        src: '/projects/industrial/S1.jpg',
        caption: 'Industrial facility structural view and site staging area',
        alt: 'Temamost Nigeria Ltd industrial plant construction'
      }
    ]
  },
  {
    id: 'structural-construction-framing-project',
    slug: 'structural-construction-framing-project',
    title: 'Structural Construction & Framing Project',
    category: 'Structural Works',
    tags: ['Structural Works', 'Buildings under construction'],
    location: 'Rivers State, Nigeria',
    year: 'Under Construction',
    scope: 'Structural concrete frame, floor slab casting, column reinforcement, masonry walling',
    status: 'Structural Phase',
    featured: true,
    description: 'Structural building project under execution by Temamost Nigeria Ltd. Demonstrates structural reinforced concrete execution, floor slab shuttering, column reinforcement, and structural masonry.',
    challenges: 'Maintaining uniform concrete cover and rebar placement during intensive multi-stage pours.',
    solution: 'Continuous on-site inspection by registered site engineers with certified spacer blocks and concrete cube crushing tests.',
    results: 'Reinforced concrete superstructure achieved target 28-day compressive strength benchmarks.',
    featuredImage: '/projects/under-construction/S4.jpg',
    coverImage: '/projects/under-construction/S4.jpg',
    galleryImages: [
      '/projects/under-construction/S4.jpg',
      '/projects/under-construction/PT1.jpg',
      '/projects/under-construction/P12.jpg'
    ],
    galleryItems: [
      {
        src: '/projects/under-construction/S4.jpg',
        caption: 'Structural building frame and floor slab casting works',
        alt: 'Temamost Nigeria Ltd structural building frame construction'
      },
      {
        src: '/projects/under-construction/PT1.jpg',
        caption: 'Reinforcement works and column preparation',
        alt: 'Temamost Nigeria Ltd reinforcement works during structural construction'
      },
      {
        src: '/projects/under-construction/P12.jpg',
        caption: 'Building superstructure progression',
        alt: 'Temamost Nigeria Ltd building under construction structural progress'
      }
    ]
  },
  {
    id: 'residential-housing-development-project',
    slug: 'residential-housing-development-project',
    title: 'Residential Housing Development Project',
    category: 'Residential',
    tags: ['Residential'],
    location: 'Rivers State, Nigeria',
    year: 'Completed Project',
    scope: 'Residential building construction, pitched roof framing, perimeter boundary wall, driveway paving',
    status: 'Completed',
    featured: true,
    description: 'Completed residential housing project by Temamost Nigeria Ltd. Engineered with quality structural masonry, pitched aluminum roof framing, security perimeter walls, and clean compound drainage channels.',
    challenges: 'Coordinating simultaneous civil, structural, and interior finishing schedules while adhering to residential client delivery milestones.',
    solution: 'Implemented structured phased handovers with dedicated finishing teams focused on snag-free delivery.',
    results: 'Residential home delivered ready for occupancy with durable finishes and efficient surface stormwater discharge.',
    featuredImage: '/projects/residential/LP1.jpg',
    coverImage: '/projects/residential/LP1.jpg',
    galleryImages: [
      '/projects/residential/LP1.jpg',
      '/projects/residential/LP2.jpg',
      '/projects/residential/LP5.jpg'
    ],
    galleryItems: [
      {
        src: '/projects/residential/LP1.jpg',
        caption: 'Completed residential house front perspective with driveway paving',
        alt: 'Temamost Nigeria Ltd residential housing development'
      },
      {
        src: '/projects/residential/LP2.jpg',
        caption: 'Compound layout and exterior residential finishing',
        alt: 'Temamost Nigeria Ltd residential estate development project'
      },
      {
        src: '/projects/residential/LP5.jpg',
        caption: 'Perimeter fencing and residential access gateway',
        alt: 'Temamost Nigeria Ltd residential property construction'
      }
    ]
  },
  {
    id: 'industrial-plant-logistics-development',
    slug: 'industrial-plant-logistics-development',
    title: 'Industrial Logistics & Plant Construction Project',
    category: 'Industrial',
    tags: ['Industrial', 'Structural Works'],
    location: 'Rivers State, Nigeria',
    year: 'Ongoing Project',
    scope: 'Industrial facility civil works, warehouse erection, plant foundation construction, site supervision',
    status: 'Ongoing',
    featured: false,
    description: 'Industrial development project comprising warehouse units, structural building enclosure, drainage culverts, and site logistics infrastructure managed by Temamost Nigeria Ltd.',
    challenges: 'Executing earthworks and foundation pads on industrial subsoils with strict settlement tolerances.',
    solution: 'Engineered sub-base compaction and reinforced pad foundations designed to accommodate industrial loading.',
    results: 'Structural erection and civil staging progressing smoothly under certified engineering supervision.',
    featuredImage: '/projects/industrial/NP12.jpg',
    coverImage: '/projects/industrial/NP12.jpg',
    galleryImages: [
      '/projects/industrial/NP12.jpg',
      '/projects/industrial/NP1.jpg',
      '/projects/industrial/NP5.jpg',
      '/projects/industrial/POT1.jpg',
      '/projects/industrial/CEO2.jpg'
    ],
    galleryItems: [
      {
        src: '/projects/industrial/NP12.jpg',
        caption: 'Industrial building construction and perimeter elevation',
        alt: 'Temamost Nigeria Ltd industrial warehouse construction'
      },
      {
        src: '/projects/industrial/NP1.jpg',
        caption: 'Industrial site civil works and structural assembly',
        alt: 'Temamost Nigeria Ltd industrial site civil works'
      },
      {
        src: '/projects/industrial/NP5.jpg',
        caption: 'Industrial plant building structural enclosure',
        alt: 'Temamost Nigeria Ltd industrial building enclosure'
      },
      {
        src: '/projects/industrial/POT1.jpg',
        caption: 'Industrial site staging and structural progression',
        alt: 'Temamost Nigeria Ltd industrial construction progression'
      },
      {
        src: '/projects/industrial/CEO2.jpg',
        caption: 'On-site engineering inspection and quality supervision',
        alt: 'Temamost Nigeria Ltd on-site engineering supervision'
      }
    ]
  },
  {
    id: 'foundation-sub-structural-works',
    slug: 'foundation-sub-structural-works',
    title: 'Foundation & Sub-Structural Works Project',
    category: 'Sub-Structural / Foundation',
    tags: ['Sub-Structural / Foundation', 'Buildings under construction'],
    location: 'Port Harcourt Axis, Rivers State',
    year: 'Foundation Phase',
    scope: 'Groundwork excavation, foundation rebar cages, concrete casting, ground beam reinforcement',
    status: 'Foundation Phase',
    featured: false,
    description: 'Foundation and sub-structural engineering project by Temamost Nigeria Ltd. Showcases deep foundation preparation, rebar cage placement, sub-surface concrete elements, and elevation transition to superstructure.',
    challenges: 'Managing subgrade moisture and groundwater table during sub-structure excavation and concrete curing.',
    solution: 'Implemented continuous dewatering protocols and crystalline waterproofing admixtures in all sub-grade concrete.',
    results: 'Foundation reached design bearing capacity with zero water seepage.',
    featuredImage: '/projects/under-construction/POTii.jpg',
    coverImage: '/projects/under-construction/POTii.jpg',
    galleryImages: [
      '/projects/under-construction/POTii.jpg',
      '/projects/under-construction/POT3.jpg'
    ],
    galleryItems: [
      {
        src: '/projects/under-construction/POTii.jpg',
        caption: 'Foundation concrete works and ground-level structural elements',
        alt: 'Temamost Nigeria Ltd foundation works'
      },
      {
        src: '/projects/under-construction/POT3.jpg',
        caption: 'Sub-structural progression and site preparation',
        alt: 'Temamost Nigeria Ltd sub-structural site preparation'
      }
    ]
  },
  {
    id: 'residential-structural-masonry-project',
    slug: 'residential-structural-masonry-project',
    title: 'Residential Structural & Masonry Construction Project',
    category: 'Residential',
    tags: ['Residential', 'Structural Works'],
    location: 'Rivers State, Nigeria',
    year: 'Under Construction',
    scope: 'Structural masonry, lintel and column reinforcement, staircase casting, floor slab preparation',
    status: 'Structural Phase',
    featured: false,
    description: 'Multi-level residential building project by Temamost Nigeria Ltd undergoing structural masonry execution, load-bearing blockwork, concrete lintels, beam reinforcements, and floor slab preparation.',
    challenges: 'Ensuring vertical plumb alignment across long multi-room masonry expanses.',
    solution: 'Laser-guided string lines and reinforced concrete stiffener columns placed at calculated engineering intervals.',
    results: 'Walls and structural elements completed with high dimensional precision.',
    featuredImage: '/projects/residential/OW2.jpg',
    coverImage: '/projects/residential/OW2.jpg',
    galleryImages: [
      '/projects/residential/OW2.jpg',
      '/projects/residential/OW1.jpg',
      '/projects/residential/OW4.jpg'
    ],
    galleryItems: [
      {
        src: '/projects/residential/OW2.jpg',
        caption: 'Structural masonry and reinforced concrete lintels during construction',
        alt: 'Temamost Nigeria Ltd residential building under construction'
      },
      {
        src: '/projects/residential/OW1.jpg',
        caption: 'Side elevation of residential structure showing blockwork alignment',
        alt: 'Temamost Nigeria Ltd masonry and structural brickwork'
      },
      {
        src: '/projects/residential/OW4.jpg',
        caption: 'Upper level framing and structural floor progression',
        alt: 'Temamost Nigeria Ltd residential upper floor concrete framing'
      }
    ]
  },
  {
    id: 'design-build-residential-villa-project',
    slug: 'design-build-residential-villa-project',
    title: 'Design & Build Residential Villa Project',
    category: 'Residential',
    tags: ['Residential', 'Structural Works'],
    location: 'Port Harcourt, Rivers State',
    year: 'Completed Project',
    scope: 'Integrated architectural design, turnkey civil & structural construction, exterior perimeter paving',
    status: 'Completed',
    featured: false,
    description: 'Completed Design & Build residential villa delivered under single-point responsibility by Temamost Nigeria Ltd. Featuring clean modernist architectural lines, high-grade security gate, concrete apron paving, and exterior lighting.',
    challenges: 'Executing complex roof parapet geometry while ensuring concealed drainage pathways.',
    solution: 'Harmonized architectural detailing with in-house structural engineering from initial blueprint drafting through field execution.',
    results: 'Delivered on schedule with single contract accountability and turnkey client handover.',
    featuredImage: '/projects/residential/DB.jpg',
    coverImage: '/projects/residential/DB.jpg',
    galleryImages: [
      '/projects/residential/DB.jpg',
      '/projects/residential/PO1.jpg',
      '/projects/residential/POT.png',
      '/projects/residential/S6.jpg'
    ],
    galleryItems: [
      {
        src: '/projects/residential/DB.jpg',
        caption: 'Design & Build residential villa with completed perimeter paving and security gate',
        alt: 'Temamost Nigeria Ltd design and build residential villa'
      },
      {
        src: '/projects/residential/PO1.jpg',
        caption: 'Front facade showing modern parapet roofline and window detailing',
        alt: 'Temamost Nigeria Ltd modern residential facade'
      },
      {
        src: '/projects/residential/POT.png',
        caption: 'Full compound perspective and architectural orientation',
        alt: 'Temamost Nigeria Ltd residential compound layout'
      },
      {
        src: '/projects/residential/S6.jpg',
        caption: 'Exterior civil drainage and perimeter boundary finishing',
        alt: 'Temamost Nigeria Ltd residential perimeter civil works'
      }
    ]
  }
];

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    name: 'Naada, Baritema Desmond',
    designation: 'GMNSE',
    role: 'Managing Director / Construction Manager',
    specialization: 'Civil Engineering, Structural Project Management & Executive Operations',
    bio: 'Director and Construction Manager of Temamost Nigeria Ltd. A recognized civil engineer with extensive field leadership in complex structural works, high-rise building frames, and infrastructure projects across Port Harcourt and the Niger Delta.',
    image: '/team/ceo-director.jpg'
  },
  {
    name: 'Ogbonna Julie Seiyefah',
    designation: 'B.Sc, ACA',
    role: 'Administrative / Finance Manager',
    specialization: 'Corporate Governance, Project Financial Control & Procurement Oversight',
    bio: 'Leads financial strategy, cost accounting, contract compliance, and administrative operations at Temamost. Ensures transparent budgeting, timely procurement financing, and disciplined fiscal governance on every client engagement.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Engr. Daniel Oseahumen Jatto',
    designation: 'MNSE, COREN Reg.',
    role: 'Electrical & Electronic Engineer',
    specialization: 'High-Voltage Power Distribution, Building Automation & MEP Coordination',
    bio: 'Registered professional engineer directing high-voltage substation integration, industrial electrical reticulation, fire detection automation, and renewable energy systems across commercial and residential developments.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Mike B. Teere',
    designation: 'M.Sc Environmental Eng.',
    role: 'Environmental Engineering Manager',
    specialization: 'EIA Compliance, Coastal Drainage & Geotechnical Environmental Controls',
    bio: 'Oversees environmental impact assessments (EIA), sustainable site practices, stormwater drainage systems, and eco-friendly soil stabilization techniques adhering to federal and state environmental mandates.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Albert Ibinabo Light',
    designation: 'B.Eng Civil, PMP',
    role: 'Civil Engineer / Project Manager',
    specialization: 'Critical Path Site Scheduling, Quality Control & Subcontractor Governance',
    bio: 'Directs day-to-day site operations, structural concrete inspection, materials laboratory testing, and contractor scheduling. Specializes in fast-track execution while maintaining zero snags.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Akpobari Jeremiah Barisua',
    designation: 'NEBOSH, IOSH',
    role: 'General Health, Safety & Environment (HSE) Manager',
    specialization: 'Occupational Site Safety, Risk Hazard Analysis & Emergency Protocols',
    bio: 'Leads Temamost’s safety-first culture. Enforces personal protective equipment (PPE) mandates, routine toolbox safety talks, risk mitigation, and strict zero-harm protocols across all live construction sites.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
  }
];

export const INDUSTRIES_SERVED = [
  {
    title: 'Residential',
    subtitle: 'Private Residences & Masterplanned Estates',
    description: 'Custom luxury villas, multi-family apartment complexes, and gated residential communities engineered for durability and enduring aesthetic appeal.',
    iconName: 'Home',
    stats: '850+ Residential Units'
  },
  {
    title: 'Commercial',
    subtitle: 'Corporate Headquarters & Retail Spaces',
    description: 'High-performance office towers, retail shopping centers, banking halls, and business plazas built for operational efficiency and modern aesthetics.',
    iconName: 'Building',
    stats: '60+ Commercial Hubs'
  },
  {
    title: 'Industrial',
    subtitle: 'Warehouses & Processing Facilities',
    description: 'Heavy logistics sheds, manufacturing facilities, workshops, and high-load distribution centers built with specialized slab and steel frameworks.',
    iconName: 'Factory',
    stats: '35+ Industrial Assets'
  },
  {
    title: 'Infrastructure',
    subtitle: 'Civil Works, Roads & Stormwater Channels',
    description: 'Urban drainage networks, access roads, reinforced box culverts, and municipal civil works that stand resilient against Niger Delta precipitation.',
    iconName: 'Route',
    stats: '45+ km Civil Infrastructure'
  },
  {
    title: 'Public Sector',
    subtitle: 'Institutional & Community Facilities',
    description: 'Transparent, regulatory-compliant execution for municipal facilities, educational institutions, healthcare centers, and public administrative offices.',
    iconName: 'Landmark',
    stats: '100% Audit Compliance'
  },
  {
    title: 'Real Estate Development',
    subtitle: 'Joint Ventures & Turnkey Delivery',
    description: 'High-yield construction execution for property developers and investment groups looking to optimize capital efficiency and time-to-market.',
    iconName: 'TrendingUp',
    stats: '₦10B+ Managed Assets'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    name: 'DISCOVER',
    subtitle: 'Understanding Vision & Constraints',
    description: 'We meet with your team to dissect project ambitions, examine site survey data, analyze budget parameters, and determine structural feasibility.',
    deliverable: 'Initial Project Charter & Site Reconnaissance Brief'
  },
  {
    number: '02',
    name: 'PLAN',
    subtitle: 'Budgeting & Strategic Roadmap',
    description: 'Our estimators develop itemized Bills of Quantities (BoQ), critical path timelines, procurement milestones, and cash-flow projections.',
    deliverable: 'Comprehensive Financial Baseline & Master Schedule'
  },
  {
    number: '03',
    name: 'DESIGN',
    subtitle: 'Engineering & Permitting Alignment',
    description: 'Architects and licensed structural/MEP engineers collaborate to produce constructible shop drawings, 3D visualizations, and statutory approval submissions.',
    deliverable: 'Approved Working Drawings & Statutory Building Permits'
  },
  {
    number: '04',
    name: 'BUILD',
    subtitle: 'Rigorous Field Execution & QA/QC',
    description: 'Temamost mobilizes plant equipment and certified field teams. Daily site supervision, concrete batch testing, and HSE protocols ensure flaw-free building.',
    deliverable: 'Weekly Progress Audits & Milestone Inspection Sign-Offs'
  },
  {
    number: '05',
    name: 'DELIVER',
    subtitle: 'Commissioning, Snag-Free Handover & Keys',
    description: 'We conduct full MEP load testing, cosmetic inspections, system commissioning, and hand over the keys along with warranties and as-built manuals.',
    deliverable: 'Certificate of Practical Completion & Operations Guide'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    quote: 'Temamost Nigeria Ltd delivered our commercial facility in the Port Harcourt corridor with exceptional technical discipline. In an industry where variation claims are common, their transparency and cost control were refreshing.',
    clientName: 'Chief Emeka O. Nnamdi',
    position: 'Chairman & Principal Investor',
    organization: 'Commercial Property Consortium',
    location: 'Port Harcourt, Nigeria',
    projectType: 'Commercial Building'
  },
  {
    quote: 'Handling building construction in Port Harcourt requires deep geotechnical knowledge because of our soil and water table. Engr. Desmond Naada and his team engineered a structural frame that gave us absolute peace of mind.',
    clientName: 'Dr. Tariere Briggs',
    position: 'Property Owner & Investor',
    organization: 'Residential Developments',
    location: 'Old GRA, Port Harcourt',
    projectType: 'Luxury Residential'
  },
  {
    quote: 'As an industrial operator, heavy-load floor durability and steel accuracy are everything. Temamost executed our industrial facility with remarkable structural precision and zero lost-time safety incidents.',
    clientName: 'Alhaji Bashir Mohammed',
    position: 'Operations Director',
    organization: 'Industrial Logistics Group',
    location: 'Port Harcourt Industrial Zone',
    projectType: 'Industrial Facility'
  }
];

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: 'foundation-engineering-niger-delta-soils',
    title: 'Foundation Engineering in the Niger Delta: Overcoming High Water Tables and Soft Soils',
    category: 'Engineering',
    date: 'February 18, 2026',
    readTime: '6 min read',
    author: 'Naada, Baritema Desmond (GMNSE)',
    excerpt: 'Constructing resilient structures in Port Harcourt and riverine regions requires tailored geotechnical strategies. Here is how deep piling and waterproofing prevent catastrophic building settlement.',
    content: [
      'The geological reality of Port Harcourt and surrounding Niger Delta terrain is defined by alluvial soil deposits, high groundwater tables, and low bearing-capacity clay layers. For any developer planning a structure beyond single-storey masonry, surface strip foundations represent an unacceptable liability.',
      'At Temamost Nigeria Ltd, we mandate comprehensive geotechnical soil investigations—including Cone Penetrometer Tests (CPT) and borehole SPT drilling—prior to foundation sizing.',
      'When high water tables are detected, our engineers utilize bored cast-in-place concrete piles, precast driven piles, or specialized engineered pile rafts. Combining these deep load-transfer systems with crystalline hydrophobic concrete admixtures prevents the capillary rise of saline moisture that corrodes reinforcement steel.'
    ],
    keyTakeaways: [
      'Never skip soil CPT testing in coastal Rivers State terrain',
      'Engineered pile caps isolate structural loads from seasonal soil expansion',
      'Crystalline waterproofing stops moisture ingress at the molecular level'
    ],
    image: '/projects/under-construction/POTii.jpg'
  },
  {
    id: 'controlling-construction-costs-nigeria-inflation',
    title: 'Mitigating Construction Cost Volatility in Nigeria: Strategic Procurement & Value Engineering',
    category: 'Cost Estimation',
    date: 'January 28, 2026',
    readTime: '5 min read',
    author: 'Ogbonna Julie Seiyefah',
    excerpt: 'Fluctuating material costs can derail major capital budgets. How proactive procurement planning, forward contracts, and value engineering insulate developers.',
    content: [
      'Construction budgets in Nigeria face currency fluctuations and volatile pricing in primary building materials like rebar steel, Portland cement, and imported MEP fixtures. Developers who rely on casual day-to-day material purchases often suffer cost overruns of 30% to 50%.',
      'The solution lies in institutional pre-construction discipline. At Temamost, we deploy forward-procurement frameworks where primary structural materials are locked in at project inception and stored in secured bonded staging yards.',
      'Simultaneously, our value engineering team analyzes structural designs to eliminate redundant beam mass without compromising factor-of-safety margins, ensuring every Naira spent directly contributes to structural performance.'
    ],
    keyTakeaways: [
      'Forward procurement locks material costs against mid-project spikes',
      'Value engineering eliminates non-essential structural mass',
      'Itemized Bills of Quantities protect developer equity against arbitrary variation claims'
    ],
    image: '/projects/under-construction/S4.jpg'
  },
  {
    id: 'advantages-of-design-build-turnkey-contracts',
    title: 'Why Real Estate Developers Are Choosing Design-Build Over Traditional Contracting',
    category: 'Project Management',
    date: 'December 12, 2025',
    readTime: '4 min read',
    author: 'Albert Ibinabo Light',
    excerpt: 'Traditional design-bid-build workflows create finger-pointing when site discrepancies emerge. How single-source design-build contracts deliver 30% faster project completion.',
    content: [
      'In traditional procurement, the client engages an architect, then bids the project to several contractors, and often spends months arbitrating disputes between the design team and the builders on site.',
      'The Design-Build model deployed by Temamost Nigeria Ltd consolidates both design authorship and construction execution under one roof. When our site engineers review an architectural nuance, they communicate directly with in-house designers in minutes rather than weeks.',
      'This unified delivery streamlines milestone scheduling, allows early site mobilization while detailed finishing drawings are being completed, and guarantees single-point accountability for structural integrity.'
    ],
    keyTakeaways: [
      'Single contract minimizes legal friction and finger-pointing',
      'Fast-track delivery cuts typical gestation periods by several months',
      'Greater alignment between initial budgetary estimates and final handover costs'
    ],
    image: '/projects/residential/DB.jpg'
  }
];

export const AUTHENTIC_CERTIFICATES: CertificateCredential[] = [
  {
    id: 'cac-incorporation',
    title: 'Certificate of Incorporation',
    issuingOrganization: 'Corporate Affairs Commission (CAC), Federal Republic of Nigeria',
    regNumber: 'RC 1441087',
    dateIssued: 'September 27, 2017',
    verifiedCompany: 'TEMAMOST NIG LTD',
    type: 'Statutory Company Incorporation (Limited by Shares)',
    image: '/certificates/C2.jpg',
    thumbnail: '/certificates/CO1.jpg',
    badge: 'CAC Incorporation',
    description: 'Incorporated under the Companies and Allied Matters Act 1990 by the Corporate Affairs Commission, Abuja, Nigeria.',
    featuredOnHome: true
  },
  {
    id: 'firs-vat-tin',
    title: 'Taxpayer Identification Number (TIN) / VAT Registration',
    issuingOrganization: 'Federal Inland Revenue Service (FIRS)',
    regNumber: 'TIN: 20618815-0001',
    dateIssued: 'July 8, 2021',
    verifiedCompany: 'TEMAMOST NIGERIA LIMITED',
    type: 'Federal Tax & VAT Collection Agent Registration',
    image: '/certificates/C3.jpg',
    badge: 'FIRS / VAT Certified',
    description: 'Issued by the Port Harcourt 1 Micro & Small Tax Office, No. 10 Moscow Road, Port Harcourt, confirming active tax and VAT compliance.',
    featuredOnHome: true
  },
  {
    id: 'smedan-registration',
    title: 'Certificate of Registration',
    issuingOrganization: 'Small and Medium Enterprises Development Agency of Nigeria (SMEDAN)',
    regNumber: 'SUIN: SUIN23250180',
    dateIssued: 'September 22, 2020',
    verifiedCompany: 'TEMAmost Nig Ltd',
    type: 'National Enterprise Accreditation',
    image: '/certificates/C1.jpg',
    badge: 'SMEDAN Registered',
    description: 'Official registration with the Small and Medium Enterprises Development Agency of Nigeria under the Federal Republic of Nigeria.',
    featuredOnHome: true
  },
  {
    id: 'cac-registry-seal',
    title: 'CAC Corporate Registry Record & Seal',
    issuingOrganization: 'Corporate Affairs Commission (CAC)',
    regNumber: 'RC 1441087',
    dateIssued: 'September 27, 2017',
    verifiedCompany: 'TEMAMOST NIG LTD',
    type: 'Official Registry Stamp & Federal Certification',
    image: '/certificates/CO1.jpg',
    badge: 'CAC Registry Seal',
    description: 'Federal statutory stamp and official registrar seal certifying incorporation under the Companies and Allied Matters Act 1990.',
    featuredOnHome: false
  }
];

export const CERTIFICATIONS_DATA = [
  {
    title: 'Corporate Affairs Commission (CAC)',
    status: 'Incorporated September 2017',
    registrationNumber: 'RC 1441087',
    description: 'Fully registered corporate engineering and general construction entity under the Companies and Allied Matters Act 1990.',
    badge: 'CAC Verified'
  },
  {
    title: 'Federal Inland Revenue Service (FIRS)',
    status: 'Active Tax & VAT Compliant',
    registrationNumber: 'TIN 20618815-0001',
    description: 'Statutory VAT collection agent and corporate tax compliant under the Port Harcourt 1 Micro & Small Tax Office.',
    badge: 'FIRS Certified'
  },
  {
    title: 'SMEDAN Enterprise Registration',
    status: 'Federally Registered Entity',
    registrationNumber: 'SUIN 23250180',
    description: 'Accredited with the Small and Medium Enterprises Development Agency of Nigeria.',
    badge: 'SMEDAN Accredited'
  },
  {
    title: 'Health, Safety & Environment (HSE)',
    status: 'Zero-Harm Policy Enforced',
    registrationNumber: 'HSE Level 3 & NEBOSH Compliant',
    description: 'Dedicated HSE officers on all active sites, routine hazard audits, PPE compliance, and certified site risk management.',
    badge: 'Safety Standards'
  }
];

export const AUTHENTIC_CLIENTS: ClientOrganization[] = [
  {
    id: 'reef-courts-estate',
    name: 'Reef Courts Estate',
    category: 'Residential Estate & Development',
    logo: '/clients/reef-courts-estate.jpeg',
    altText: 'Reef Courts Estate Official Logo - Client & Project Partner of Temamost Nigeria Ltd',
    website: 'https://www.reefcourtsestate.com.ng',
    relationship: 'Residential & Infrastructure Project Development Partner',
    serviceScope: [
      'Residential Housing Development',
      'Civil Drainage & Road Sub-base Infrastructure',
      'Structural Framing & Foundation Engineering'
    ],
    featuredOnHome: true,
    featuredOnAbout: true,
    featuredOnProjects: true
  },
  {
    id: 'entero-homes',
    name: 'Entero-Homes Limited',
    category: 'Property Development & Real Estate',
    logo: '/clients/entero-homes.jpeg',
    altText: 'Entero-Homes Limited Official Logo (RC 1465889) - Commercial & Housing Partner',
    regNumber: 'RC 1465889',
    relationship: 'Corporate Real Estate Development & Construction Partner',
    serviceScope: [
      'Commercial & Residential Building Construction',
      'Turnkey Project Execution',
      'Quality Control & Structural Engineering'
    ],
    featuredOnHome: true,
    featuredOnAbout: true,
    featuredOnProjects: true
  },
  {
    id: 'methodist-church-nigeria',
    name: 'Methodist Church Nigeria',
    category: 'Institutional & Religious Architecture',
    logo: '/clients/methodist-church-nigeria.jpg',
    altText: 'Methodist Church Nigeria Official Crest - Institutional Client of Temamost Nigeria Ltd',
    relationship: 'Institutional & Worship Facility Structural Engineering',
    serviceScope: [
      'Institutional Building Construction',
      'High-Span Structural Engineering',
      'Architectural Concrete & Facility Works'
    ],
    featuredOnHome: true,
    featuredOnAbout: true,
    featuredOnProjects: true
  },
  {
    id: 'commercial-partner-c4',
    name: 'Commercial & Property Partner',
    category: 'Corporate & Commercial Client',
    logo: '/clients/c4-client.jpg',
    altText: 'Corporate Client Organization Logo - Construction & Engineering Partner of Temamost Nigeria Ltd',
    relationship: 'Commercial Building & Civil Infrastructure Works',
    serviceScope: [
      'Commercial Facilities Construction',
      'Turnkey MEP & Project Management',
      'Site Engineering & Delivery'
    ],
    featuredOnHome: true,
    featuredOnAbout: true,
    featuredOnProjects: true
  }
];

