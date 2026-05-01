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
};

export type Value = {
  title: string;
  description: string;
  icon: IconName;
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
  locationDetail?: string;
  type: string;
  status: string;
  statusDetail?: string;
  summary: string;
  heroDescription?: string;
  narrativeTitle?: string;
  viewsTitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  mapImage?: string;
  mapAlt?: string;
  gallery: ProjectGalleryItem[];
  stats: Stat[];
  facts: Stat[];
  tags: string[];
  unitFeatures: string[];
  amenities: string[];
  residentServices?: string[];
  sustainability: string;
  ecosystem: string[];
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
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  summary: string;
  bio: string;
  credentials: string[];
};

export type LegalPage = {
  title: string;
  description: string;
  updated: string;
  sections: {
    title: string;
    body: string[];
  }[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export const site = {
  company: {
    name: "Lighthouse Development Partners",
    shortName: "LDP",
    type: "Real estate development platform",
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
    investorPortalUrl: "https://www.lighthousedevelopment.com/",
    logo: "/images/ldp-logo-stack-white.png",
    logoLight: "/images/ldp-logo-stack-white.png",
    mark: "/images/ldp-icon-only-brand-blue.png",
    markLight: "/images/ldp-icon-only-white.png",
    linkedInUrl: "",
    mission:
      "Lighthouse Development Partners develops affordable housing, hospitality, and mixed-use communities through strategic partnerships, disciplined execution, and a focus on durable neighborhood value.",
    positioning:
      "Development partnerships for affordable housing, hospitality, and mixed-use communities."
  },
  seo: {
    defaultTitleFormat: "%s | Lighthouse Development Partners",
    homeTitle:
      "Lighthouse Development Partners | Affordable Housing, Hospitality & Mixed-Use Development",
    homeDescription:
      "Lighthouse Development Partners develops affordable housing, hospitality, and mixed-use communities through strategic partnerships and disciplined execution.",
    ogImage: "/images/og-image.jpg"
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Team", href: "/team" },
    { label: "News", href: "/news" },
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
        { label: "Reserve at Franklin Park", href: "/projects/reserve-at-franklin-park" },
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
      title: "Purpose-built communities. Disciplined delivery.",
      description:
        "Lighthouse Development Partners develops affordable housing, hospitality, and mixed-use communities through aligned capital, public-sector coordination, and long-term execution discipline.",
      ctas: [
        { label: "View Our Work", href: "/projects" },
        { label: "Partner With Us", href: "/partnerships" },
        { label: "Investor Portal", href: "/investor-portal" }
      ]
    },
    credibility: {
      eyebrow: "Development Platform",
      title: "A development partner for complex, high-impact projects.",
      body:
        "From affordable housing communities to hospitality and mixed-use developments, Lighthouse coordinates capital, public-sector priorities, design, construction, and long-term operating perspective so complex projects can move from concept to completion."
    },
    whatWeBuild: [
      {
        title: "Affordable Housing",
        description:
          "Income-restricted communities planned around resident needs, municipal priorities, and long-term affordability requirements.",
        icon: "home"
      },
      {
        title: "Hotels & Hospitality",
        description:
          "Hospitality projects shaped by location, market demand, operating logic, and delivery discipline.",
        icon: "building"
      },
      {
        title: "Mixed-Use / Master-Planned Communities",
        description:
          "Plans that coordinate residential, hospitality, civic, and neighborhood-serving uses in a clear development framework.",
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
          "Matching capital strategy to timing, affordability requirements, and execution risk.",
        icon: "chart"
      },
      {
        title: "Landowners",
        description:
          "Evaluating sites for feasibility, entitlement path, neighborhood fit, and development value.",
        icon: "map"
      },
      {
        title: "Builders & Designers",
        description:
          "Integrating design, cost, schedule, sustainability, and constructability from early planning through delivery.",
        icon: "factory"
      }
    ] satisfies PartnerCategory[],
    finalCta: {
      title: "Aligned early. Executed carefully.",
      description:
        "Connect with Lighthouse to discuss sites, public-sector priorities, capital questions, or project partnerships.",
      ctas: [
        { label: "Contact Us", href: "/contact" },
        { label: "Explore the Platform", href: "/about" }
      ]
    }
  },
  about: {
    hero: {
      eyebrow: "About Lighthouse",
      title: "A focused development platform for community-scale real estate.",
      description:
        "Lighthouse Development Partners is headquartered in St Petersburg and built around affordable housing, hospitality, and mixed-use development partnerships."
    },
    overview:
      "Lighthouse Development Partners works at the intersection of housing need, site strategy, public finance, private capital, and project delivery. The firm focuses on affordable housing, hotels, and mixed-use master-planned communities where disciplined execution can create lasting neighborhood value.",
    philosophy: [
      {
        title: "Partnership-first execution",
        description:
          "Projects move through aligned public, capital, design, construction, and community relationships.",
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
          "Maintain clear milestones, risk ownership, and follow-through from feasibility to delivery.",
        icon: "target"
      },
      {
        title: "Transparency",
        description:
          "Communicate clearly with partners and stakeholders around facts, decisions, and open items.",
        icon: "file"
      }
    ] satisfies Value[],
    operatingModel: {
      title: "Lean, senior-led, partnership-oriented.",
      body:
        "Lighthouse is built for direct senior attention, clear partner coordination, and disciplined follow-through. The platform stays focused on site strategy, public-sector alignment, capital coordination, delivery partners, and stewardship without overstating scale."
    },
    milestones: [
      {
        title: "Lighthouse platform established in St Petersburg",
        description:
          "The company operates from 360 Central Ave in St Petersburg, Florida, with a development platform focused on affordable housing, hospitality, and mixed-use communities."
      },
      {
        title: "Reserve at Eastwood financial closing completed",
        description:
          "A 288-unit affordable housing community in Fort Myers advanced from closing into construction."
      },
      {
        title: "Reserve at Franklin Park advanced through design",
        description:
          "Company materials describe a planned 96-unit affordable housing community in Fort Myers' Dunbar neighborhood."
      }
    ]
  },
  projectsPage: {
    hero: {
      eyebrow: "Projects",
      title: "Portfolio",
      description:
        "Current Lighthouse work is concentrated in Florida affordable housing, with hospitality and mixed-use opportunities managed through direct partner conversations."
    },
    filters: [
      "All",
      "Affordable Housing",
      "Under Construction",
      "Predevelopment",
      "Florida"
    ]
  },
  projects: [
    {
      slug: "reserve-at-eastwood",
      name: "Reserve at Eastwood",
      href: "/projects/reserve-at-eastwood",
      location: "Fort Myers, Florida",
      locationDetail: "Ortiz Avenue and Hanson Street",
      type: "Affordable Housing",
      status: "Under Construction",
      statusDetail: "Financial closing completed",
      summary:
        "A 288-home affordable community near Ortiz Avenue and Hanson Street in Fort Myers.",
      heroDescription:
        "A 288-home affordable community near Ortiz Avenue and Hanson Street, with family-sized apartments, resident amenities, and durable design for long-term neighborhood value.",
      narrativeTitle: "A well-located affordable community in Fort Myers.",
      viewsTitle: "Site, clubhouse, and resident amenities.",
      description:
        "Reserve at Eastwood is planned as a 288-home affordable multifamily community on a Fort Myers site positioned along the Ortiz Avenue corridor. The plan pairs seven three-story garden-style residential buildings with a clubhouse, family-sized apartments, everyday resident amenities, and durable finishes. Adjacent commercial uses and nearby transit, retail, employment, and recreation connections are expected to support a more complete neighborhood setting.",
      image: "/images/reserve-eastwood-hero.jpg",
      imageAlt:
        "Reserve at Eastwood exterior rendering in Fort Myers, Florida",
      mapImage: "/images/reserve-eastwood-location-map.jpg",
      mapAlt:
        "Map of Reserve at Eastwood showing nearby schools, grocery stores, pharmacy, and LeeTran service",
      gallery: [
        {
          title: "Entry and Clubhouse",
          image: "/images/reserve-eastwood-hero.jpg",
          alt: "Reserve at Eastwood entry and clubhouse rendering"
        },
        {
          title: "Resident Amenities",
          image: "/images/reserve-eastwood-amenities.jpg",
          alt: "Reserve at Eastwood pickleball court, playground, dog park, and apartment buildings"
        },
        {
          title: "Pool and Clubhouse",
          image: "/images/reserve-eastwood-pool.jpg",
          alt: "Reserve at Eastwood pool and clubhouse rendering"
        },
        {
          title: "Site Aerial",
          image: "/images/reserve-eastwood-site-aerial.jpg",
          alt: "Reserve at Eastwood aerial rendering showing buildings, parking, pond, and amenities"
        },
        {
          title: "Aerial Overview",
          image: "/images/reserve-eastwood-aerial.jpg",
          alt: "Reserve at Eastwood aerial overview rendering showing the full development context"
        }
      ],
      stats: [
        { value: "288", label: "Affordable housing units" },
        { value: "30%, 50%, 60%, 70%", label: "AMI bands" },
        { value: "60 / 102 / 84 / 42", label: "1BR / 2BR / 3BR / 4BR" },
        { value: "EnergyStar / NGBS", label: "Design specifications" }
      ],
      facts: [
        { value: "288", label: "Affordable housing units" },
        { value: "30%, 50%, 60%, 70%", label: "AMI bands" },
        {
          value: "60 1BR / 102 2BR / 84 3BR / 42 4BR",
          label: "Apartment mix",
          description: "One-, two-, three-, and four-bedroom homes"
        },
        {
          value: "5100 Eastwood Dr, Fort Myers, FL 33905",
          label: "Location",
          description: "(South East Corner, Ortiz Ave and Hanson St)"
        },
        { value: "EnergyStar / NGBS", label: "Specifications" },
        { value: "Under Construction", label: "Status", description: "Financial closing completed" }
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
      slug: "reserve-at-franklin-park",
      name: "Reserve at Franklin Park",
      href: "/projects/reserve-at-franklin-park",
      location: "Fort Myers, Florida",
      locationDetail: "Franklin Park Drive / Dunbar neighborhood",
      type: "Affordable Housing",
      status: "Predevelopment",
      statusDetail: "Financial closing targeted for Q2 2026",
      summary:
        "A 96-unit affordable housing community planned for Fort Myers' Dunbar neighborhood.",
      heroDescription:
        "A 96-home affordable community planned for the Dunbar neighborhood, with family-sized apartments, resident amenities, and a program oriented around household stability.",
      narrativeTitle: "Family-sized affordable housing in the Dunbar neighborhood.",
      viewsTitle: "Entry, clubhouse, and residential courtyards.",
      description:
        "Reserve at Franklin Park is planned as a 96-home affordable housing community in the Dunbar neighborhood of Fort Myers. Company materials describe a family-oriented development with two-, three-, and four-bedroom homes, a detached clubhouse, resident amenities, and income-restricted units serving households at or below 70% AMI. The plan replaces a long-standing blighted use with new housing and coordinated resident support services.",
      image: "/images/reserve-franklin-park-01.jpg",
      imageAlt:
        "Reserve at Franklin Park street-level rendering in Fort Myers, Florida",
      mapImage: "/images/reserve-franklin-park-location-map.jpg",
      mapAlt:
        "Map of Reserve at Franklin Park showing nearby schools, grocery, pharmacy, and LeeTran access",
      gallery: [
        {
          title: "Main Entry",
          image: "/images/reserve-franklin-park-01.jpg",
          alt: "Reserve at Franklin Park rendering showing the main entry and residential buildings"
        },
        {
          title: "Community Edge",
          image: "/images/reserve-franklin-park-02.jpg",
          alt: "Reserve at Franklin Park rendering showing community buildings and landscape edges"
        },
        {
          title: "Courtyard",
          image: "/images/reserve-franklin-park-03.jpg",
          alt: "Reserve at Franklin Park rendering showing residential courtyard and amenity space"
        },
        {
          title: "Clubhouse",
          image: "/images/reserve-franklin-park-04.jpg",
          alt: "Reserve at Franklin Park rendering showing clubhouse and amenity area"
        },
        {
          title: "Arrival",
          image: "/images/reserve-franklin-park-05.jpg",
          alt: "Reserve at Franklin Park rendering showing pedestrian arrival and building frontage"
        }
      ],
      stats: [
        { value: "96", label: "Affordable housing units" },
        { value: "30%, 60%, 70%", label: "AMI bands" },
        { value: "2-4 BR", label: "Apartment mix" },
        { value: "NGBS", label: "Design specification" }
      ],
      facts: [
        { value: "96", label: "Affordable housing units" },
        { value: "30%, 60%, 70%", label: "AMI bands" },
        { value: "48 two-bedroom / 36 three-bedroom / 12 four-bedroom", label: "Unit mix" },
        {
          value: "Franklin Park Dr, Fort Myers, FL 33916",
          label: "Location",
          description: "Dunbar neighborhood"
        },
        { value: "NGBS", label: "Specification" },
        { value: "Predevelopment", label: "Status", description: "Financial closing targeted for Q2 2026" }
      ],
      tags: ["Affordable Housing", "Predevelopment", "Florida"],
      unitFeatures: [
        "Granite countertops",
        "Modern wood cabinetry",
        "Luxury vinyl plank flooring",
        "Recessed LED lighting",
        "Ceiling fans",
        "Energy Star full-size appliances",
        "In-unit washer/dryers"
      ],
      amenities: [
        "Detached clubhouse",
        "On-site management and maintenance offices",
        "Clubroom",
        "Business center",
        "Fitness center",
        "Secure parcel lockers",
        "Basketball court",
        "Playground and separate tot-lot",
        "Covered patio with grilling"
      ],
      residentServices: [
        "Employment assistance",
        "Financial literacy",
        "Health and wellness programming",
        "Coordination with local partners"
      ],
      sustainability:
        "Reserve at Franklin Park is planned to National Green Building Standard / NGBS specifications. Certification status and final performance data should be confirmed upon project completion.",
      ecosystem: [
        "Public-sector coordination",
        "Housing finance",
        "Design and permitting",
        "Construction planning",
        "Resident services coordination",
        "Community stakeholders"
      ]
    }
  ] satisfies Project[],
  capabilitiesPage: {
    hero: {
      eyebrow: "Capabilities",
      title: "Capabilities",
      description:
        "Lighthouse coordinates site strategy, public-sector alignment, capital planning, design, construction, and stewardship."
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
          "Hospitality development from site positioning through delivery partner alignment.",
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
          "Attention to affordability requirements, operations, and asset performance.",
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
          "Maintain attention to affordability, operating standards, and performance."
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
      title: "Affordable housing as community infrastructure.",
      description:
        "Lighthouse evaluates affordable housing by its practical effects: homes delivered, income bands served, resident experience, sustainable standards, and neighborhood fit."
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
      { value: "384", label: "Affordable homes across active project work" },
      { value: "30%-70%", label: "AMI bands served" },
      { value: "1- to 4-bedroom", label: "Homes across the portfolio" },
      { value: "EnergyStar / NGBS", label: "Specifications" }
    ] satisfies Stat[]
  },
  partnershipsPage: {
    hero: {
      eyebrow: "Partnerships",
      title: "Partnerships",
      description:
        "Lighthouse works with public, private, capital, design, construction, and community partners to move development opportunities from concept to delivery."
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
          "Capital planning and execution clarity for real estate development opportunities.",
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
      title: "News and Insights",
      description:
        "Public project milestones and practical development commentary from Lighthouse Development Partners."
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
        "The Fort Myers affordable housing community will deliver 288 homes for households across multiple income bands.",
      body: [
        "Lighthouse Development Partners has announced the closing of Reserve at Eastwood, a 288-unit affordable multifamily community in Fort Myers, Florida.",
        "The community is planned near Ortiz Avenue and Hanson Street and will serve households across 30%, 50%, 60%, and 70% AMI bands, with one-, two-, three-, and four-bedroom apartment homes designed for a range of household sizes.",
        "Resident-focused features are planned to include balconies, stainless steel appliances, granite countertops, and luxury vinyl plank floors. Community amenities are expected to include a 6,800-square-foot clubhouse, on-site management and maintenance staff, business and co-working stations, a fitness center, a community and media room, a pool and grill area, a pickleball court, a dog park, and a playground.",
        "Reserve at Eastwood is designed to EnergyStar and National Green Building Standards / NGBS specifications. Certification status and final performance data will be confirmed upon completion.",
        "The closing milestone moves the project into construction and reflects Lighthouse's focus on partnership, delivery discipline, and practical affordable housing."
      ],
      image: "/images/reserve-eastwood-hero.jpg",
      imageAlt: "Reserve at Eastwood exterior rendering"
    },
    {
      slug: "site-control-to-construction-affordable-housing-closing",
      title: "From Site Control to Construction: The Work Behind an Affordable Housing Closing",
      href: "/news/site-control-to-construction-affordable-housing-closing",
      category: "Insight",
      date: "March 2026",
      deck:
        "A successful closing depends on years of coordinated work across land, approvals, capital, design, construction, and compliance.",
      body: [
        "The public milestone is usually the closing. The work begins much earlier.",
        "Affordable housing development requires site control, entitlement strategy, environmental review, utility coordination, construction pricing, capital commitments, legal documentation, and compliance planning to move in the same direction.",
        "Each workstream affects the others. A design change can affect cost. A financing condition can affect timing. A municipal requirement can affect site planning. Development execution is the discipline of keeping those dependencies visible and resolved.",
        "When a project moves from closing into construction, the milestone reflects more than financing. It reflects a coordinated development plan that is ready to become a real community."
      ],
      image: "/images/news-development-process.svg",
      imageAlt: "Editorial graphic showing development milestones"
    },
    {
      slug: "reserve-at-franklin-park-affordable-housing-fort-myers",
      title: "Reserve at Franklin Park Advances as a Planned Affordable Housing Community in Fort Myers",
      href: "/news/reserve-at-franklin-park-affordable-housing-fort-myers",
      category: "Project Update",
      date: "February 2026",
      deck:
        "The planned 96-unit community reflects Lighthouse's focus on family-sized affordable housing, neighborhood reinvestment, and disciplined predevelopment work.",
      body: [
        "Reserve at Franklin Park is planned as a 96-unit affordable housing community in Fort Myers' Dunbar neighborhood. Company materials describe a family-oriented program with two-, three-, and four-bedroom homes.",
        "The project is designed around practical resident needs: a detached clubhouse, on-site management and maintenance offices, a clubroom, a business center, a fitness center, secure parcel lockers, outdoor recreation, and covered gathering space.",
        "For Lighthouse, Franklin Park represents the kind of development work that depends on site control, public-sector alignment, financing discipline, design coordination, and a clear understanding of local housing needs.",
        "Final project status language, construction timing, certification status, and operating details should be confirmed as the development advances."
      ],
      image: "/images/reserve-franklin-park-01.jpg",
      imageAlt: "Reserve at Franklin Park rendering"
    },
    {
      slug: "affordable-housing-development-florida-public-private-partnerships",
      title: "Why Public-Private Partnerships Matter in Florida Affordable Housing Development",
      href: "/news/affordable-housing-development-florida-public-private-partnerships",
      category: "Insight",
      date: "December 2025",
      deck:
        "Affordable housing projects succeed when public priorities, private execution, capital sources, and community expectations are aligned early.",
      body: [
        "Affordable housing development is not a single-party effort. It requires municipalities, housing finance agencies, lenders, equity partners, contractors, designers, legal counsel, and community stakeholders to solve different parts of the same problem.",
        "The strongest public-private partnerships begin before a project is fully formed. Site feasibility, infrastructure, zoning, affordability requirements, financing timing, and resident experience all need to be evaluated together.",
        "In Florida, where population growth and housing cost pressures remain significant, partnership discipline can determine whether a viable site becomes a delivered community or stalls in predevelopment.",
        "Lighthouse's role is to coordinate that work with clear milestones, defensible project information, and a practical path from concept to closing."
      ],
      image: "/images/news-public-private.svg",
      imageAlt: "Editorial graphic showing public and private partners connected around a development parcel"
    },
    {
      slug: "how-ami-works-in-affordable-housing-development",
      title: "How AMI Works in Affordable Housing Development",
      href: "/news/how-ami-works-in-affordable-housing-development",
      category: "Guide",
      date: "October 2025",
      deck:
        "Area Median Income is one of the core measures used to determine who affordable housing serves and how rents are structured.",
      body: [
        "Area Median Income, often shortened to AMI, is a benchmark used in affordable housing programs to define income eligibility and rent restrictions. It helps translate local income conditions into program requirements.",
        "A community may serve households at several AMI levels, depending on its financing sources, regulatory agreements, and local housing goals. Those bands affect unit set-asides, compliance obligations, and long-term operating requirements.",
        "AMI is not a marketing label. It is a technical tool that shapes resident eligibility, underwriting, rent levels, and reporting. Developers need to treat AMI structure as a central part of project planning from the beginning.",
        "For residents and public stakeholders, clear AMI communication helps explain who a community is intended to serve and why affordability restrictions matter over time."
      ],
      image: "/images/news-ami-guide.svg",
      imageAlt: "Editorial graphic showing income bands and planning lines"
    },
    {
      slug: "lihtc-capital-stack-affordable-housing",
      title: "The LIHTC Capital Stack: Why Affordable Housing Finance Requires Precision",
      href: "/news/lihtc-capital-stack-affordable-housing",
      category: "Insight",
      date: "August 2025",
      deck:
        "Low-Income Housing Tax Credit projects require careful coordination among equity, debt, public sources, timing, documentation, and compliance.",
      body: [
        "Affordable housing finance is layered by design. A project may involve tax credit equity, tax-exempt bonds, subordinate public funds, conventional or agency debt, local incentives, and deferred developer economics.",
        "Each source has its own requirements, deadlines, approvals, and risk allocation. The work is not only to secure capital, but to make sure the sources can close together and support the same development program.",
        "Precision matters because small timing gaps can become major execution issues. A clear capital strategy helps agencies, lenders, investors, and construction partners understand what must happen next.",
        "For Lighthouse, capital stack coordination is part of development execution, not a separate finance exercise."
      ],
      image: "/images/news-capital-stack.svg",
      imageAlt: "Editorial graphic showing layered capital stack blocks"
    },
    {
      slug: "what-makes-affordable-housing-site-work",
      title: "What Makes an Affordable Housing Site Work",
      href: "/news/what-makes-affordable-housing-site-work",
      category: "Guide",
      date: "May 2025",
      deck:
        "Location matters, but feasibility depends on access, infrastructure, approvals, neighborhood context, and the financing path.",
      body: [
        "A strong affordable housing site is not defined by acreage alone. It must be evaluated through zoning, access, utilities, environmental conditions, stormwater, parking, building configuration, and the public approvals required to proceed.",
        "The surrounding context matters as well. Schools, grocery access, pharmacies, transportation, employment centers, parks, and civic services all influence whether a location can support daily resident life.",
        "Feasibility also has a capital side. A site that works physically may still require the right affordability structure, construction budget, public-sector alignment, and financing timing.",
        "The best early site reviews are practical. They identify what can be built, what must be solved, and whether the site has a credible path to closing."
      ],
      image: "/images/news-site-selection.svg",
      imageAlt: "Editorial graphic showing a parcel map and location marker"
    },
    {
      slug: "ngbs-energy-star-affordable-housing",
      title: "EnergyStar, NGBS, and Practical Sustainability in Affordable Housing",
      href: "/news/ngbs-energy-star-affordable-housing",
      category: "Insight",
      date: "March 2025",
      deck:
        "Sustainability in affordable housing is most useful when it improves durability, operating performance, and resident comfort.",
      body: [
        "Green building standards are most meaningful when they connect design decisions to long-term performance. In affordable housing, practical sustainability can support resident comfort, utility efficiency, durability, and asset stewardship.",
        "EnergyStar and National Green Building Standard criteria can influence envelope design, appliances, mechanical systems, materials, water usage, documentation, and construction coordination.",
        "The key is to avoid treating sustainability as a slogan. Standards must be integrated into design, budget, schedule, construction quality control, and final certification work.",
        "Certification status and performance data should be confirmed after completion, but the planning work begins much earlier."
      ],
      image: "/images/news-sustainability-performance.svg",
      imageAlt: "Editorial graphic showing building performance and envelope design"
    },
    {
      slug: "family-sized-affordable-housing-fort-myers",
      title: "Family-Sized Affordable Housing and the Need for Larger Apartment Homes",
      href: "/news/family-sized-affordable-housing-fort-myers",
      category: "Insight",
      date: "January 2025",
      deck:
        "Two-, three-, and four-bedroom affordable homes are an important part of housing supply for working families and larger households.",
      body: [
        "Affordable housing conversations often focus on total unit count, but bedroom mix is just as important. Larger households need homes that fit daily life, school routines, work schedules, and family support systems.",
        "Projects with two-, three-, and four-bedroom apartments can support family stability when paired with durable finishes, resident amenities, and access to employment, education, and services.",
        "The development challenge is that larger units carry different cost, design, parking, amenity, and operating considerations. They require careful planning rather than generic unit layouts.",
        "Reserve at Eastwood and Reserve at Franklin Park both include larger apartment homes in their planned unit mix."
      ],
      image: "/images/news-neighborhood-investment.svg",
      imageAlt: "Editorial graphic showing housing blocks and neighborhood circulation"
    },
    {
      slug: "resident-amenities-affordable-housing",
      title: "Resident Amenities in Affordable Housing Should Be Useful, Durable, and Easy to Operate",
      href: "/news/resident-amenities-affordable-housing",
      category: "Insight",
      date: "November 2024",
      deck:
        "Amenities should support everyday life and long-term operations, not simply fill a checklist.",
      body: [
        "In affordable housing, amenities need to work hard. Clubhouses, fitness areas, co-working stations, playgrounds, parcel lockers, outdoor gathering areas, and on-site management spaces all affect resident experience and operating performance.",
        "Good amenity planning begins with the households a community is intended to serve. Families, seniors, working residents, and residents with changing schedules may need different types of support from the same property.",
        "Durability matters as much as design. Amenities should be maintainable, visible, accessible, and integrated into management and security planning.",
        "The result is not excess. It is a more complete community that can support resident life over the long term."
      ],
      image: "/images/news-resident-amenities.svg",
      imageAlt: "Editorial graphic showing clubhouse, recreation, and amenity spaces"
    },
    {
      slug: "landowner-partnership-affordable-housing",
      title: "What Landowners Should Know Before Partnering on an Affordable Housing Site",
      href: "/news/landowner-partnership-affordable-housing",
      category: "Partnerships",
      date: "September 2024",
      deck:
        "A strong site can become more valuable when zoning, infrastructure, public priorities, and financing realities are evaluated together.",
      body: [
        "Landowners often see a parcel before they see a project. Affordable housing development starts by testing whether a site can support the right unit count, access, utilities, stormwater, parking, approvals, and community context.",
        "The best early conversations are specific. Location, title, environmental conditions, entitlement path, infrastructure capacity, and timing can materially affect whether a site is viable.",
        "A developer's job is to translate that site information into a realistic development path. That includes understanding public-sector priorities, capital sources, resident needs, and construction feasibility.",
        "When those pieces align, a landowner partnership can move from idea to execution with fewer surprises."
      ],
      image: "/images/news-site-selection.svg",
      imageAlt: "Editorial graphic showing site selection and parcel planning"
    },
    {
      slug: "mixed-use-master-planned-communities-long-term-value",
      title: "Mixed-Use and Master-Planned Communities Require More Than a Site Plan",
      href: "/news/mixed-use-master-planned-communities-long-term-value",
      category: "Insight",
      date: "July 2024",
      deck:
        "Long-term value comes from coordinating uses, infrastructure, phasing, capital, and public priorities into a coherent development framework.",
      body: [
        "A mixed-use or master-planned community is not simply a collection of buildings. It is a framework for how housing, hospitality, neighborhood-serving uses, infrastructure, open space, and mobility fit together over time.",
        "Successful planning depends on phasing. Early decisions about access, utilities, parcelization, vertical uses, and public improvements can shape what is possible years later.",
        "Capital strategy also matters. Different uses may require different lenders, investors, operators, timelines, and risk tolerances. Development teams need a plan that can coordinate those realities without losing the larger purpose.",
        "For Lighthouse, mixed-use work begins with disciplined site thinking: what belongs where, what can be delivered, and how the result strengthens the surrounding neighborhood."
      ],
      image: "/images/news-master-planning.svg",
      imageAlt: "Editorial graphic showing an abstract master plan"
    },
    {
      slug: "fort-myers-affordable-housing-neighborhood-investment",
      title: "Affordable Housing as Neighborhood Investment in Fort Myers",
      href: "/news/fort-myers-affordable-housing-neighborhood-investment",
      category: "Insight",
      date: "May 2024",
      deck:
        "Well-planned affordable housing can contribute to neighborhood stability, housing access, and long-term civic value.",
      body: [
        "Affordable housing is most effective when it is planned as part of a neighborhood, not apart from it. Site context, street frontage, resident amenities, building durability, and public-sector priorities all influence the community result.",
        "In Fort Myers, Lighthouse's active affordable housing work includes Reserve at Eastwood and the planned Reserve at Franklin Park. Together, those communities represent 384 affordable homes in current project work.",
        "The impact is practical: more housing options, a broader range of apartment sizes, on-site management, amenities that support daily life, and development activity tied to long-term affordability requirements.",
        "As projects advance, final status, delivery timing, and performance information should be confirmed through approved public materials and project-specific updates."
      ],
      image: "/images/news-neighborhood-investment.svg",
      imageAlt: "Editorial graphic showing neighborhood-scale housing investment"
    }
  ] satisfies NewsArticle[],
  teamPage: {
    hero: {
      eyebrow: "Leadership",
      title: "Leadership for disciplined real estate execution.",
      description:
        "The Lighthouse team brings together development, housing finance, capital markets, construction coordination, and operating systems experience to advance complex projects from feasibility through delivery."
    },
    members: [
      {
        name: "Harley Sisler Jr",
        role: "Managing Partner, Co-Founder",
        image: "/images/team-harley-sisler-headshot.jpg",
        imageAlt: "Harley Sisler Jr portrait",
        summary:
          "Real estate developer and capital markets professional with experience across multifamily, hospitality, student housing, and mixed-use development.",
        bio:
          "Harley Sisler Jr. is a third-generation real estate developer, general contractor, and entrepreneur with more than 15 years of experience across real estate development, investment advisory, private equity, and capital markets. Company materials describe his leadership across ground-up multifamily, hospitality, student housing, and mixed-use projects, including prior work with Energy Real Estate Solutions Capital, Third Wave Development, RUliving, and Morgan Stanley.",
        credentials: [
          "Experience across multifamily, hospitality, student housing, and mixed-use assets",
          "Background in development, private equity, investment advisory, and capital markets",
          "B.S. in Business, Global Trade & Commerce, Wake Forest University"
        ]
      },
      {
        name: "Sean C. Smith",
        role: "Managing Partner, Co-Founder",
        image: "/images/team-sean-smith-headshot.jpg",
        imageAlt: "Sean C. Smith portrait",
        summary:
          "Affordable and workforce housing developer with a background in finance, underwriting, appraisal, and market feasibility.",
        bio:
          "Sean C. Smith is a co-founder and Managing Partner of Lighthouse Development Partners. Company materials describe his focus on workforce and affordable housing, including more than ten years in multifamily and commercial real estate across valuation, financing, underwriting, and development. Before co-founding Lighthouse, Sean worked in affordable housing development and finance, including acquisition, financing, LIHTC execution, public funding sources, underwriting, appraisal, and market feasibility.",
        credentials: [
          "Affordable and workforce housing development experience across Florida and the Southeast",
          "Background in LIHTC, public funding sources, underwriting, appraisal, and market studies",
          "U.S. Army veteran; B.S. in Finance, University of South Florida"
        ]
      },
      {
        name: "Maxfield Branson",
        role: "Development Operations & Technology",
        image: "/images/team-maxfield-branson-headshot.jpg",
        imageAlt: "Maxfield Branson portrait",
        summary:
          "Development operations and systems lead supporting project execution, workflow, and organizational technology.",
        bio:
          "Maxfield Branson supports day-to-day development operations and organizational technology at Lighthouse. Company materials describe his background across brokerage, asset management, development, and technology, including multifamily leasing, portfolio operations, workflow systems, and execution support for active development work.",
        credentials: [
          "Experience across brokerage, asset management, and development",
          "Multifamily leasing and portfolio operations background",
          "Workflow and technology systems integrated into the LDP platform"
        ]
      }
    ] satisfies TeamMember[]
  },
  contactPage: {
    hero: {
      eyebrow: "Contact",
      title: "Contact Lighthouse",
      description:
        "Introduce a site, public-sector priority, capital inquiry, vendor question, media request, or general message."
    },
    inquiryTypes: [
      "Land opportunity",
      "Public-sector partnership",
      "Capital/investment inquiry",
      "Project/vendor inquiry",
      "Media",
      "General"
    ],
    emailTodo: "Confirm official Lighthouse contact email before launch."
  },
  investorPortalPage: {
    hero: {
      eyebrow: "Investor Portal",
      title: "Secure investor access.",
      description:
        "Investor access is being integrated into the new Lighthouse website."
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
        "Pipeline details are handled through direct conversations until a project name, location, scope, and partner reference are approved for public release."
    },
    {
      question: "Can partner logos be displayed?",
      answer:
        "Partner logos are not displayed unless Lighthouse has approved files and usage rights."
    }
  ] satisfies FAQ[],
  legalPages: {
    privacy: {
      title: "Privacy Policy",
      description:
        "Privacy notice for Lighthouse Development Partners' public website.",
      updated: "April 2026",
      sections: [
        {
          title: "Overview",
          body: [
            "This privacy notice describes the type of information that may be provided through this static website."
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
            "Questions about this policy may be directed to the contact email listed on this website."
          ]
        }
      ]
    },
    terms: {
      title: "Terms of Use",
      description:
        "Terms for use of the Lighthouse Development Partners website.",
      updated: "April 2026",
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
        "Accessibility statement for Lighthouse Development Partners.",
      updated: "April 2026",
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
            "If you experience difficulty accessing content on this website, please contact Lighthouse using the contact information listed on the site."
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
  "/projects/reserve-at-franklin-park",
  "/capabilities",
  "/impact",
  "/partnerships",
  "/news",
  ...site.news.map((article) => article.href),
  "/team",
  "/contact",
  "/investor-portal",
  "/privacy",
  "/terms",
  "/accessibility"
];
