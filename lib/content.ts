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
    goHome: LocalizedString;
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
      academics: LocalizedString;
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
  academics: {
    navLabel: LocalizedString;
    homeTitle: LocalizedString;
    homeIntro: LocalizedString;
    homeCta: LocalizedString;
    pageTitle: LocalizedString;
    pageIntro: LocalizedString;
    items: Array<{
      key: string;
      yearTitle: LocalizedString;
      title: LocalizedString;
      status: LocalizedString;
      context: LocalizedString;
      learnedTitle: LocalizedString;
      learnedBullets: LocalizedList;
      themesTitle: LocalizedString;
      themesBullets: LocalizedList;
      apprenticeshipNote?: LocalizedString;
    }>;
    futureTitle: LocalizedString;
    futureParagraphs: LocalizedList;
  };
  about: {
    aboutPageTitle: LocalizedString;
    aboutIntro: LocalizedString;
    aboutTimeline: Array<{
      yearTitle: LocalizedString;
      paragraphs: LocalizedList;
    }>;
    aboutFutureTitle: LocalizedString;
    aboutFutureParagraphs: LocalizedList;
    aboutValuesTitle: LocalizedString;
    aboutValuesBullets: LocalizedList;
  };
  contact: {
    title: LocalizedString;
    subtitle: LocalizedString;
    availabilityNote: LocalizedString;
    emailHint: LocalizedString;
    fields: {
      email: string;
      phone: string;
      linkedin: string;
      github: string;
    };
    labels: {
      emailLabel: LocalizedString;
      phoneLabel: LocalizedString;
      linkedinLabel: LocalizedString;
      githubLabel: LocalizedString;
      detailsTitle: LocalizedString;
      primaryCta: LocalizedString;
      secondaryCta: LocalizedString;
      ctaGitHub: LocalizedString;
      mailtoLabel: LocalizedString;
      phoneLinkLabel: LocalizedString;
      ctaCopy: LocalizedString;
      copied: LocalizedString;
      back: LocalizedString;
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
    goHome: {
      fr: "Retour à l’accueil",
      en: "Go to home",
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
      academics: {
        fr: "Parcours",
        en: "Academics",
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
          fr: "2023 - 2024",
          en: "2023 - 2024",
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
          fr: "2024 - Aujourd'hui",
          en: "2024 - Present",
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
  academics: {
    navLabel: {
      fr: "Parcours",
      en: "Academics",
    },
    homeTitle: {
      fr: "Parcours académique",
      en: "Academic background",
    },
    homeIntro: {
      fr: "Un socle technique construit dans le dev, puis une bascule vers le management des SI.",
      en: "A technical foundation built through development, then a shift toward IS management.",
    },
    homeCta: {
      fr: "Creuser",
      en: "Dive in",
    },
    pageTitle: {
      fr: "Parcours académique",
      en: "Academic background",
    },
    pageIntro: {
      fr: "Ce que chaque étape m'a apporté, y compris les détours.",
      en: "What each step taught me, including the detours.",
    },
    items: [
      {
        key: "iut-info",
        yearTitle: {
          fr: "2020-2021",
          en: "2020-2021",
        },
        title: {
          fr: "IUT Informatique - 1re année (échec)",
          en: "Computer Science IUT - Year 1 (setback)",
        },
        status: {
          fr: "Tentative",
          en: "Attempted",
        },
        context: {
          fr: "Année Covid, rythme cassé, remise en question et goût d'échec.",
          en: "COVID year, disrupted rhythm, self-questioning and a strong sense of failure.",
        },
        learnedTitle: {
          fr: "Ce que j'en retiens",
          en: "What I took from it",
        },
        learnedBullets: {
          fr: [
            "Retour aux fondamentaux : algorithmes, architecture, rigueur.",
            "Comprendre mes limites du moment et reconstruire une trajectoire.",
            "Résilience : transformer un échec en décision structurante.",
          ],
          en: [
            "Back to fundamentals: algorithms, architecture, rigor.",
            "Understanding my limits at that time and rebuilding a trajectory.",
            "Resilience: turning a setback into a deliberate decision.",
          ],
        },
        themesTitle: {
          fr: "Thèmes typiques abordés",
          en: "Typical themes covered",
        },
        themesBullets: {
          fr: [
            "Initiation au développement, programmation orientée objet.",
            "Architecture des ordinateurs, bases bas niveau.",
            "Mathématiques discrètes, graphes, PPP.",
          ],
          en: [
            "Programming basics, object-oriented programming.",
            "Computer architecture, low-level foundations.",
            "Discrete math, graphs, personal/professional project.",
          ],
        },
      },
      {
        key: "bachelor-dev-web",
        yearTitle: {
          fr: "2021-2024",
          en: "2021-2024",
        },
        title: {
          fr: "Bachelor Développeur Web (MDS)",
          en: "Bachelor in Web Development (MDS)",
        },
        status: {
          fr: "Diplôme obtenu",
          en: "Completed",
        },
        context: {
          fr: "Reconstruction d'un socle technique solide, professionnalisation progressive.",
          en: "Rebuilding a solid technical foundation with a progressive professional approach.",
        },
        learnedTitle: {
          fr: "Compétences consolidées",
          en: "Skills strengthened",
        },
        learnedBullets: {
          fr: [
            "Conception logicielle, qualité, tests, bonnes pratiques.",
            "Développement SQL & API, structuration des données.",
            "Cybersécurité, infrastructure, travail en mode projet.",
          ],
          en: [
            "Software design, quality, testing, good practices.",
            "SQL & API development, data structuring.",
            "Cybersecurity, infrastructure, project-based work.",
          ],
        },
        themesTitle: {
          fr: "Thèmes de formation",
          en: "Program themes",
        },
        themesBullets: {
          fr: [
            "Git, design patterns, gestion de projet et animation de réunions.",
            "Développement API, application web/mobile/desktop.",
            "Wireframes, framework CSS, infrastructure.",
          ],
          en: [
            "Git, design patterns, project management and meeting facilitation.",
            "API development, web/mobile/desktop applications.",
            "Wireframes, CSS framework, infrastructure.",
          ],
        },
        apprenticeshipNote: {
          fr: "Dernière année 2023-2024 en alternance (GCA) en tant que développeur back-end sur GTR.",
          en: "Final year 2023-2024 as an apprenticeship (GCA) as a back-end developer on GTR.",
        },
      },
      {
        key: "master-cmsi",
        yearTitle: {
          fr: "2024-Aujourd'hui",
          en: "2024-Present",
        },
        title: {
          fr: "Master CMSI - IAE Montpellier (en cours)",
          en: "Master CMSI - IAE Montpellier (ongoing)",
        },
        status: {
          fr: "En cours",
          en: "Ongoing",
        },
        context: {
          fr: "Bascule vers le management des SI : cadrage, pilotage, transformation.",
          en: "Shift to IS management: framing, steering, transformation.",
        },
        learnedTitle: {
          fr: "Ce que je développe",
          en: "What I'm developing",
        },
        learnedBullets: {
          fr: [
            "Vision stratégique des SI et alignement avec les enjeux business.",
            "Méthodes de pilotage : gouvernance, conduite du changement, gestion de projet.",
            "Traduction des besoins métier en solutions SI déployables.",
          ],
          en: [
            "Strategic view of information systems aligned with business goals.",
            "Steering methods: governance, change management, project management.",
            "Turning business needs into deployable IS solutions.",
          ],
        },
        themesTitle: {
          fr: "Axes typiques",
          en: "Typical focus areas",
        },
        themesBullets: {
          fr: [
            "Consulting IT et gouvernance des SI.",
            "Transformation digitale, management des organisations.",
            "Gestion de projet numérique et dimensions humaines/techniques.",
          ],
          en: [
            "IT consulting and IS governance.",
            "Digital transformation and organizational management.",
            "Digital project management across human and technical dimensions.",
          ],
        },
      },
    ],
    futureTitle: {
      fr: "Ambitions",
      en: "Ambitions",
    },
    futureParagraphs: {
      fr: [
        "Mon objectif est de devenir Chef de Projet IA / AI Product Owner : piloter des projets où la donnée et les modèles servent un besoin métier concret.",
        "Je veux rester ce profil hybride : assez technique pour challenger, assez structurant pour faire livrer, et assez orienté valeur pour transformer.",
      ],
      en: [
        "My goal is to become an AI Project Manager / AI Product Owner: leading projects where data and models solve concrete business needs.",
        "I want to remain a hybrid profile: technical enough to challenge, structured enough to deliver, and value-driven enough to transform.",
      ],
    },
  },
  about: {
    aboutPageTitle: {
      fr: "À propos",
      en: "About",
    },
    aboutIntro: {
      fr: "Depuis toujours attiré par l'informatique, j'ai construit un parcours entre technique et pilotage produit. Après un échec en 2020–2021, j'ai rebâti un socle solide et pris des responsabilités sur GTR.",
      en: "Drawn to computing early on, I built a path between hands-on engineering and product delivery. After a setback in 2020–2021, I rebuilt a strong foundation and took on responsibilities on GTR.",
    },
    aboutTimeline: [
      {
        yearTitle: {
          fr: "2020–2021",
          en: "2020–2021",
        },
        paragraphs: {
          fr: [
            "Passionné d'informatique depuis l'enfance, initié par mon grand-père, j'intègre un IUT Informatique.",
            "L'année Covid bouleverse le parcours : une première année ratée, une remise en question, puis la décision de repartir sur des bases solides.",
          ],
          en: [
            "Passionate about computing since childhood, sparked by my grandfather, I joined an IUT in Computer Science.",
            "The Covid year disrupted everything: a failed first year, a period of doubt, and the decision to rebuild on stronger foundations.",
          ],
        },
      },
      {
        yearTitle: {
          fr: "2021–2024",
          en: "2021–2024",
        },
        paragraphs: {
          fr: [
            "J'intègre le Bachelor Développeur Web (MDS) pour reconstruire un socle technique solide et durable.",
            "Trois ans pour consolider la pratique, la rigueur et l'envie de livrer des projets utiles.",
          ],
          en: [
            "I joined the Web Development Bachelor (MDS) to rebuild a solid, lasting technical base.",
            "Three years to strengthen practice, rigor, and the drive to ship useful projects.",
          ],
        },
      },
      {
        yearTitle: {
          fr: "2023–2024",
          en: "2023–2024",
        },
        paragraphs: {
          fr: [
            "Dernière année du Bachelor en alternance chez Groupe Charles André, sur le produit GTR, en tant que développeur back-end.",
            "Un challenge important, et une vraie réussite personnelle et professionnelle.",
          ],
          en: [
            "Final year of the Bachelor as an apprentice at Groupe Charles André on the GTR product, working as a back-end developer.",
            "A big challenge and a real personal and professional success.",
          ],
        },
      },
      {
        yearTitle: {
          fr: "2024–Aujourd'hui",
          en: "2024–Today",
        },
        paragraphs: {
          fr: [
            "Après le Bachelor, GCA me propose d'évoluer vers Chef de Projet sur le même produit GTR, au sein de l'IT Transport & Distribution. En parallèle, j'intègre l'IAE Montpellier en CMSI, en phase avec le virage management SI.",
            "À mon arrivée, le projet est en cycle en V avec des livraisons en lots. Avec l'équipe et mon tuteur, nous basculons en Agile/Scrum et installons une cadence d'environ une livraison toutes les trois semaines (vs 3–4 mois), avec reporting, specs/user stories, rôle de Scrum Master et COPIL mensuels. En période école, j'organise la continuité via briefings et relais par mon N+1.",
          ],
          en: [
            "After the Bachelor, GCA offered me a transition to Project Manager on the same GTR product within IT Transport & Distribution. In parallel, I joined IAE Montpellier (CMSI), aligned with my shift toward IT management.",
            "When I arrived, the project ran in a waterfall cycle with batch releases. With the team and my mentor, we moved to Agile/Scrum and set a rhythm of roughly one release every three weeks (vs one every 3–4 months), adding reporting, specs/user stories, a Scrum Master role, and monthly steering committees. During school periods, I prepare handover briefings and my manager takes over.",
          ],
        },
      },
    ],
    aboutFutureTitle: {
      fr: "Et maintenant",
      en: "What's next",
    },
    aboutFutureParagraphs: {
      fr: [
        "Mon objectif est de devenir Chef de Projet IA / AI Product Owner et de piloter des transformations à l'interface data/tech ↔ métier.",
        "Le MS Chef de Projet IA de SKEMA m'attire pour son approche hybride business + techno, sa capacité à créer de la valeur, et sa dimension éthique et juridique, avec un pragmatisme orienté delivery.",
      ],
      en: [
        "My goal is to become an AI Project Manager / AI Product Owner and lead transformations at the intersection of data, tech, and business.",
        "SKEMA's AI Project Manager MS appeals to me for its hybrid business + tech approach, its focus on value creation, and its ethical and legal dimension, grounded in pragmatic delivery.",
      ],
    },
    aboutValuesTitle: {
      fr: "Ce qui me guide",
      en: "What drives me",
    },
    aboutValuesBullets: {
      fr: [
        "Résilience et lucidité face à l'échec, pour rebondir vite.",
        "Démarche de professionnel qui outille sa pratique et documente la décision.",
        "Pilotage de la complexité dans l'urgence, sans perdre le cap produit.",
        "Sens du collectif et du service pour faire avancer la delivery.",
      ],
      en: [
        "Resilience and clear-sightedness after setbacks, to bounce back quickly.",
        "A professional mindset that tools the practice and documents decisions.",
        "Ability to steer complexity under time pressure without losing product focus.",
        "Team-first, service-oriented mindset to keep delivery moving.",
      ],
    },
  },
  contact: {
    title: {
      fr: "Contact",
      en: "Contact",
    },
    subtitle: {
      fr: "Je recherche une alternance et je suis prêt à m'investir pleinement. Ouvert aux échanges et opportunités.",
      en: "I'm looking for an apprenticeship and ready to fully commit. Open to discussions and opportunities.",
    },
    availabilityNote: {
      fr: "N'hésitez pas à me contacter : je réponds rapidement.",
      en: "Feel free to reach out — I respond quickly.",
    },
    emailHint: {
      fr: "Le bouton \"copier\" est le plus fiable (mailto dépend de ton navigateur).",
      en: "Copy is the most reliable option (mailto depends on your system).",
    },
    fields: {
      email: "albusguilhem@gmail.com",
      phone: "0695636530",
      linkedin: "https://www.linkedin.com/in/guilhem-albus-00601639a/",
      github: "https://github.com/GuilhemAl",
    },
    labels: {
      emailLabel: {
        fr: "Email",
        en: "Email",
      },
      phoneLabel: {
        fr: "Téléphone",
        en: "Phone",
      },
      linkedinLabel: {
        fr: "LinkedIn",
        en: "LinkedIn",
      },
      githubLabel: {
        fr: "GitHub",
        en: "GitHub",
      },
      detailsTitle: {
        fr: "Coordonnées",
        en: "Contact details",
      },
      primaryCta: {
        fr: "Me contacter sur LinkedIn",
        en: "Message me on LinkedIn",
      },
      secondaryCta: {
        fr: "Copier mon email",
        en: "Copy my email",
      },
      ctaGitHub: {
        fr: "Voir GitHub",
        en: "View GitHub",
      },
      mailtoLabel: {
        fr: "Ouvrir dans mon client mail",
        en: "Open in mail client",
      },
      phoneLinkLabel: {
        fr: "Appeler",
        en: "Call",
      },
      ctaCopy: {
        fr: "Copier",
        en: "Copy",
      },
      copied: {
        fr: "Copié",
        en: "Copied",
      },
      back: {
        fr: "Retour",
        en: "Back",
      },
    },
  },
} satisfies Content;
