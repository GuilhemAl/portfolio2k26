export type LocalizedString = {
  fr: string;
  en: string;
};

export type LocalizedList = {
  fr: string[];
  en: string[];
};

export type Content = {
  identity: {
    displayName: LocalizedString;
    roleHeadline: LocalizedString;
    roleSubheadline: LocalizedString;
    goal: LocalizedString;
  };
  quickFacts: LocalizedList;
  ctas: {
    primary: LocalizedString;
    secondary: LocalizedString;
  };
  labels: {
    deepDive: LocalizedString;
  };
  navigation: {
    brand: LocalizedString;
    items: {
      home: LocalizedString;
      experience: LocalizedString;
      projects: LocalizedString;
      skills: LocalizedString;
      about: LocalizedString;
      contact: LocalizedString;
    };
  };
  experience: {
    company: LocalizedString;
    orgUnit: LocalizedString;
    product: LocalizedString;
    period: LocalizedString;
    scopeSummary: LocalizedString;
    roles: Array<{
      id: "backendDev" | "pmScrum";
      title: LocalizedString;
      period: LocalizedString;
      stack: string[];
      bullets: LocalizedList;
    }>;
  };
  initiatives: Array<{
    slug: string;
    title: LocalizedString;
    summary: LocalizedString;
    role: LocalizedString;
    stack: string[];
    bullets: LocalizedList;
    ctaLabel: LocalizedString;
  }>;
  skills: Array<{
    title: LocalizedString;
    bullets: LocalizedList;
    tags: string[];
  }>;
  about: {
    paragraph1: LocalizedString;
    paragraph2: LocalizedString;
  };
  contact: {
    title: LocalizedString;
    subtitle: LocalizedString;
    links: {
      linkedIn: string;
      github: string;
      email: string;
    };
    linkLabels: {
      linkedIn: LocalizedString;
      github: LocalizedString;
      email: LocalizedString;
    };
  };
};

