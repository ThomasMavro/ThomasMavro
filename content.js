// CV content. Section ids are stable: analytics aggregate by them, so never rename an id.
// Per-application tailoring lives in a/<code>.json ({"summary":{"en":"...","fr":"..."}}), loaded only when ?a=<code> is in the URL.
const T = (en, fr) => ({ en, fr });
const CV = {
  name: "Thomas Mavrogonatos",
  tagLines: [
    T("Sport Analytics and Strategy", "Analyse sportive et stratégie"),
    T("MSc Sport Analytics and Artificial Intelligence", "MSc Sport Analytics and Artificial Intelligence"),
    T("Loughborough University London", "Loughborough University London"),
    T("London-based", "Basé à Londres")
  ],
  availability: T("Open to part-time roles now · full-time from June 2027", "Disponible à temps partiel dès maintenant · à temps plein à partir de juin 2027"),
  links: [
    { k: "email", label: "tom_mavro@hotmail.com", href: "mailto:tom_mavro@hotmail.com" },
    { k: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/thomasmavrogonatos/" },
    { k: "github", label: "GitHub", soon: true },
    { k: "substack", label: "Substack", soon: true }
  ],
  soon: T("coming soon", "bientôt disponible"),
  sections: [
    { id: "profile", c: "--o-blue", h: T("Profile", "Profil"), paras: [
      T("Sport analytics and strategy profile combining five years of consulting at Monitor Deloitte Belgium with an MSc in Sport Analytics and Artificial Intelligence at Loughborough University London, which I started in September 2026.",
        "Profil en analyse sportive et stratégie, alliant cinq ans de conseil chez Monitor Deloitte Belgique et un MSc en Sport Analytics and Artificial Intelligence à Loughborough University London, commencé en septembre 2026."),
      T("Senior Consultant since January 2022 in the Government & Public Services sector (Strategy & Business Design), working on public sector strategy and policy implementation projects across Europe, now on a career break to deepen my expertise at the intersection of sport, data and technology.",
        "Senior Consultant depuis janvier 2022 dans le secteur Government & Public Services (Strategy & Business Design), sur des projets de stratégie publique et de mise en œuvre de politiques à travers l'Europe, aujourd'hui en pause de carrière pour approfondir mon expertise à la croisée du sport, des données et de la technologie."),
      T("In sport, I completed the Belgian Olympic Academy with a thesis on the inclusion of e-sports in the Olympic movement and its implications for the Belgian Olympic and Interfederal Committee, completed the FA's Talent ID (Level 1) and Children Safeguarding courses, and volunteered at the FIH Hockey World Cup 2026. I am passionate about how analytics, governance and innovation are reshaping the sports industry, from athlete performance to institutional strategy.",
        "Dans le sport, j'ai suivi l'Académie Olympique de Belgique, avec un mémoire sur l'inclusion de l'e-sport dans le mouvement olympique et ses implications pour le Comité Olympique et Interfédéral Belge, j'ai suivi les formations Talent ID (niveau 1) et Children Safeguarding de The FA, et j'ai été bénévole à la Coupe du monde de hockey FIH 2026. Je suis passionné par la manière dont l'analyse de données, la gouvernance et l'innovation transforment l'industrie du sport, de la performance des athlètes à la stratégie des institutions.")
    ]},
    { id: "experience", c: "--o-black", h: T("Experience", "Expérience professionnelle"), items: [
      { t: T("Senior Consultant", "Senior Consultant"), o: "Monitor Deloitte Belgium", d: T("Jan 2022 – present (career break)", "janv. 2022 – aujourd'hui (pause de carrière)"),
        sub: T("Business Analyst (2022–2023) → Consultant (2024) → Senior Consultant (2025–2026)", "Business Analyst (2022–2023) → Consultant (2024) → Senior Consultant (2025–2026)"), b: [
        T("Worked on the EU Digital Identity Wallet, supporting complex IT-system projects on electronic identification (eIDAS) and the Once-Only Principle across a wide range of EU stakeholders.",
          "Travail sur l'EU Digital Identity Wallet : appui à des projets de systèmes informatiques complexes sur l'identification électronique (eIDAS) et le principe « Once-Only », avec un large éventail de parties prenantes européennes."),
        T("Helped deliver the EU Business Hub, a €15M EU-funded initiative and one of the latest editions of the EU Gateway Programme in Asia, acting as a point of contact for EU start-ups and SMEs expanding to Japan and the Republic of Korea.",
          "Contribution à la mise en œuvre de l'EU Business Hub, une initiative financée par l'UE à hauteur de 15 M€ et l'une des dernières éditions du programme EU Gateway en Asie, en tant que point de contact pour les start-ups et PME européennes se développant au Japon et en République de Corée."),
        T("Organised 15 business missions, each supporting around 50 start-ups and SMEs, and coordinated their logistics: venues, accommodation and travel.",
          "Organisation de 15 missions d'affaires, chacune avec environ 50 start-ups et PME, et coordination de leur logistique : lieux, hébergement et déplacements."),
        T("Supported the programme's financial management, tracking budgets and processing invoices in line with EU financial procedures.",
          "Appui à la gestion financière du programme : suivi des budgets et traitement des factures selon les procédures financières de l'UE.")
      ]},
      { t: T("Customer Development and Analytics Intern", "Stagiaire Customer Development and Analytics"), o: "Unilever Belgium", d: T("Jun – Oct 2021", "juin – oct. 2021"), b: [
        T("Analysed Lipton sales across Belgian retail stores using Salesforce and Power BI, giving the Customer Development team insights for trade and retail strategies.",
          "Analyse des ventes Lipton dans la grande distribution belge avec Salesforce et Power BI, pour éclairer les stratégies commerciales de l'équipe Customer Development.")
      ]}
    ]},
    { id: "sport", c: "--o-green", h: T("Sport", "Sport"), groups: [
      { h: T("Certifications", "Certifications"), items: [
        { t: T("Introduction to Talent Identification, Level 1", "Introduction to Talent Identification, niveau 1"), o: "The Football Association", d: T("Aug 2026", "août 2026") },
        { t: T("Safeguarding Children", "Safeguarding Children (protection de l'enfance)"), o: "The Football Association", d: T("Sep 2026", "sept. 2026") }
      ]},
      { h: T("Volunteering", "Bénévolat"), items: [
        { t: T("Volunteer, Hockey World Cup 2026", "Bénévole, Coupe du monde de hockey 2026"), o: "International Hockey Federation (FIH), Wavre", d: T("Aug 2026", "août 2026"), b: [
          T("Volunteered for two weeks at the 2026 Hockey World Cup in Wavre: welcomed and guided supporters in the stands, delivered front-line customer service, and supported the organising team with crowd management and incident logging.",
            "Deux semaines de bénévolat à la Coupe du monde de hockey 2026 à Wavre : accueil et orientation des supporters dans les tribunes, service client en première ligne, et appui à l'équipe d'organisation pour la gestion des foules et le suivi des incidents.")
        ]}
      ]},
      { h: T("Sport experience", "Expérience sportive"), items: [
        { t: T("Football player, coach and referee", "Joueur, entraîneur et arbitre de football"), o: T("Belgium", "Belgique"), d: T("2008 – 2020", "2008 – 2020"), p: T(
          "10+ years of club football (Kraainem FC, 2008–2014) and university football (ULB Owls, 2017–2020); grassroots coaching at FC Saint-Michel and match refereeing in Brussels (2018).",
          "Plus de dix ans de football en club (Kraainem FC, 2008–2014) et à l'université (ULB Owls, 2017–2020) ; entraînement chez les jeunes au FC Saint-Michel et arbitrage de matchs amateurs à Bruxelles (2018).") }
      ]}
    ]},
    { id: "education", c: "--o-blue", h: T("Education", "Formation"), items: [
      { t: T("MSc Sport Analytics and Artificial Intelligence", "MSc Sport Analytics and Artificial Intelligence"), o: "Loughborough University London", d: T("2026 – 2027", "2026 – 2027") },
      { t: T("Postgraduate Programme in Sport Management", "Programme post-universitaire en management du sport"), o: T("Belgian Olympic Academy, Belgian Olympic Committee", "Académie Olympique de Belgique, Comité Olympique Belge"), d: T("2025 – 2026", "2025 – 2026") },
      { t: T("MSc International Management", "MSc International Management"), o: "ESADE Business School", d: T("2020 – 2021", "2020 – 2021") },
      { t: T("BSc Economics", "Bachelier en sciences économiques"), o: "Solvay Brussels School of Economics and Management", d: T("2017 – 2020", "2017 – 2020") }
    ]},
    { id: "research", c: "--o-red", h: T("Research", "Recherche"), items: [
      { t: T("“E-Sports beyond simulation”", "« E-Sports beyond simulation »"), o: T("Final work, Belgian Olympic Academy (Postgraduate Programme in Sport Management), Belgian Olympic Committee", "Travail de fin d'études, Académie Olympique de Belgique (programme post-universitaire en management du sport), Comité Olympique Belge"), d: T("Dec 2025", "déc. 2025"), p: T(
        "Examined how the IOC's engagement with e-sports is redefining “sport” and what it means for Belgium. Drawing on stakeholder interviews and cases from South Korea, Finland, Sweden and France, it recommends integrating sport-simulation titles into existing Belgian federations as a first step towards embedding e-sports in the Olympic movement.",
        "Analyse de la manière dont l'engagement du CIO envers l'e-sport redéfinit la notion de « sport », et de ses implications pour la Belgique. À partir d'entretiens et de cas en Corée du Sud, Finlande, Suède et France, le travail recommande d'intégrer d'abord les jeux de simulation sportive dans les fédérations belges existantes, comme première étape vers l'intégration de l'e-sport dans le mouvement olympique."),
        cta: T("Read the thesis (PDF)", "Lire le travail (PDF)"), href: "thesis.pdf" }
    ]},
    { id: "skills", c: "--o-black", h: T("Skills", "Compétences"), chips: [
      { label: T("Data & business tools", "Données & outils"), items: ["Python", "SQL", "Power BI", "Salesforce"] },
      { label: T("Office", "Bureautique"), items: ["Microsoft 365 (Excel, Word, PowerPoint, Outlook, Teams)"] }
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
