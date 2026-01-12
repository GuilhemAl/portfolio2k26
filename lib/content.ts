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
    back: LocalizedString;
    seeSkills: LocalizedString;
    comingSoon: LocalizedString;
    timeline: LocalizedString;
  };
  pageTitles: {
    experience: LocalizedString;
    skills: LocalizedString;
    about: LocalizedString;
    contact: LocalizedString;
  };
  approach: {
    title: LocalizedString;
    bullets: LocalizedList;
  };
  navigation: {
    brand: LocalizedString;
    items: {
      home: LocalizedString;
      experience: LocalizedString;
      skills: LocalizedString;
      about: LocalizedString;
      contact: LocalizedString;
    };
  };
  experience: {
    company: LocalizedString;
    orgUnit: LocalizedString;
    product: LocalizedString;
    productLabel: LocalizedString;
    productOneLiner: LocalizedString;
    productCapabilitiesTitle: LocalizedString;
    productCapabilities: LocalizedList;
    environmentTitle: LocalizedString;
    environmentBullets: LocalizedList;
    artifactsTitle: LocalizedString;
    artifactsDisclaimer: LocalizedString;
    artifacts: LocalizedList;
    apprenticeshipLabel: LocalizedString;
    apprenticeshipNote: LocalizedString;
    contributionsTitle: LocalizedString;
    contributionsIntro: LocalizedString;
    contributions: Array<{
      title: LocalizedString;
      context: LocalizedString;
      myRole: LocalizedString;
      approachBullets: LocalizedList;
      outcome: LocalizedString;
      tags: string[];
    }>;
    period: LocalizedString;
    scopeSummary: LocalizedString;
    roles: Array<{
      id: "backendDev" | "pmScrum";
      title: LocalizedString;
      period: LocalizedString;
      focusTitle: LocalizedString;
      focusAreas: LocalizedList;
      stack: string[];
      bullets: LocalizedList;
    }>;
  };
  skills: Array<{
    title: LocalizedString;
    bullets: LocalizedList;
    tags: string[];
  }>;
  about: {
    paragraph1: LocalizedString;
    paragraph2: LocalizedString;
    bachelorLabel: LocalizedString;
    bachelorPeriod: LocalizedString;
    bachelorApprenticeship: LocalizedString;
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
    fr: ["Agile Scrum", "Azure DevOps", "Quarkus"],
    en: ["Agile Scrum", "Azure DevOps", "Quarkus"],
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
    back: {
      fr: "Retour",
      en: "Back",
    },
    seeSkills: {
      fr: "Voir les competences",
      en: "See skills",
    },
    comingSoon: {
      fr: "Bientot disponible",
      en: "Coming soon",
    },
    timeline: {
      fr: "Timeline",
      en: "Timeline",
    },
  },
  pageTitles: {
    experience: {
      fr: "Experience",
      en: "Experience",
    },
    skills: {
      fr: "Competences",
      en: "Skills",
    },
    about: {
      fr: "A propos",
      en: "About",
    },
    contact: {
      fr: "Contact",
      en: "Contact",
    },
  },
  approach: {
    title: {
      fr: "Ma facon de travailler",
      en: "How I work",
    },
    bullets: {
      fr: [
        "Je transforme un besoin metier en livrable exploitable (specs, stories, criteres).",
        "Je privilegie la clarte : perimetre, regles, responsabilites.",
        "Je cherche l'exploitabilite : monitoring/reporting et reduction du bruit.",
        "Je securise la delivery avec une approche Agile et iterative.",
      ],
      en: [
        "I turn business needs into actionable deliverables (specs, stories, criteria).",
        "I prioritize clarity: scope, rules, ownership.",
        "I focus on operability: monitoring/reporting and noise reduction.",
        "I enable delivery through an iterative Agile approach.",
      ],
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
    productLabel: {
      fr: "Produit : GTR (GCA Temps Reel)",
      en: "Product: GTR (GCA Real-Time)",
    },
    productOneLiner: {
      fr: "GTR est une plateforme de tracking logistique qui centralise et diffuse en temps reel l'ETA, la position GPS et les statuts de commandes pour ameliorer la visibilite client et l'exploitation.",
      en: "GTR is a logistics tracking platform that centralizes and delivers real-time ETA, GPS positions, and order status updates to improve customer visibility and operations.",
    },
    productCapabilitiesTitle: {
      fr: "Ce que fait GTR",
      en: "What GTR does",
    },
    productCapabilities: {
      fr: [
        "Centralise et structure les donnees de transport (ETA, GPS, statuts).",
        "Diffuse ces informations via APIs, exports et reporting.",
        "Ameliore la visibilite client et l'exploitation (fiabilite, tracabilite).",
      ],
      en: [
        "Centralizes and structures transport data (ETA, GPS, statuses).",
        "Delivers this information through APIs, exports and reporting.",
        "Improves customer visibility and operations (reliability, traceability).",
      ],
    },
    environmentTitle: {
      fr: "Environnement",
      en: "Environment",
    },
    environmentBullets: {
      fr: [
        "Service : IT Transport & Distribution",
        "Produit : GTR (GCA Temps Reel)",
        "Outils : Azure DevOps (boards), Docker",
        "Contexte : projet industriel / SI logistique",
      ],
      en: [
        "Unit: IT Transport & Distribution",
        "Product: GTR (GCA Real-Time)",
        "Tooling: Azure DevOps (boards), Docker",
        "Context: industrial product / logistics IS",
      ],
    },
    artifactsTitle: {
      fr: "Artefacts & preuves",
      en: "Artifacts & evidence",
    },
    artifactsDisclaimer: {
      fr: "Exemples anonymises (ou bientot disponibles) :",
      en: "Anonymized examples (or coming soon):",
    },
    artifacts: {
      fr: [
        "Extrait de specification technico-fonctionnelle (API / integration)",
        "Exemple de user story + criteres d'acceptation (Azure DevOps)",
        "Capture anonymisee de reporting (Report Builder)",
        "Schema simplifie : flux export XML -> depot -> EAI",
      ],
      en: [
        "Techno-functional spec excerpt (API / integration)",
        "User story example + acceptance criteria (Azure DevOps)",
        "Anonymized reporting snapshot (Report Builder)",
        "Simplified flow: XML export -> drop -> EAI",
      ],
    },
    apprenticeshipLabel: {
      fr: "Alternance",
      en: "Apprenticeship",
    },
    apprenticeshipNote: {
      fr: "Role exerce en alternance sur le produit GTR.",
      en: "Role performed as part of an apprenticeship on the GTR product.",
    },
    contributionsTitle: {
      fr: "Contributions cles",
      en: "Selected contributions",
    },
    contributionsIntro: {
      fr: "Quelques contributions concretes sur GTR (sans elements sensibles).",
      en: "A few concrete contributions on GTR (without sensitive details).",
    },
    contributions: [
      {
        title: {
          fr: "Export ETA/GPS/Statuts -> XML pour diffusion via EAI",
          en: "ETA/GPS/Status export -> XML for EAI-based distribution",
        },
        context: {
          fr: "Besoin de diffuser des donnees de tracking dans un format attendu par l'EAI.",
          en: "Need to distribute tracking data in a format expected by the EAI.",
        },
        myRole: {
          fr: "Developpeur back-end (Quarkus).",
          en: "Back-end developer (Quarkus).",
        },
        approachBullets: {
          fr: [
            "Generation de fichiers XML au format specifique.",
            "Depot dans un dossier consomme par l'EAI.",
            "Fiabilisation via controles et diagnostic par logs.",
          ],
          en: [
            "Generated XML files in the required specific format.",
            "Dropped files into a folder consumed by the EAI.",
            "Improved reliability with checks and log-based diagnosis.",
          ],
        },
        outcome: {
          fr: "Diffusion automatisee et plus fiable des informations de tracking.",
          en: "More reliable automated distribution of tracking information.",
        },
        tags: ["Quarkus", "Java", "XML", "EAI"],
      },
      {
        title: {
          fr: "Specifications technico-fonctionnelles (API / integrations)",
          en: "Techno-functional specifications (APIs / integrations)",
        },
        context: {
          fr: "Traduction de besoins fonctionnels en regles et contrats exploitables par les equipes.",
          en: "Turning functional needs into actionable rules and contracts for delivery.",
        },
        myRole: {
          fr: "Chef de projet / cadrage.",
          en: "Project manager / framing.",
        },
        approachBullets: {
          fr: [
            "Cadrage du besoin, perimetre, cas limites et erreurs.",
            "Definition du contrat (champs, regles, comportements).",
            "Alignement via user stories et criteres d'acceptation (Azure DevOps).",
          ],
          en: [
            "Framed scope, edge cases and error handling.",
            "Defined the contract (fields, rules, expected behavior).",
            "Aligned delivery via user stories and acceptance criteria (Azure DevOps).",
          ],
        },
        outcome: {
          fr: "Specs plus claires, delivery plus fluide et moins d'ambiguites.",
          en: "Clearer specs, smoother delivery and fewer ambiguities.",
        },
        tags: ["Azure DevOps", "API", "SQL"],
      },
      {
        title: {
          fr: "Passage du cycle en V a Agile Scrum",
          en: "Transition from Waterfall to Agile Scrum",
        },
        context: {
          fr: "Ameliorer la productivite et instaurer une amelioration continue sur GTR.",
          en: "Improve productivity and establish continuous improvement on GTR.",
        },
        myRole: {
          fr: "Scrum Master.",
          en: "Scrum Master.",
        },
        approachBullets: {
          fr: [
            "Mise en place/animation des rituels Scrum.",
            "Structuration backlog et priorisation sur Azure DevOps.",
            "Amelioration continue : feedback regulier et ajustements.",
          ],
          en: [
            "Set up and facilitated Scrum ceremonies.",
            "Structured and prioritized the backlog in Azure DevOps.",
            "Continuous improvement through regular feedback and iteration.",
          ],
        },
        outcome: {
          fr: "Cadence de delivery plus reguliere et meilleure visibilite.",
          en: "More regular delivery cadence and improved visibility.",
        },
        tags: ["Scrum", "Scrum Master", "Azure DevOps"],
      },
    ],
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
        focusTitle: {
          fr: "Focus",
          en: "Focus",
        },
        focusAreas: {
          fr: [
            "Services Quarkus orientes flux et donnees",
            "Exports / integrations (XML, EAI)",
            "Diagnostic production (logs, donnees)",
          ],
          en: [
            "Quarkus services for operational flows and data",
            "Exports / integrations (XML, EAI)",
            "Production diagnosis (logs, data)",
          ],
        },
        stack: ["Java", "Quarkus", "Docker", "Azure DevOps"],
        bullets: {
          fr: [
            "Services backend Quarkus orientes flux et donnees.",
            "Job d'export ETA/GPS/Statuts -> XML pour diffusion via EAI.",
            "Debug et diagnostic (logs / donnees) en contexte production.",
          ],
          en: [
            "Quarkus back-end services focused on operational flows and data.",
            "ETA/GPS/Status export job -> XML consumed by EAI for distribution.",
            "Debugging and diagnosis (logs/data) in a production context.",
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
        focusTitle: {
          fr: "Focus",
          en: "Focus",
        },
        focusAreas: {
          fr: [
            "Delivery Agile Scrum & facilitation",
            "Pilotage backlog / roadmap sur Azure DevOps",
            "Cadrage : specs techno-fonctionnelles + reporting",
          ],
          en: [
            "Agile Scrum delivery & facilitation",
            "Backlog/roadmap management in Azure DevOps",
            "Framing: techno-functional specs + reporting",
          ],
        },
        stack: ["Agile Scrum", "Scrum Master", "Azure DevOps"],
        bullets: {
          fr: [
            "Animation Scrum : rituels, facilitation, amelioration continue.",
            "Pilotage backlog et delivery dans Azure DevOps (priorisation, suivi).",
            "Specs technico-fonctionnelles (API / integrations) + reporting (Report Builder).",
          ],
          en: [
            "Scrum facilitation: ceremonies, team enablement, continuous improvement.",
            "Backlog & delivery management in Azure DevOps (prioritization, tracking).",
            "Techno-functional specs (APIs/integrations) + reporting (Report Builder).",
          ],
        },
      },
    ],
  },
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
    bachelorLabel: {
      fr: "Bachelor Developpeur Web (MDS)",
      en: "Bachelor in Web Development (MDS)",
    },
    bachelorPeriod: {
      fr: "2021 - 2024",
      en: "2021 - 2024",
    },
    bachelorApprenticeship: {
      fr: "En alternance chez GCA, sur le projet GTR.",
      en: "Apprenticeship at GCA, on the GTR project.",
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
