// CV content. Section ids are stable: analytics aggregate by them, so never rename an id.
// Per-application tailoring lives in a/<code>.json ({"summary":{"en":"...","fr":"..."}}), loaded only when ?a=<code> is in the URL.
const T = (en, fr) => ({ en, fr });
const CV = {
  name: "Thomas Mavrogonatos",
  tagLines: [
    T("Sport Analytics and Strategy", "Analyse sportive et stratégie"),
    T("MSc Sport Analytics and Artificial Intelligence at Loughborough University London",
      "MSc Sport Analytics and Artificial Intelligence à Loughborough University London"),
    T("London-based", "Basé à Londres")
  ],
  links: [
    { k: "email", label: "tom_mavro@hotmail.com", href: "mailto:tom_mavro@hotmail.com" },
    { k: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/thomasmavrogonatos/" },
    { k: "github", label: "GitHub", soon: true },
    { k: "substack", label: "Substack", soon: true }
  ],
  soon: T("coming soon", "bientôt disponible"),
  sections: [
    { id: "profile", c: "--o-blue", h: T("Profile", "Profil"), paras: [
      T("Senior Consultant at Monitor Deloitte Belgium since January 2022, within the Government & Public Services sector (Strategy & Business Design), working on public sector strategy and policy operational projects across Europe.",
        "Senior Consultant chez Monitor Deloitte Belgique depuis janvier 2022, au sein du secteur Government & Public Services (Strategy & Business Design), sur des projets de stratégie publique et de mise en œuvre de politiques à travers l'Europe."),
      T("Alongside this, I have been building a parallel path in sport: I completed a postgraduate certificate at the Belgian Olympic Academy, concluding with a thesis on the inclusion of E-Sports in the Olympic movement and its implications for the Belgian Olympic and Interfederal Committee.",
        "En parallèle, j'ai construit un parcours dans le sport : j'ai obtenu un certificat post-universitaire à l'Académie Olympique de Belgique, conclu par un mémoire sur l'inclusion de l'e-sport dans le mouvement olympique et ses implications pour le Comité Olympique et Interfédéral Belge."),
      T("Since September 2026, I have also started an MSc in Sport Analytics and Artificial Intelligence at Loughborough University London, taking a career break from consulting to deepen my expertise at the intersection of sport, data, and technology.",
        "Depuis septembre 2026, je suis un MSc en Sport Analytics and Artificial Intelligence à Loughborough University London, en pause de carrière dans le conseil, pour approfondir mon expertise à la croisée du sport, des données et de la technologie."),
      T("I have also recently completed the Talent ID (Level 1) and Children Safeguarding courses by the Football Association (The FA), and volunteered at the FIH Hockey World Cup 2026.",
        "J'ai également suivi récemment les formations Talent ID (niveau 1) et Children Safeguarding de la Football Association (The FA), et j'ai été bénévole à la Coupe du monde de hockey FIH 2026."),
      T("I am passionate about how analytics, governance, and innovation are reshaping the sports industry, from athlete performance to institutional strategy.",
        "Je suis passionné par la manière dont l'analyse de données, la gouvernance et l'innovation transforment l'industrie du sport, de la performance des athlètes à la stratégie des institutions.")
    ]},
    { id: "experience", c: "--o-black", h: T("Experience", "Expérience professionnelle"), items: [
      { t: T("Senior Consultant", "Senior Consultant"), o: "Monitor Deloitte Belgium", d: T("Jan 2022 – present (career break)", "janv. 2022 – aujourd'hui (pause de carrière)"), b: [
        T("Worked on the EU Digital Identity Wallet, supporting complex IT-system projects on electronic identification (eIDAS) and the Once-Only Principle across a wide range of EU stakeholders.",
          "Travail sur l'EU Digital Identity Wallet : appui à des projets de systèmes informatiques complexes sur l'identification électronique (eIDAS) et le principe « Once-Only », avec un large éventail de parties prenantes européennes."),
        T("Helped deliver the EU Business Hub (EU Gateway Programme), coordinating programme activities and acting as a point of contact for EU start-ups and SMEs expanding to Japan and the Republic of Korea. Supported the financial management of the EU Business Hub, tracking programme budgets and processing invoices in line with EU financial procedures. Co-ordinated the logistics of business missions, including booking venues, accommodation and travel for participating start-ups and SMEs.",
          "Contribution à la mise en œuvre de l'EU Business Hub (programme EU Gateway) : coordination des activités du programme et point de contact pour les start-ups et PME européennes se développant au Japon et en République de Corée. Appui à la gestion financière de l'EU Business Hub, avec le suivi des budgets et le traitement des factures selon les procédures financières de l'UE. Coordination de la logistique des missions d'affaires, dont la réservation des lieux, de l'hébergement et des déplacements des start-ups et PME participantes.")
      ]},
      { t: T("Customer Development and Analytics Intern", "Stagiaire Customer Development and Analytics"), o: "Unilever Belgium", d: T("Jun – Oct 2021", "juin – oct. 2021"), b: [
        T("Analysed Lipton sales across Belgian retail stores, giving the Customer Development team insights for trade and retail strategies.",
          "Analyse des ventes Lipton dans la grande distribution belge, pour éclairer les stratégies commerciales de l'équipe Customer Development.")
      ]}
    ]},
    { id: "education", c: "--o-blue", h: T("Education", "Formation"), items: [
      { t: T("MSc Sport Analytics and Artificial Intelligence", "MSc Sport Analytics and Artificial Intelligence"), o: "Loughborough University London", d: T("2026 – 2027", "2026 – 2027") },
      { t: T("Postgraduate Programme in Sport Management", "Programme post-universitaire en management du sport"), o: T("Belgian Olympic Academy, Belgian Olympic Committee", "Académie Olympique de Belgique, Comité Olympique Belge"), d: T("2025 – 2026", "2025 – 2026") },
      { t: T("MSc International Management", "MSc International Management"), o: "ESADE Business School", d: T("2020 – 2021", "2020 – 2021") },
      { t: T("BSc Economics", "Bachelier en sciences économiques"), o: "Solvay Brussels School of Economics and Management", d: T("2017 – 2020", "2017 – 2020") }
    ]},
    { id: "certifications", c: "--o-yellow", h: T("Certifications", "Certifications"), items: [
      { t: T("Introduction to Talent Identification, Level 1", "Introduction to Talent Identification, niveau 1"), o: "The Football Association", d: T("Aug 2026", "août 2026") },
      { t: T("Safeguarding Children", "Safeguarding Children (protection de l'enfance)"), o: "The Football Association", d: T("Sep 2026", "sept. 2026") }
    ]},
    { id: "sport", c: "--o-green", h: T("Sport experience", "Expérience sportive"), items: [
      { t: T("University football player", "Joueur universitaire"), o: "ULB Owls, Ixelles", d: T("2017 – 2020", "2017 – 2020") },
      { t: T("Casual coaching", "Entraîneur occasionnel"), o: "FC Saint-Michel, Evere", d: T("Aug – Sep 2018", "août – sept. 2018") },
      { t: T("Grassroots match refereeing", "Arbitrage de matchs amateurs"), o: "Brussels", d: T("Jun – Sep 2018", "juin – sept. 2018") },
      { t: T("Club player", "Joueur en club"), o: "Kraainem FC, Brussels", d: T("2008 – 2014", "2008 – 2014") }
    ]},
    { id: "volunteering", c: "--o-red", h: T("Volunteering", "Bénévolat"), items: [
      { t: T("Volunteer, Hockey World Cup 2026", "Bénévole, Coupe du monde de hockey 2026"), o: "International Hockey Federation (FIH), Wavre", d: T("Aug 2026", "août 2026"), b: [
        T("Volunteered for two weeks at the 2026 Hockey World Cup in Wavre: welcomed and guided supporters in the stands, delivered front-line customer service, and supported the organising team with crowd management and incident logging.",
          "Deux semaines de bénévolat à la Coupe du monde de hockey 2026 à Wavre : accueil et orientation des supporters dans les tribunes, service client en première ligne, et appui à l'équipe d'organisation pour la gestion des foules et le suivi des incidents.")
      ]}
    ]},
    { id: "research", c: "--o-yellow", h: T("Research", "Recherche"), items: [
      { t: T("“E-Sports beyond simulation”", "« E-Sports beyond simulation »"), o: T("Final work, Belgian Olympic Academy (Postgraduate Programme in Sport Management), Belgian Olympic Committee", "Travail de fin d'études, Académie Olympique de Belgique (programme post-universitaire en management du sport), Comité Olympique Belge"), d: T("Dec 2025", "déc. 2025"), p: T(
        "Examined how the IOC's engagement with e-sports is redefining “sport” and what it means for Belgium. Drawing on stakeholder interviews and cases from South Korea, Finland, Sweden and France, it recommends integrating sport-simulation titles into existing Belgian federations as a first step towards embedding e-sports in the Olympic movement.",
        "Analyse de la manière dont l'engagement du CIO envers l'e-sport redéfinit la notion de « sport », et de ses implications pour la Belgique. À partir d'entretiens et de cas en Corée du Sud, Finlande, Suède et France, le travail recommande d'intégrer d'abord les jeux de simulation sportive dans les fédérations belges existantes, comme première étape vers l'intégration de l'e-sport dans le mouvement olympique."),
        cta: T("Read the thesis (PDF)", "Lire le travail (PDF)"), href: "thesis.pdf" }
    ]},
    { id: "skills", c: "--o-black", h: T("Skills", "Compétences"), chips: [
      ["Python", "SQL", "Power BI", "Microsoft Excel", "Word", "PowerPoint", "Outlook", "Teams"]
    ]},
    { id: "languages", c: "--o-blue", h: T("Languages", "Langues"), chips: [
      [T("English · fluent (C2)", "Anglais · courant (C2)"), T("French · native", "Français · langue maternelle"), T("Spanish · B1", "Espagnol · B1"), T("Dutch · A2", "Néerlandais · A2"), T("Korean · A1", "Coréen · A1")]
    ]},
    { id: "interests", c: "--o-green", h: T("Interests", "Centres d'intérêt"), chips: [
      [T("Sport data analysis", "Analyse de données sportives"), T("Multi-instrumental music", "Musique (multi-instrumentiste)"), T("Football & tennis", "Football & tennis"), T("Financial markets", "Marchés financiers")]
    ]}
  ]
};
const FOOT = T("This site counts visits and section views without cookies or personal data.", "Ce site mesure les visites et la lecture des sections, sans cookies ni données personnelles.");
