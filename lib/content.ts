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
  skills: {
    title: LocalizedString;
    intro: LocalizedString;
    buckets: Array<{
      key: string;
      title: LocalizedString;
      summary: LocalizedString;
      bullets: LocalizedList;
      tags: string[];
    }>;
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
      summary: LocalizedString;
      focusTitle: LocalizedString;
      focusAreas: LocalizedList;
      stack: string[];
      bullets: LocalizedList;
    }>;
  };
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
      fr: "Scrum Master sur GTR (GCA) - delivery agile, specs technico-fonctionnelles, intégrations SI.",
      en: "Scrum Master on GTR (GCA) - agile delivery, techno-functional specs, SI integrations.",
    },
    goal: {
      fr: "Je vise une alternance alignée avec le Master spécialisé Chef de Projet IA (SKEMA).",
      en: "I'm targeting an apprenticeship aligned with SKEMA's AI Project Manager specialization.",
    },
  },
  quickFacts: {
    fr: ["Agile Scrum", "Azure DevOps", "Quarkus"],
    en: ["Agile Scrum", "Azure DevOps", "Quarkus"],
  },
  ctas: {
    primary: {
      fr: "Voir l'expérience",
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
      fr: "Voir les compétences",
      en: "See skills",
    },
    comingSoon: {
      fr: "Bientôt disponible",
      en: "Coming soon",
    },
    timeline: {
      fr: "Timeline",
      en: "Timeline",
    },
  },
  pageTitles: {
    experience: {
      fr: "Expérience",
      en: "Experience",
    },
    skills: {
      fr: "Compétences",
      en: "Skills",
    },
    about: {
      fr: "À propos",
      en: "About",
    },
    contact: {
      fr: "Contact",
      en: "Contact",
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
        fr: "Expérience",
        en: "Experience",
      },
      skills: {
        fr: "Compétences",
        en: "Skills",
      },
      about: {
        fr: "À propos",
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
      fr: "Groupe Charles André (GCA)",
      en: "Groupe Charles Andre (GCA)",
    },
    orgUnit: {
      fr: "IT Transport & Distribution",
      en: "IT Transport & Distribution",
    },
    product: {
      fr: "GTR (GCA Temps Réel)",
      en: "GTR (GCA Real-Time)",
    },
    productLabel: {
      fr: "Produit : GTR (GCA Temps Réel)",
      en: "Product: GTR (GCA Real-Time)",
    },
    productOneLiner: {
      fr: "GTR est une plateforme de tracking logistique qui centralise et diffuse en temps réel l'ETA, la position GPS et les statuts de commandes pour améliorer la visibilité client et l'exploitation.",
      en: "GTR is a logistics tracking platform that centralizes and delivers real-time ETA, GPS positions, and order status updates to improve customer visibility and operations.",
    },
    productCapabilitiesTitle: {
      fr: "Ce que fait GTR",
      en: "What GTR does",
    },
    productCapabilities: {
      fr: [
        "Centralise et structure les données de transport (ETA, GPS, statuts).",
        "Diffuse ces informations via APIs, exports et reporting.",
        "Améliore la visibilité client et l'exploitation (fiabilité, traçabilité).",
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
        "Produit : GTR (GCA Temps Réel)",
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
      fr: "Exemples anonymisés (ou bientôt disponibles) :",
      en: "Anonymized examples (or coming soon):",
    },
    artifacts: {
      fr: [
        "Extrait de spécification technico-fonctionnelle (API / intégration)",
        "Exemple de user story + critères d'acceptation (Azure DevOps)",
        "Capture anonymisée de reporting (Report Builder)",
        "Schéma simplifié : flux export XML -> dépôt -> EAI",
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
      fr: "Rôle exercé en alternance sur le produit GTR.",
      en: "Role performed as part of an apprenticeship on the GTR product.",
    },
    contributionsTitle: {
      fr: "Contributions clés",
      en: "Selected contributions",
    },
    contributionsIntro: {
      fr: "Quelques contributions concrètes sur GTR (sans éléments sensibles).",
      en: "A few concrete contributions on GTR (without sensitive details).",
    },
    contributions: [
      {
        title: {
          fr: "Export ETA/GPS/Statuts -> XML pour diffusion via EAI",
          en: "ETA/GPS/Status export -> XML for EAI-based distribution",
        },
        context: {
          fr: "Besoin de diffuser des données de tracking dans un format attendu par l'EAI.",
          en: "Need to distribute tracking data in a format expected by the EAI.",
        },
        myRole: {
          fr: "Développeur back-end (Quarkus).",
          en: "Back-end developer (Quarkus).",
        },
        approachBullets: {
          fr: [
            "Génération de fichiers XML au format spécifique.",
            "Dépôt dans un dossier consommé par l'EAI.",
            "Fiabilisation via contrôles et diagnostic par logs.",
          ],
          en: [
            "Generated XML files in the required specific format.",
            "Dropped files into a folder consumed by the EAI.",
            "Improved reliability with checks and log-based diagnosis.",
          ],
        },
        outcome: {
          fr: "Diffusion automatisée et plus fiable des informations de tracking.",
          en: "More reliable automated distribution of tracking information.",
        },
        tags: ["Quarkus", "Java", "XML", "EAI"],
      },
      {
        title: {
          fr: "Spécifications technico-fonctionnelles (API / intégrations)",
          en: "Techno-functional specifications (APIs / integrations)",
        },
        context: {
          fr: "Traduction de besoins fonctionnels en règles et contrats exploitables par les équipes.",
          en: "Turning functional needs into actionable rules and contracts for delivery.",
        },
        myRole: {
          fr: "Chef de projet / cadrage.",
          en: "Project manager / framing.",
        },
        approachBullets: {
          fr: [
            "Cadrage du besoin, périmètre, cas limites et erreurs.",
            "Définition du contrat (champs, règles, comportements).",
            "Alignement via user stories et critères d'acceptation (Azure DevOps).",
          ],
          en: [
            "Framed scope, edge cases and error handling.",
            "Defined the contract (fields, rules, expected behavior).",
            "Aligned delivery via user stories and acceptance criteria (Azure DevOps).",
          ],
        },
        outcome: {
          fr: "Specs plus claires, delivery plus fluide et moins d'ambiguïtés.",
          en: "Clearer specs, smoother delivery and fewer ambiguities.",
        },
        tags: ["Azure DevOps", "API", "SQL"],
      },
      {
        title: {
          fr: "Passage du cycle en V à Agile Scrum",
          en: "Transition from Waterfall to Agile Scrum",
        },
        context: {
          fr: "Améliorer la productivité et instaurer une amélioration continue sur GTR.",
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
            "Amélioration continue : feedback régulier et ajustements.",
          ],
          en: [
            "Set up and facilitated Scrum ceremonies.",
            "Structured and prioritized the backlog in Azure DevOps.",
            "Continuous improvement through regular feedback and iteration.",
          ],
        },
        outcome: {
          fr: "Cadence de delivery plus régulière et meilleure visibilité.",
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
          fr: "Développeur back-end",
          en: "Back-end Developer",
        },
        period: {
          fr: "2021 - 2023",
          en: "2021 - 2023",
        },
        summary: {
          fr: "Développement back-end sur une plateforme de tracking logistique : microservices Quarkus, données temps réel, et diffusion client.",
          en: "Back-end development on a logistics tracking platform: Quarkus microservices, real-time data, and client distribution.",
        },
        focusTitle: {
          fr: "Focus",
          en: "Focus",
        },
        focusAreas: {
          fr: [
            "Services Quarkus orientés flux et données",
            "Exports / intégrations (XML, EAI)",
            "Diagnostic production (logs, données)",
          ],
          en: [
            "Quarkus services for operational flows and data",
            "Exports / integrations (XML, EAI)",
            "Production diagnosis (logs, data)",
          ],
        },
        stack: [
          "Java",
          "Quarkus",
          "Docker",
          "Azure DevOps",
          "Kubernetes",
          "Oracle",
          "Postgres",
        ],
        bullets: {
          fr: [
            "Microservices Quarkus conteneurisés, déployés sur Kubernetes.",
            "Données et référentiels sur bases Oracle & PostgreSQL.",
            "Travail sur plusieurs couches métier : réception, traitement et diffusion (ETA, GPS, statuts).",
          ],
          en: [
            "Containerized Quarkus microservices deployed on Kubernetes.",
            "Data and references stored across Oracle & PostgreSQL databases.",
            "Worked across business layers: ingestion, processing, and distribution (ETA, GPS, statuses).",
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
        summary: {
          fr: "Pilotage de la delivery Agile Scrum, cadrage fonctionnel et coordination via Azure DevOps.",
          en: "Agile Scrum delivery leadership, functional framing, and coordination in Azure DevOps.",
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
            "Animation Scrum : rituels, facilitation, amélioration continue.",
            "Pilotage backlog et delivery dans Azure DevOps (priorisation, suivi).",
            "Specs technico-fonctionnelles (API / intégrations) + reporting (Report Builder).",
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
  skills: {
    title: {
      fr: "Compétences",
      en: "Skills",
    },
    intro: {
      fr: "Un mix de compétences techniques et humaines construit en delivery produit et data.",
      en: "A mix of technical and people skills built through product and data delivery.",
    },
    buckets: [
      {
        key: "backend",
        title: {
          fr: "Back-end & APIs",
          en: "Back-end & APIs",
        },
        summary: {
          fr: "Services Quarkus/Java, APIs et intégrations SI avec exports XML et diagnostic prod.",
          en: "Quarkus/Java services, APIs and SI integrations with XML exports and production diagnosis.",
        },
        bullets: {
          fr: [
            "Services Quarkus/Java orientés flux logistiques et données.",
            "Conception et intégration d'APIs pour besoins métier.",
            "Exports XML (ETA/GPS/Statuts) pour diffusion via EAI.",
            "Diagnostic production : logs, données, investigations.",
          ],
          en: [
            "Quarkus/Java services focused on logistics flows and data.",
            "API design and integrations for business needs.",
            "XML exports (ETA/GPS/Status) distributed via EAI.",
            "Production diagnosis through logs, data and investigations.",
          ],
        },
        tags: ["Quarkus", "Java", "API", "XML", "Debug"],
      },
      {
        key: "data-sql",
        title: {
          fr: "Data & SQL",
          en: "Data & SQL",
        },
        summary: {
          fr: "Extraction et analyse SQL pour répondre aux besoins métier (Oracle/Postgres).",
          en: "SQL extraction and analysis for business needs (Oracle/Postgres).",
        },
        bullets: {
          fr: [
            "Requêtes SQL pour extraction, contrôle et analyse.",
            "Traduction des besoins métier en requêtes exploitables.",
            "Travail sur bases Oracle et Postgres.",
          ],
          en: [
            "SQL queries for extraction, checks and analysis.",
            "Translate business needs into usable queries.",
            "Work across Oracle and Postgres databases.",
          ],
        },
        tags: ["SQL", "Postgres", "Oracle"],
      },
      {
        key: "agile-delivery",
        title: {
          fr: "Delivery Agile",
          en: "Agile Delivery",
        },
        summary: {
          fr: "Scrum Master, rituels et backlog pour une delivery agile lisible.",
          en: "Scrum Mastering, rituals and backlog for clear agile delivery.",
        },
        bullets: {
          fr: [
            "Animation des rituels Scrum et facilitation d'équipe.",
            "Structuration du backlog et priorisation.",
            "Amélioration continue via feedback et ajustements.",
            "Suivi de delivery pour donner de la visibilité.",
          ],
          en: [
            "Facilitate Scrum ceremonies and team routines.",
            "Backlog structuring and prioritization.",
            "Continuous improvement through feedback and iteration.",
            "Delivery tracking to keep stakeholders aligned.",
          ],
        },
        tags: ["Scrum", "Scrum Master", "Agile"],
      },
      {
        key: "tooling-delivery",
        title: {
          fr: "Outils & Delivery",
          en: "Tooling & Delivery",
        },
        summary: {
          fr: "Azure DevOps Boards pour pilotage, collaboration et suivi delivery, avec Docker.",
          en: "Azure DevOps Boards for steering, collaboration and delivery tracking, with Docker.",
        },
        bullets: {
          fr: [
            "Pilotage du delivery via Azure DevOps Boards.",
            "Suivi, priorisation et coordination équipe/métier.",
            "Docker pour services et environnements de travail.",
            "Visibilité des avancements pour l'équipe et les parties prenantes.",
          ],
          en: [
            "Delivery steering in Azure DevOps Boards.",
            "Tracking, prioritization and team/business coordination.",
            "Docker for services and working environments.",
            "Progress visibility for teams and stakeholders.",
          ],
        },
        tags: ["Azure DevOps", "Boards", "Docker"],
      },
      {
        key: "reporting-monitoring",
        title: {
          fr: "Reporting & Monitoring",
          en: "Reporting & Monitoring",
        },
        summary: {
          fr: "Report Builder pour reporting et monitoring projet.",
          en: "Report Builder for project reporting and monitoring.",
        },
        bullets: {
          fr: [
            "Report Builder pour visualiser le suivi et les tendances.",
            "Construction de rapports utiles à la décision.",
            "Monitoring de flux et données pour garder la qualité.",
          ],
          en: [
            "Report Builder to visualize tracking and trends.",
            "Build reports that help decision making.",
            "Monitor flows and data to keep quality in check.",
          ],
        },
        tags: ["Report Builder", "Reporting"],
      },
      {
        key: "soft-skills",
        title: {
          fr: "Soft skills",
          en: "Soft skills",
        },
        summary: {
          fr: "Facilitation, médiation et communication claire pour faire avancer la delivery.",
          en: "Facilitation, mediation and clear communication to move delivery forward.",
        },
        bullets: {
          fr: [
            "Facilitation et animation d'équipe.",
            "Gestion de profils conflictuels et médiation.",
            "Communication claire entre tech et non-tech.",
            "Organisation, priorisation et rigueur.",
            "Leadership de delivery sans autorité hiérarchique.",
          ],
          en: [
            "Team facilitation and session leadership.",
            "Conflict management and mediation with difficult profiles.",
            "Clear communication between tech and non-tech.",
            "Organization, prioritization and rigor.",
            "Delivery leadership without formal authority.",
          ],
        },
        tags: ["Facilitation", "Communication", "Conflict management", "Leadership"],
      },
    ],
  },
  about: {
    paragraph1: {
      fr: "Bachelor Dev Web MDS 2021-2024 en alternance sur GTR, un socle technique solide.",
      en: "Bachelor in Web Development (MDS) 2021-2024 in apprenticeship on GTR, building a strong technical foundation.",
    },
    paragraph2: {
      fr: "Évolution vers Chef de projet / Scrum Master avec un objectif d'alternance au Master spécialisé IA de SKEMA.",
      en: "Transitioning to Project Manager / Scrum Master with an apprenticeship goal aligned with SKEMA's AI specialization.",
    },
    bachelorLabel: {
      fr: "Bachelor Développeur Web (MDS)",
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
      fr: "Ouvert aux opportunités d'alternance et aux échanges autour de projets data/produit.",
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