export const content = {
  identity: {
    displayName: {
      fr: "Guilhem Albus",
      en: "Guilhem Albus",
    },
    roleHeadline: {
      fr: "Chef de projet IT & Data (ex-Backend Quarkus)",
      en: "IT & Data Project Manager (ex-Backend Quarkus)",
    },
    roleSubheadline: {
      fr: "Scrum Master sur GTR (GCA) - delivery agile, specs technico-fonctionnelles, integrations SI.",
      en: "Scrum Master on GTR (GCA) - agile delivery, techno-functional specs, SI integrations.",
    },
    goal: {
      fr: "Je vise une alternance alignee avec le Master specialise Chef de Projet IA (SKEMA).",
      en: "I'm targeting an apprenticeship aligned with SKEMA's AI Project Manager specialization.",
    },
  },
  quickFacts: {
    fr: ["GTR", "Agile Scrum", "Azure DevOps", "Quarkus"],
    en: ["GTR", "Agile Scrum", "Azure DevOps", "Quarkus"],
  },
  ctas: {
    primary: {
      fr: "Voir l'experience",
      en: "View experience",
    },
    secondary: {
      fr: "Me contacter",
      en: "Contact me",
    },
  },
  labels: {
    deepDive: {
      fr: "Creuser",
      en: "Dive in",
    },
  },
  navigation: {
    brand: {
      fr: "Portfolio",
      en: "Portfolio",
    },
    items: {
      home: {
        fr: "Home",
        en: "Home",
      },
      experience: {
        fr: "Experience",
        en: "Experience",
      },
      projects: {
        fr: "Projects",
        en: "Projects",
      },
      skills: {
        fr: "Skills",
        en: "Skills",
      },
      about: {
        fr: "About",
        en: "About",
      },
      contact: {
        fr: "Contact",
        en: "Contact",
      },
    },
  },
  experience: {
    company: {
      fr: "Groupe Charles Andre (GCA)",
      en: "Groupe Charles Andre (GCA)",
    },
    orgUnit: {
      fr: "IT Transport & Distribution",
      en: "IT Transport & Distribution",
    },
    product: {
      fr: "GTR (GCA Temps Reel)",
      en: "GTR (GCA Real-Time)",
    },
    period: {
      fr: "2023 - Aujourd'hui",
      en: "2023 - Present",
    },
    scopeSummary: {
      fr: "Produit de tracking logistique : diffusion d'ETA, positions GPS et statuts de commandes.",
      en: "Logistics tracking product: distribution of ETA, GPS positions, and order statuses.",
    },
    roles: [
      {
        id: "backendDev",
        title: {
          fr: "Developpeur back-end",
          en: "Back-end Developer",
        },
        period: {
          fr: "2021 - 2023",
          en: "2021 - 2023",
        },
        stack: ["Java", "Quarkus", "Docker", "Azure DevOps"],
        bullets: {
          fr: [
            "Developpement back-end sur un projet industriel tres technique (GTR).",
            "Contribution a des services Quarkus orientes flux et donnees.",
            "Debug et diagnostic (logs / donnees) dans un contexte production.",
            "Livraison d'un job d'export ETA/GPS/STATUT (XML) pour diffusion via EAI.",
            "Montee en autonomie sur une base de code existante et des contraintes metier fortes.",
          ],
          en: [
            "Back-end development on a highly technical industrial product (GTR).",
            "Contribution to Quarkus services focused on data and operational flows.",
            "Debugging and diagnosis (logs/data) in a production context.",
            "Delivered an ETA/GPS/STATUS export job (XML) consumed by EAI for distribution.",
            "Gained autonomy on an existing codebase with strong business constraints.",
          ],
        },
      },
      {
        id: "pmScrum",
        title: {
          fr: "Chef de projet / Scrum Master",
          en: "Project Manager / Scrum Master",
        },
        period: {
          fr: "2023 - Aujourd'hui",
          en: "2023 - Present",
        },
        stack: ["Agile Scrum", "Scrum Master", "Azure DevOps"],
        bullets: {
          fr: [
            "Animation Scrum : rituels, facilitation, amelioration continue.",
            "Pilotage du backlog dans Azure DevOps (priorisation, suivi, transparence).",
            "Redaction de specifications technico-fonctionnelles (API / integrations).",
            "Planification de roadmaps, objectifs de livraison, suivi et COPIL.",
            "Production de reporting via Report Builder pour suivre/monitorer le projet.",
            "Accompagnement de la transition d'un cycle en V vers un mode Agile pour ameliorer productivite et qualite.",
          ],
          en: [
            "Scrum facilitation: ceremonies, team enablement, continuous improvement.",
            "Backlog management in Azure DevOps (prioritization, tracking, transparency).",
            "Writing techno-functional specifications (APIs / integrations).",
            "Roadmap planning, delivery targets, project tracking, and steering committees.",
            "Reporting via Report Builder to monitor the project.",
            "Supported the transition from waterfall to Agile to improve productivity and foster continuous improvement.",
          ],
        },
      },
    ],
  },
  initiatives: [
    {
      slug: "waterfall-to-agile",
      title: {
        fr: "Transformation Cycle en V -> Agile Scrum",
        en: "Waterfall -> Agile Scrum Transformation",
      },
      summary: {
        fr: "Passage d'un delivery irregulier a un cadre Agile oriente productivite et amelioration continue.",
        en: "Moving from irregular delivery to an Agile framework focused on productivity and continuous improvement.",
      },
      role: {
        fr: "Scrum Master",
        en: "Scrum Master",
      },
      stack: ["Scrum", "Azure DevOps"],
      bullets: {
        fr: [
          "Mise en place et animation des rituels Scrum.",
          "Structuration du backlog dans Azure DevOps pour clarifier les priorites.",
          "Cadence d'amelioration continue basee sur les retours d'equipe.",
          "Visibilite de la delivery avec suivi des engagements et avancement.",
          "Culture du feedback pour ajuster le cadre et les pratiques.",
        ],
        en: [
          "Set up and ran Scrum ceremonies.",
          "Structured the Azure DevOps backlog to clarify priorities.",
          "Continuous improvement cadence based on team feedback.",
          "Delivery visibility through commitment and progress tracking.",
          "Feedback culture to refine the framework and practices.",
        ],
      },
      ctaLabel: {
        fr: "Creuser",
        en: "Dive in",
      },
    },
    {
      slug: "techno-functional-specs",
      title: {
        fr: "Specifications technico-fonctionnelles (API / integrations)",
        en: "Techno-functional specifications (APIs / integrations)",
      },
      summary: {
        fr: "Traduction des besoins fonctionnels en contrats d'API et regles d'integration exploitables.",
        en: "Turning functional needs into actionable API contracts and integration rules.",
      },
      role: {
        fr: "Cadrage / Specification",
        en: "Scoping / Specifications",
      },
      stack: ["Azure DevOps", "SQL"],
      bullets: {
        fr: [
          "Formalisation des besoins en specifications exploitables pour l'equipe.",
          "Exemple d'API ETA entre GTR et AdTMS parmi d'autres integrations.",
          "Verification de donnees via 2 requetes SQL sur Postgres.",
          "Clarification des regles d'integration et des contrats d'echange.",
        ],
        en: [
          "Structured functional needs into specs the team can execute.",
          "Example: ETA API between GTR and AdTMS among other integrations.",
          "Data validation via 2 SQL queries on Postgres.",
          "Clarified integration rules and exchange contracts.",
        ],
      },
      ctaLabel: {
        fr: "Creuser",
        en: "Dive in",
      },
    },
    {
      slug: "eta-gps-status-export-xml",
      title: {
        fr: "Export ETA / GPS / Statuts -> XML (EAI)",
        en: "ETA / GPS / Status export -> XML (EAI)",
      },
      summary: {
        fr: "Job backend generant un XML au format attendu et deposant les fichiers pour diffusion via EAI.",
        en: "Back-end job generating XML in a required format and dropping files for EAI-based distribution.",
      },
      role: {
        fr: "Dev back-end",
        en: "Back-end Developer",
      },
      stack: ["Quarkus", "Docker"],
      bullets: {
        fr: [
          "Generation du XML conforme au format attendu.",
          "Depot des fichiers dans le dossier de diffusion.",
          "Consommation des fichiers par l'EAI pour partager les donnees.",
          "Fiabilite et tracabilite des exports au quotidien.",
        ],
        en: [
          "Generated XML matching the required format.",
          "Dropped files into the distribution folder.",
          "Files consumed by EAI to share the data.",
          "Reliability and traceability for day-to-day exports.",
        ],
      },
      ctaLabel: {
        fr: "Creuser",
        en: "Dive in",
      },
    },
  ],
  skills: [
    {
      title: {
        fr: "Back-end",
        en: "Back-end",
      },
      bullets: {
        fr: [
          "Services Quarkus/Java orientes flux logistiques.",
          "Jobs d'export XML (ETA/GPS/Statut).",
          "Debug production : logs, donnees, diagnostics.",
        ],
        en: [
          "Quarkus/Java services for logistics flows.",
          "XML export jobs (ETA/GPS/Status).",
          "Production debugging: logs, data, diagnostics.",
        ],
      },
      tags: ["Quarkus", "Java", "XML", "Debug"],
    },
    {
      title: {
        fr: "Agile & Scrum",
        en: "Agile & Scrum",
      },
      bullets: {
        fr: [
          "Scrum Master : rituels, facilitation.",
          "Gestion du backlog et priorisation.",
          "Amelioration continue et feedback.",
        ],
        en: [
          "Scrum Master: ceremonies and facilitation.",
          "Backlog management and prioritization.",
          "Continuous improvement and feedback.",
        ],
      },
      tags: ["Scrum", "Scrum Master", "Agile"],
    },
    {
      title: {
        fr: "Outillage",
        en: "Tooling",
      },
      bullets: {
        fr: [
          "Azure DevOps Boards pour pilotage.",
          "Docker pour services et environnements.",
          "Suivi de delivery dans Azure DevOps.",
        ],
        en: [
          "Azure DevOps Boards for delivery tracking.",
          "Docker for services and environments.",
          "Delivery monitoring in Azure DevOps.",
        ],
      },
      tags: ["Azure DevOps", "Docker", "Boards"],
    },
    {
      title: {
        fr: "Reporting & Data",
        en: "Reporting & Data",
      },
      bullets: {
        fr: [
          "Report Builder pour reporting/monitoring.",
          "SQL pour extraction et analyse.",
          "Bases Oracle/Postgres.",
        ],
        en: [
          "Report Builder for reporting/monitoring.",
          "SQL for extraction and analysis.",
          "Oracle/Postgres databases.",
        ],
      },
      tags: ["Report Builder", "SQL", "Postgres", "Oracle"],
    },
  ],
  about: {
    paragraph1: {
      fr: "Bachelor Dev Web MDS 2021-2024 en alternance sur GTR, un socle technique solide.",
      en: "Bachelor in Web Development (MDS) 2021-2024 in apprenticeship on GTR, building a strong technical foundation.",
    },
    paragraph2: {
      fr: "Evolution vers Chef de projet / Scrum Master avec un objectif d'alternance au Master specialise IA de SKEMA.",
      en: "Transitioning to Project Manager / Scrum Master with an apprenticeship goal aligned with SKEMA's AI specialization.",
    },
  },
  contact: {
    title: {
      fr: "Contact",
      en: "Contact",
    },
    subtitle: {
      fr: "Ouvert aux opportunites d'alternance et aux echanges autour de projets data/produit.",
      en: "Open to apprenticeship opportunities and discussions around data and product projects.",
    },
    links: {
      linkedIn: "",
      github: "",
      email: "",
    },
    linkLabels: {
      linkedIn: {
        fr: "LinkedIn",
        en: "LinkedIn",
      },
      github: {
        fr: "GitHub",
        en: "GitHub",
      },
      email: {
        fr: "Email",
        en: "Email",
      },
    },
  },
} satisfies Content;
