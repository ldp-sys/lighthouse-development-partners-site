export type IconName =
  | "building"
  | "briefcase"
  | "chart"
  | "check"
  | "city"
  | "compass"
  | "factory"
  | "file"
  | "globe"
  | "handshake"
  | "home"
  | "leaf"
  | "lock"
  | "map"
  | "shield"
  | "spark"
  | "target"
  | "users"
  | "waves";

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type FooterColumn = {
  title: string;
  links: NavItem[];
};

export type Stat = {
  value: string;
  label: string;
  description?: string;
  isPlaceholder?: boolean;
};

export type Value = {
  title: string;
  description: string;
  icon: IconName;
  isPlaceholder?: boolean;
};

export type Capability = {
  title: string;
  description: string;
  icon: IconName;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type PartnerCategory = {
  title: string;
  description: string;
  icon: IconName;
};

export type ProjectGalleryItem = {
  title: string;
  image: string;
  alt: string;
};

export type Project = {
  slug: string;
  name: string;
  href: string;
  location: string;
  type: string;
  status: string;
  statusDetail?: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  gallery: ProjectGalleryItem[];
  stats: Stat[];
  facts: Stat[];
  tags: string[];
  unitFeatures: string[];
  amenities: string[];
  sustainability: string;
  ecosystem: string[];
  isPlaceholder?: boolean;
};

export type NewsArticle = {
  slug: string;
  title: string;
  href: string;
  category: string;
  date: string;
  deck: string;
  body: string[];
  image: string;
  imageAlt: string;
  isPlaceholder?: boolean;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  isPlaceholder?: boolean;
};

export type LegalPage = {
  title: string;
  description: string;
  updated: string;
  sections: {
    title: string;
    body: string[];
  }[];
  isPlaceholder?: boolean;
};

export type FAQ = {
  question: string;
  answer: string;
  isPlaceholder?: boolean;
};

export const site = {
  company: {
    name: "Lighthouse Development Partners",
    shortName: "LDP",
    type: "Privately held real estate development firm",
    industry: "Real Estate",
    domain: "https://www.lighthousedevelopment.com",
    address: {
      street: "360 Central Ave, Suite 800",
      city: "St Petersburg",
      region: "FL",
      postalCode: "33701",
      country: "US"
    },
    email: "info@lighthousedevelopment.com",
    emailIsPlaceholder: true,
    investorPortalUrl: "https://www.lighthousedevelopment.com/",
    investorPortalUrlIsPlaceholder: true,
    logo: "/images/lighthouse-logo.svg",
    mark: "/images/lighthouse-mark.svg",
    linkedInUrl: "",
    mission:
      "Lighthouse Development Partners is committed to creating exceptional, vibrant, and sustainable developments by delivering high-quality Affordable Housing, Hotels, and Mixed-Use Master Planned Communities. Through strategic partnerships, the firm is dedicated to innovation, inclusivity, and enhancing the economic and social fabric of the neighborhoods it serves.",
    positioning:
      "Developing communities with purpose, discipline, and lasting value."
  },
  seo: {
    defaultTitleFormat: "%s | Lighthouse Development Partners",
    homeTitle:
      "Lighthouse Development Partners | Affordable Housing, Hospitality & Mixed-Use Development",
    homeDescription:
      "Lighthouse Development Partners creates affordable housing, hospitality, and mixed-use developments through strategic partnerships, sustainable design, and rigorous execution.",
    ogImage: "/images/og-image.svg"
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Impact", href: "/impact" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "News", href: "/news" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" }
  ] satisfies NavItem[],
  footerColumns: [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Team", href: "/team" },
        { label: "News", href: "/news" },
        { label: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Projects",
      links: [
        { label: "Portfolio", href: "/projects" },
        { label: "Reserve at Eastwood", href: "/projects/reserve-at-eastwood" },
        { label: "Impact", href: "/impact" }
      ]
    },
    {
      title: "Capabilities",
      links: [
        { label: "Development Capabilities", href: "/capabilities" },
        { label: "Partnerships", href: "/partnerships" },
        { label: "Investor Portal", href: "/investor-portal" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Accessibility", href: "/accessibility" }
      ]
    }
  ] satisfies FooterColumn[],
  home: {
    hero: {
      eyebrow: "Lighthouse Development Partners",
      title: "Developing communities with purpose, discipline, and lasting value.",
      description:
        "Lighthouse Development Partners creates affordable housing, hospitality, and mixed-use developments through strategic partnerships, sustainable design, and rigorous execution.",
      ctas: [
        { label: "View Our Work", href: "/projects" },
        { label: "Partner With Us", href: "/partnerships" },
        { label: "Investor Portal", href: "/investor-portal" }
      ],
      image: "/images/reserve-eastwood-hero.svg",
      imageAlt:
        "Architectural placeholder rendering for Reserve at Eastwood in the Lighthouse brand style",
      stats: [
        { value: "288", label: "Affordable homes" },
        { value: "30%-70%", label: "AMI bands" },
        { value: "Fort Myers", label: "Florida" },
        { value: "EnergyStar + NGBS", label: "Specifications" }
      ] satisfies Stat[]
    },
    credibility: {
      eyebrow: "Development Platform",
      title: "A development partner for complex, high-impact projects.",
      body:
        "From affordable housing communities to hospitality and mixed-use developments, Lighthouse Development Partners brings together capital, public-sector coordination, design, construction, and long-term operating perspective to deliver projects that serve residents, strengthen neighborhoods, and create durable value."
    },
    whatWeBuild: [
      {
        title: "Affordable Housing",
        description:
          "Income-restricted communities designed around resident dignity, municipal alignment, and long-term affordability.",
        icon: "home"
      },
      {
        title: "Hotels & Hospitality",
        description:
          "Hospitality development opportunities shaped by site strategy, market demand, and disciplined execution.",
        icon: "building"
      },
      {
        title: "Mixed-Use / Master-Planned Communities",
        description:
          "Coordinated places that connect residential, hospitality, civic, and neighborhood-serving uses.",
        icon: "city"
      },
      {
        title: "Public-Private Partnerships",
        description:
          "Structured collaboration with public agencies, landowners, lenders, and delivery partners.",
        icon: "handshake"
      }
    ] satisfies Capability[],
    partnershipEngine: [
      {
        title: "Public Agencies",
        description:
          "Aligning development scope with local priorities, housing needs, infrastructure realities, and public accountability.",
        icon: "shield"
      },
      {
        title: "Capital Partners",
        description:
          "Coordinating capital strategies that match project complexity, timing, affordability requirements, and execution risk.",
        icon: "chart"
      },
      {
        title: "Landowners",
        description:
          "Evaluating sites for feasibility, entitlement pathway, neighborhood fit, and long-term development value.",
        icon: "map"
      },
      {
        title: "Builders & Designers",
        description:
          "Integrating design, cost, schedule, sustainability, and constructability from early planning through delivery.",
        icon: "factory"
      }
    ] satisfies PartnerCategory[],
    impactStats: [
      { value: "288", label: "Affordable homes in active project" },
      { value: "30%-70%", label: "AMI bands served" },
      { value: "EnergyStar + NGBS", label: "Sustainable specifications" },
      { value: "Florida-based", label: "Development platform" }
    ] satisfies Stat[],
    finalCta: {
      title: "Built through partnership. Delivered with discipline.",
      description:
        "Connect with Lighthouse Development Partners to discuss development opportunities, public-sector priorities, or project partnerships.",
      ctas: [
        { label: "Contact Us", href: "/contact" },
        { label: "Explore Capabilities", href: "/capabilities" }
      ]
    }
  },
  about: {
    hero: {
      eyebrow: "About Lighthouse",
      title:
        "A focused development platform for housing, hospitality, and mixed-use communities.",
      description:
        "Lighthouse Development Partners is a privately held real estate development firm headquartered in St Petersburg, Florida."
    },
    overview:
      "Lighthouse Development Partners is committed to creating exceptional, vibrant, and sustainable developments by delivering high-quality Affordable Housing, Hotels, and Mixed-Use Master Planned Communities. Through strategic partnerships, the firm is dedicated to innovation, inclusivity, and enhancing the economic and social fabric of the neighborhoods it serves.",
    philosophy: [
      {
        title: "Partnership-first execution",
        description:
          "Complex projects move through aligned public, capital, design, construction, and community relationships.",
        icon: "handshake"
      },
      {
        title: "Community alignment",
        description:
          "Development decisions are grounded in local needs, resident experience, and neighborhood context.",
        icon: "users"
      },
      {
        title: "Financial discipline",
        description:
          "Capital strategy, feasibility, cost control, and delivery risk are treated as core design constraints.",
        icon: "chart"
      },
      {
        title: "Sustainable design",
        description:
          "Projects are planned with practical sustainability standards and durable operating performance in mind.",
        icon: "leaf"
      },
      {
        title: "Long-term stewardship",
        description:
          "Lighthouse approaches development with attention to operations, compliance, and community durability.",
        icon: "shield"
      }
    ] satisfies Value[],
    values: [
      {
        title: "Partnership",
        description:
          "Coordinate trusted public, private, and community relationships around shared objectives.",
        icon: "handshake"
      },
      {
        title: "Innovation",
        description:
          "Use practical problem-solving to navigate feasibility, financing, design, and delivery constraints.",
        icon: "spark"
      },
      {
        title: "Inclusivity",
        description:
          "Support communities that serve a range of households, needs, and neighborhood priorities.",
        icon: "users"
      },
      {
        title: "Sustainability",
        description:
          "Advance efficient, resilient, and durable building approaches where project standards support them.",
        icon: "leaf"
      },
      {
        title: "Execution Discipline",
        description:
          "Maintain clear milestones, risk ownership, and rigorous follow-through from feasibility to delivery.",
        icon: "target",
        isPlaceholder: true
      },
      {
        title: "Transparency",
        description:
          "Communicate clearly with partners and stakeholders around facts, decisions, and open items.",
        icon: "file",
        isPlaceholder: true
      }
    ] satisfies Value[],
    operatingModel: {
      title: "Lean, senior-led, partnership-oriented.",
      body:
        "Lighthouse is built to coordinate complex projects through trusted relationships and disciplined execution. The platform is intentionally focused: it brings senior attention to site strategy, public-sector alignment, capital coordination, delivery partners, and long-term project stewardship without overstating company scale."
    },
    milestones: [
      {
        title: "Lighthouse Development Partners platform established",
        description: "Platform milestone. Exact formation narrative pending approved company history.",
        isPlaceholder: true
      },
      {
        title: "Reserve at Eastwood closing announced",
        description:
          "Closing milestone for a 288-unit affordable housing community in Fort Myers, Florida."
      },
      {
        title: "Construction phase underway",
        description: "Final wording and status to be confirmed internally.",
        isPlaceholder: true
      },
      {
        title: "Additional pipeline milestones coming soon",
        description: "Pipeline details available upon request.",
        isPlaceholder: true
      }
    ]
  },
  projectsPage: {
    hero: {
      eyebrow: "Projects",
      title: "Communities designed for residents, municipalities, and long-term partners.",
      description:
        "The Lighthouse portfolio is structured around affordable housing, hospitality, and mixed-use development opportunities where partnership and execution discipline matter."
    },
    filters: [
      "All",
      "Affordable Housing",
      "Hospitality",
      "Mixed-Use",
      "Under Construction",
      "Pipeline",
      "To Be Announced"
    ]
  },
  projects: [
    {
      slug: "reserve-at-eastwood",
      name: "Reserve at Eastwood",
      href: "/projects/reserve-at-eastwood",
      location: "Fort Myers, Florida",
      type: "Affordable Housing",
      status: "Closing announced",
      statusDetail: "Moving into construction",
      summary:
        "A 288-unit affordable multifamily community serving 30%, 50%, 60%, and 70% AMI households.",
      description:
        "Reserve at Eastwood is designed as a high-quality affordable housing community serving a range of household sizes and income levels in Fort Myers. The project combines resident-focused amenities, durable unit finishes, and sustainable building standards to support long-term community value.",
      image: "/images/reserve-eastwood-hero.svg",
      imageAlt:
        "Architectural placeholder rendering for Reserve at Eastwood multifamily buildings",
      gallery: [
        {
          title: "Exterior Massing",
          image: "/images/reserve-eastwood-hero.svg",
          alt: "Exterior placeholder rendering for Reserve at Eastwood"
        },
        {
          title: "Courtyard",
          image: "/images/reserve-eastwood-courtyard.svg",
          alt: "Courtyard placeholder rendering for Reserve at Eastwood"
        },
        {
          title: "Clubhouse",
          image: "/images/reserve-eastwood-clubhouse.svg",
          alt: "Clubhouse placeholder rendering for Reserve at Eastwood"
        },
        {
          title: "Site Plan",
          image: "/images/reserve-eastwood-site-plan.svg",
          alt: "Abstract site plan placeholder for Reserve at Eastwood"
        },
        {
          title: "Amenity Area",
          image: "/images/reserve-eastwood-amenity.svg",
          alt: "Amenity area placeholder rendering for Reserve at Eastwood"
        }
      ],
      stats: [
        { value: "288", label: "Affordable housing units" },
        { value: "30%, 50%, 60%, 70%", label: "AMI bands" },
        { value: "1-4 BR", label: "Apartment mix" },
        { value: "EnergyStar + NGBS", label: "Design specifications" }
      ],
      facts: [
        { value: "288", label: "Affordable housing units" },
        { value: "30%, 50%, 60%, 70%", label: "AMI bands" },
        { value: "1-, 2-, 3-, and 4-bedroom", label: "Apartment mix" },
        { value: "Fort Myers, Florida", label: "Location" },
        { value: "EnergyStar + NGBS", label: "Specifications" },
        { value: "Closing announced", label: "Status", description: "Moving into construction" }
      ],
      tags: ["Affordable Housing", "Under Construction", "Florida"],
      unitFeatures: [
        "Balconies",
        "Stainless steel appliances",
        "Granite countertops",
        "Luxury vinyl plank floors"
      ],
      amenities: [
        "6,800-square-foot clubhouse",
        "On-site management and maintenance staff",
        "Business and co-working stations",
        "Fitness center",
        "Community and media room",
        "Pool and grill area",
        "Pickleball court",
        "Dog park",
        "Playground"
      ],
      sustainability:
        "Reserve at Eastwood is designed to EnergyStar and National Green Building Standards / NGBS specifications. Certification status and final performance data to be confirmed upon project completion.",
      ecosystem: [
        "Public-sector coordination",
        "Housing finance",
        "Construction",
        "Design and visualization",
        "Legal and advisory",
        "Community stakeholders"
      ]
    },
    {
      slug: "gulf-coast-affordable-housing-pipeline",
      name: "Gulf Coast Affordable Housing Pipeline",
      href: "/contact?inquiry=project",
      location: "Florida Gulf Coast",
      type: "Affordable Housing",
      status: "Pipeline",
      summary: "Pipeline details available upon request.",
      description:
        "Placeholder for future affordable housing pipeline details once approved for public release.",
      image: "/images/abstract-coastal-grid.svg",
      imageAlt: "Abstract coastal planning grid placeholder",
      gallery: [],
      stats: [
        {
          value: "Pending",
          label: "Total units",
          description: "Metric pending internal confirmation",
          isPlaceholder: true
        },
        { value: "To be announced", label: "Status", isPlaceholder: true }
      ],
      facts: [],
      tags: ["Affordable Housing", "Pipeline", "To Be Announced"],
      unitFeatures: [],
      amenities: [],
      sustainability: "Sustainability approach to be confirmed.",
      ecosystem: [],
      isPlaceholder: true
    },
    {
      slug: "hospitality-development-opportunity",
      name: "Hospitality Development Opportunity",
      href: "/contact?inquiry=project",
      location: "To be announced",
      type: "Hospitality",
      status: "To Be Announced",
      summary: "Hospitality opportunity details will be added once approved.",
      description:
        "Placeholder for hotel and hospitality development opportunities.",
      image: "/images/abstract-coastal-grid.svg",
      imageAlt: "Abstract coastal grid placeholder for hospitality development",
      gallery: [],
      stats: [
        { value: "To be announced", label: "Market", isPlaceholder: true },
        { value: "Pending", label: "Project metrics", isPlaceholder: true }
      ],
      facts: [],
      tags: ["Hospitality", "To Be Announced"],
      unitFeatures: [],
      amenities: [],
      sustainability: "Sustainability approach to be confirmed.",
      ecosystem: [],
      isPlaceholder: true
    },
    {
      slug: "mixed-use-master-plan-opportunity",
      name: "Mixed-Use Master Plan Opportunity",
      href: "/contact?inquiry=project",
      location: "To be announced",
      type: "Mixed-Use",
      status: "To Be Announced",
      summary: "Master planning opportunity details will be added once approved.",
      description:
        "Placeholder for future mixed-use or master-planned community details.",
      image: "/images/map-florida-fort-myers.svg",
      imageAlt: "Abstract Florida map and parcel planning placeholder",
      gallery: [],
      stats: [
        { value: "Pending", label: "Development program", isPlaceholder: true },
        { value: "To be announced", label: "Status", isPlaceholder: true }
      ],
      facts: [],
      tags: ["Mixed-Use", "To Be Announced"],
      unitFeatures: [],
      amenities: [],
      sustainability: "Sustainability approach to be confirmed.",
      ecosystem: [],
      isPlaceholder: true
    }
  ] satisfies Project[],
  capabilitiesPage: {
    hero: {
      eyebrow: "Capabilities",
      title: "Development capabilities for complex, partnership-driven projects.",
      description:
        "Lighthouse coordinates development work across site strategy, public-sector alignment, capital planning, design, construction, and long-term stewardship."
    },
    capabilities: [
      {
        title: "Affordable Housing Development",
        description:
          "Income-restricted and mixed-income communities shaped around financing requirements, resident needs, and municipal priorities.",
        icon: "home"
      },
      {
        title: "Hotels & Hospitality",
        description:
          "Hospitality development coordination from site positioning through delivery partner alignment.",
        icon: "building"
      },
      {
        title: "Mixed-Use & Master Planning",
        description:
          "Planning frameworks for layered residential, hospitality, civic, and neighborhood-serving uses.",
        icon: "city"
      },
      {
        title: "Public-Private Partnerships",
        description:
          "Structured collaboration with public agencies, landowners, and institutional partners.",
        icon: "handshake"
      },
      {
        title: "Capital & Financing Coordination",
        description:
          "Capital stack strategy, lender coordination, and financial feasibility discipline.",
        icon: "chart"
      },
      {
        title: "Entitlements & Municipal Coordination",
        description:
          "Navigation of approvals, public priorities, infrastructure considerations, and stakeholder requirements.",
        icon: "compass"
      },
      {
        title: "Design, Construction & Delivery",
        description:
          "Integration of design intent, cost, schedule, constructability, and execution milestones.",
        icon: "factory"
      },
      {
        title: "Compliance & Long-Term Stewardship",
        description:
          "Attention to affordability requirements, operations perspective, and long-term asset performance.",
        icon: "shield"
      }
    ] satisfies Capability[],
    process: [
      {
        title: "Site identification & feasibility",
        description:
          "Evaluate location, program, infrastructure, zoning, market fit, and development constraints."
      },
      {
        title: "Public-sector alignment",
        description:
          "Coordinate with agencies and municipalities around community priorities and project requirements."
      },
      {
        title: "Capital stack strategy",
        description:
          "Shape financing paths around timing, affordability, risk, and partner requirements."
      },
      {
        title: "Entitlements & approvals",
        description:
          "Advance approvals with clear documentation, schedule discipline, and stakeholder coordination."
      },
      {
        title: "Design coordination",
        description:
          "Align architecture, engineering, sustainability, resident experience, and budget realities."
      },
      {
        title: "Closing & construction",
        description:
          "Move from financing close into construction through accountable delivery management."
      },
      {
        title: "Lease-up / activation",
        description:
          "Support transition from delivery to resident, hospitality, or mixed-use activation."
      },
      {
        title: "Compliance & asset stewardship",
        description:
          "Maintain attention to affordability, operating standards, and long-term performance."
      }
    ] satisfies ProcessStep[],
    complexityTags: [
      "LIHTC",
      "AMI structuring",
      "Workforce housing",
      "Mixed-income programming",
      "Municipal approvals",
      "Green building standards",
      "Community engagement",
      "Phased development",
      "Hospitality coordination",
      "Master planning"
    ]
  },
  impactPage: {
    hero: {
      eyebrow: "Impact",
      title: "Affordable housing is infrastructure for stronger communities.",
      description:
        "Lighthouse focuses on development outcomes that expand housing access, support residents, and contribute to neighborhood economic and social fabric."
    },
    pillars: [
      {
        title: "Housing access",
        description:
          "Create high-quality affordable homes that serve households across multiple income bands.",
        icon: "home"
      },
      {
        title: "Resident experience",
        description:
          "Plan communities with functional amenities, durable finishes, and daily-life convenience.",
        icon: "users"
      },
      {
        title: "Sustainable construction",
        description:
          "Use practical standards such as EnergyStar and NGBS where project design supports them.",
        icon: "leaf"
      },
      {
        title: "Neighborhood economics",
        description:
          "Support local stability and activity through well-executed housing and development projects.",
        icon: "city"
      },
      {
        title: "Public-private collaboration",
        description:
          "Coordinate public priorities with private-sector execution capacity.",
        icon: "handshake"
      }
    ] satisfies Value[],
    metrics: [
      { value: "288", label: "Affordable homes in active project" },
      { value: "30%-70%", label: "AMI bands served" },
      { value: "1- to 4-bedroom", label: "Homes" },
      { value: "EnergyStar + NGBS", label: "Specifications" },
      {
        value: "Pending",
        label: "Total pipeline units",
        description: "Metric pending internal confirmation",
        isPlaceholder: true
      },
      {
        value: "Pending",
        label: "Total capital mobilized",
        description: "Metric pending internal confirmation",
        isPlaceholder: true
      },
      {
        value: "Pending",
        label: "Completed communities",
        description: "Metric pending internal confirmation",
        isPlaceholder: true
      }
    ] satisfies Stat[]
  },
  partnershipsPage: {
    hero: {
      eyebrow: "Partnerships",
      title: "Partnership is how complex projects become real communities.",
      description:
        "Lighthouse works with public, private, capital, design, construction, and community partners to move difficult development opportunities from concept to delivery."
    },
    partnerTypes: [
      {
        title: "Municipalities & public agencies",
        description:
          "Development alignment with public goals, local needs, and accountable delivery.",
        icon: "shield"
      },
      {
        title: "Housing finance agencies",
        description:
          "Coordination around affordable housing programs, requirements, timing, and documentation.",
        icon: "file"
      },
      {
        title: "Landowners",
        description:
          "Feasibility, site strategy, and development pathways for underutilized or strategic land.",
        icon: "map"
      },
      {
        title: "Capital partners",
        description:
          "Capital stack planning and disciplined execution for real estate development opportunities.",
        icon: "chart"
      },
      {
        title: "Lenders",
        description:
          "Project information, closing coordination, and execution transparency.",
        icon: "briefcase"
      },
      {
        title: "Architects & engineers",
        description:
          "Design coordination around budget, constructability, standards, and user experience.",
        icon: "compass"
      },
      {
        title: "General contractors",
        description:
          "Delivery partnership around schedule, cost, quality, and project readiness.",
        icon: "factory"
      },
      {
        title: "Community organizations",
        description:
          "Stakeholder alignment and local context for responsible development.",
        icon: "users"
      }
    ] satisfies PartnerCategory[],
    brings: [
      "Early feasibility",
      "Site strategy",
      "Capital stack coordination",
      "Public-sector navigation",
      "Project execution",
      "Long-term orientation"
    ]
  },
  newsPage: {
    hero: {
      eyebrow: "News",
      title: "News, milestones, and project updates.",
      description:
        "Read public updates from Lighthouse Development Partners, including project milestones and platform announcements."
    }
  },
  news: [
    {
      slug: "reserve-at-eastwood-closing",
      title: "Lighthouse Development Partners Announces Closing of Reserve at Eastwood",
      href: "/news/reserve-at-eastwood-closing",
      category: "Project Milestone",
      date: "April 2026",
      deck:
        "The Fort Myers affordable housing community will deliver 288 homes for households across 30%, 50%, 60%, and 70% AMI bands.",
      body: [
        "Lighthouse Development Partners has announced the closing of Reserve at Eastwood, a 288-unit affordable multifamily community in Fort Myers, Florida.",
        "The community is planned to serve households across 30%, 50%, 60%, and 70% AMI bands, with one-, two-, three-, and four-bedroom apartment homes designed for a range of household sizes.",
        "Resident-focused features are planned to include balconies, stainless steel appliances, granite countertops, and luxury vinyl plank floors. Community amenities are expected to include a 6,800-square-foot clubhouse, on-site management and maintenance staff, business and co-working stations, a fitness center, a community and media room, a pool and grill area, a pickleball court, a dog park, and a playground.",
        "Reserve at Eastwood is designed to EnergyStar and National Green Building Standards / NGBS specifications. Certification status and final performance data will be confirmed upon completion.",
        "The closing milestone moves the project into construction and reflects Lighthouse's focus on strategic partnerships, disciplined delivery, and affordable housing that strengthens the communities it serves."
      ],
      image: "/images/reserve-eastwood-hero.svg",
      imageAlt: "Reserve at Eastwood placeholder rendering"
    },
    {
      slug: "public-facing-platform",
      title: "Lighthouse Development Partners expands public-facing platform",
      href: "/news",
      category: "Company Update",
      date: "Coming Soon",
      deck:
        "Future platform updates will be published once approved for public release.",
      body: [],
      image: "/images/abstract-coastal-grid.svg",
      imageAlt: "Abstract coastal grid placeholder",
      isPlaceholder: true
    },
    {
      slug: "pipeline-updates",
      title: "Project pipeline updates coming soon",
      href: "/news",
      category: "Pipeline",
      date: "Coming Soon",
      deck: "Pipeline details available upon request.",
      body: [],
      image: "/images/map-florida-fort-myers.svg",
      imageAlt: "Abstract Florida map placeholder",
      isPlaceholder: true
    }
  ] satisfies NewsArticle[],
  teamPage: {
    hero: {
      eyebrow: "Team",
      title: "A focused team built for partnership-driven development.",
      description:
        "Lighthouse coordinates complex development work through senior attention and trusted public, private, and advisory relationships."
    },
    members: [
      {
        name: "Harley Sisler Jr",
        role: "Leadership",
        bio: "Bio forthcoming",
        isPlaceholder: true
      },
      {
        name: "Sean C. Smith",
        role: "Leadership",
        bio: "Bio forthcoming",
        isPlaceholder: true
      },
      {
        name: "Maxfield Branson",
        role: "Leadership",
        bio: "Bio forthcoming",
        isPlaceholder: true
      }
    ] satisfies TeamMember[],
    note: "Leadership bios and headshots to be updated with approved materials."
  },
  contactPage: {
    hero: {
      eyebrow: "Contact",
      title: "Start a conversation with Lighthouse Development Partners.",
      description:
        "Use the form to introduce a development opportunity, public-sector priority, capital inquiry, vendor question, media request, or general message."
    },
    inquiryTypes: [
      "Land opportunity",
      "Public-sector partnership",
      "Capital/investment inquiry",
      "Project/vendor inquiry",
      "Media",
      "General"
    ],
    emailTodo: "TODO: Confirm official Lighthouse contact email before launch."
  },
  investorPortalPage: {
    hero: {
      eyebrow: "Investor Portal",
      title: "Secure investor access.",
      description:
        "The Lighthouse Development Partners investor portal is being integrated into the new website experience."
    },
    message:
      "The Lighthouse Development Partners investor portal is being integrated into the new website experience. Existing investors should continue using their current portal credentials through the approved portal link.",
    securityNote: "For security, this website does not store investor credentials."
  },
  faqs: [
    {
      question: "Does this website replace the existing investor portal?",
      answer:
        "No. The investor portal page is a transition page. Existing investors should continue using the approved portal link and current credentials."
    },
    {
      question: "Can project pipeline details be shared publicly?",
      answer:
        "Pipeline details available upon request. Public project names, metrics, and partner references should be confirmed internally before publication.",
      isPlaceholder: true
    },
    {
      question: "Can partner logos be displayed?",
      answer:
        "Partner logos should only be added after Lighthouse confirms approved files and usage rights.",
      isPlaceholder: true
    }
  ] satisfies FAQ[],
  legalPages: {
    privacy: {
      title: "Privacy Policy",
      description:
        "A placeholder privacy policy for Lighthouse Development Partners' public website.",
      updated: "April 2026",
      isPlaceholder: true,
      sections: [
        {
          title: "Overview",
          body: [
            "This placeholder privacy policy describes the type of information that may be provided through this static website. It should be reviewed by counsel before launch."
          ]
        },
        {
          title: "Information You Provide",
          body: [
            "The contact form is designed to generate a mailto message and does not require a website backend. If you choose to contact Lighthouse by email, your message may include your name, organization, email address, phone number, inquiry type, and message content."
          ]
        },
        {
          title: "Analytics and Processors",
          body: [
            "This v1 website does not claim to use analytics, cookies, tracking pixels, or third-party processors. If those tools are added later, this policy should be updated before deployment."
          ]
        },
        {
          title: "Contact",
          body: [
            "Questions about this placeholder policy may be directed to the contact email listed on this website after Lighthouse confirms the official address."
          ]
        }
      ]
    },
    terms: {
      title: "Terms of Use",
      description:
        "Placeholder terms for use of the Lighthouse Development Partners website.",
      updated: "April 2026",
      isPlaceholder: true,
      sections: [
        {
          title: "Use of Website",
          body: [
            "This website is provided for general informational purposes. Content may be updated, corrected, or removed without notice."
          ]
        },
        {
          title: "No Investment Offering",
          body: [
            "This website is for informational purposes only and does not constitute an offer to sell or a solicitation to purchase securities, investment products, or advisory services."
          ]
        },
        {
          title: "No Professional Advice",
          body: [
            "The information on this website should not be relied on as legal, tax, accounting, investment, development, or other professional advice."
          ]
        },
        {
          title: "Project Information",
          body: [
            "Project descriptions, images, specifications, status language, and metrics may be preliminary and should be confirmed directly with Lighthouse Development Partners before reliance."
          ]
        }
      ]
    },
    accessibility: {
      title: "Accessibility Statement",
      description:
        "Placeholder accessibility statement for Lighthouse Development Partners.",
      updated: "April 2026",
      isPlaceholder: true,
      sections: [
        {
          title: "Commitment",
          body: [
            "Lighthouse Development Partners intends for its public website to be accessible and usable for a broad range of visitors."
          ]
        },
        {
          title: "Current Approach",
          body: [
            "This website is built with semantic HTML, keyboard-aware navigation, visible focus states, descriptive alternative text, and responsive layouts."
          ]
        },
        {
          title: "Feedback",
          body: [
            "If you experience difficulty accessing content on this website, please contact Lighthouse using the contact information listed on the site once the official contact email is confirmed."
          ]
        },
        {
          title: "Review Needed",
          body: [
            "This statement should be reviewed before public launch and updated with the final accessibility contact process."
          ]
        }
      ]
    }
  }
};

export const routes = [
  "/",
  "/about",
  "/projects",
  "/projects/reserve-at-eastwood",
  "/capabilities",
  "/impact",
  "/partnerships",
  "/news",
  "/news/reserve-at-eastwood-closing",
  "/team",
  "/contact",
  "/investor-portal",
  "/privacy",
  "/terms",
  "/accessibility"
];
