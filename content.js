// CV content. Section ids are stable: analytics aggregate by them, so never rename an id.
// Per-application tailoring lives in a/<code>.json ({"summary":{"en":"...","fr":"..."}}), loaded only when ?a=<code> is in the URL.
const T = (en, fr) => ({ en, fr });
const CV = {
  name: "Thomas Mavrogonatos",
  tag: T("Sport analytics & strategy · MSc Sport Analytics & AI, Loughborough University London",
         "Analyse sportive & stratégie · MSc Sport Analytics & AI, Loughborough University London"),
  place: T("Camden, London", "Camden, Londres"),
  links: [
    { k: "email", label: "tom_mavro@hotmail.com", href: "mailto:tom_mavro@hotmail.com" },
    { k: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/thomasmavrogonatos/" },
    { k: "github", label: "GitHub", href: "https://github.com/ThomasMavro" },
    { k: "substack", label: "Substack", href: "https://substack.com/@thomasmavrogonatos" }
  ],
  sections: [
    { id: "profile", c: "--o-blue", h: T("Profile", "Profil"), text: T(
      "I am studying an MSc in Sport Analytics and Artificial Intelligence at Loughborough University London, after five years of strategy consulting at Monitor Deloitte delivering EU programmes. I am trained in talent identification by The FA, played club and university football in Belgium for over ten years, and volunteered at the FIH Hockey World Cup 2026. I want to build a career in sport, from performance and recruitment analytics to strategy, governance and event operations.",
      "Je suis étudiant en MSc Sport Analytics and Artificial Intelligence à Loughborough University London, après cinq ans de conseil en stratégie chez Monitor Deloitte sur des programmes européens. Formé à l'identification des talents par The FA, j'ai joué au football en club et à l'université en Belgique pendant plus de dix ans, et j'ai été bénévole à la Coupe du monde de hockey FIH 2026. Je souhaite construire une carrière dans le sport, de l'analyse de performance et de recrutement à la stratégie, la gouvernance et l'organisation d'événements.") },
    { id: "experience", c: "--o-black", h: T("Experience", "Expérience professionnelle"), items: [
      { t: T("Senior Consultant", "Senior Consultant"), o: "Monitor Deloitte Belgium", d: T("2022 – 2026 (on leave)", "2022 – 2026 (en congé)"), b: [
        T("Business Analyst (2022–2023): EU Digital Identity Wallet, on electronic Identification, Authentication and Trust Services (eIDAS) and the Once-Only Principle (OOP).",
          "Business Analyst (2022–2023) : EU Digital Identity Wallet, sur l'identification électronique, l'authentification et les services de confiance (eIDAS) et le principe « Once-Only » (OOP)."),
        T("Consultant (2024): prepared mobility plans for large Belgian agglomerations, supporting strategic planning for regional transport and mobility policy.",
          "Consultant (2024) : préparation de plans de mobilité pour de grandes agglomérations belges, en appui à la planification stratégique des transports régionaux."),
        T("Senior Consultant (2025–2026): implemented the EU Business Hub, the latest edition of the EU Gateway Programme, helping EU start-ups and SMEs expand into Japan and the Republic of Korea.",
          "Senior Consultant (2025–2026) : mise en œuvre de l'EU Business Hub, dernière édition du programme EU Gateway, qui aide les start-ups et PME européennes à se développer au Japon et en République de Corée.")
      ]},
      { t: T("Customer Development and Analytics Intern", "Stagiaire Customer Development and Analytics"), o: "Unilever Belgium", d: T("Jun – Oct 2021", "juin – oct. 2021"), b: [
        T("Analysed Lipton sales across Belgian retail stores, giving the Customer Development team insights for trade and retail strategies.",
          "Analyse des ventes Lipton dans la grande distribution belge, pour éclairer les stratégies commerciales de l'équipe Customer Development.")
      ]}
    ]},
    { id: "football", c: "--o-green", h: T("Football & scouting", "Football & détection"), items: [
      { t: T("Introduction to Talent Identification, Level 1", "Introduction to Talent Identification, niveau 1"), o: "The Football Association", d: T("Aug 2026", "août 2026") },
      { t: T("Safeguarding Children", "Safeguarding Children (protection de l'enfance)"), o: "The Football Association", d: T("Sep 2026", "sept. 2026") },
      { t: T("University football player", "Joueur universitaire"), o: "ULB Owls, Ixelles", d: T("2017 – 2020", "2017 – 2020") },
      { t: T("Casual coaching", "Entraîneur occasionnel"), o: "FC Saint-Michel, Evere", d: T("Aug – Sep 2018", "août – sept. 2018") },
      { t: T("Grassroots match refereeing", "Arbitrage de matchs amateurs"), o: "Brussels", d: T("Jun – Sep 2018", "juin – sept. 2018") },
      { t: T("Club player", "Joueur en club"), o: "Kraainem FC, Brussels", d: T("2008 – 2014", "2008 – 2014") }
    ]},
    { id: "volunteering", c: "--o-red", h: T("Volunteering", "Bénévolat"), items: [
      { t: T("Volunteer, Hockey World Cup 2026", "Bénévole, Coupe du monde de hockey 2026"), o: "International Hockey Federation (FIH), Wavre", d: T("Aug 2026", "août 2026"), p: T(
        "Two weeks welcoming supporters, guiding them in the stands, and supporting the organising team with crowd management and incident logging.",
        "Deux semaines à accueillir les supporters, les orienter dans les tribunes et appuyer l'équipe d'organisation pour la gestion des foules et le suivi des incidents.") }
    ]},
    { id: "research", c: "--o-yellow", h: T("Research", "Recherche"), items: [
      { t: T("“E-Sports beyond simulation”", "« E-Sports beyond simulation »"), o: T("Final work, Postgraduate Programme in Sport Management, Belgian Olympic Committee", "Travail de fin d'études, programme post-universitaire en management du sport, Comité Olympique Belge"), d: T("Dec 2025", "déc. 2025"), p: T(
        "Examined how the IOC's engagement with e-sports is redefining “sport” and what it means for Belgium. Drawing on stakeholder interviews and cases from South Korea, Finland, Sweden and France, it recommends integrating sport-simulation titles into existing Belgian federations as a first step towards embedding e-sports in the Olympic movement.",
        "Analyse de la manière dont l'engagement du CIO envers l'e-sport redéfinit la notion de « sport », et de ses implications pour la Belgique. À partir d'entretiens et de cas en Corée du Sud, Finlande, Suède et France, le travail recommande d'intégrer d'abord les jeux de simulation sportive dans les fédérations belges existantes, comme première étape vers l'intégration de l'e-sport dans le mouvement olympique."),
        cta: T("Read the thesis (PDF)", "Lire le travail (PDF)"), href: "thesis.pdf" }
    ]},
    { id: "education", c: "--o-blue", h: T("Education", "Formation"), items: [
      { t: T("MSc Sport Analytics and Artificial Intelligence", "MSc Sport Analytics and Artificial Intelligence"), o: "Loughborough University London", d: T("2026 – 2027", "2026 – 2027") },
      { t: T("Postgraduate Programme in Sport Management", "Programme post-universitaire en management du sport"), o: T("Belgian Olympic Committee", "Comité Olympique Belge"), d: T("2025 – 2026", "2025 – 2026") },
      { t: T("MSc International Management", "MSc International Management"), o: "ESADE Business School", d: T("2020 – 2021", "2020 – 2021") },
      { t: T("BSc Economics", "Bachelier en sciences économiques"), o: "Solvay Brussels School of Economics and Management", d: T("2017 – 2020", "2017 – 2020") }
    ]},
    { id: "skills", c: "--o-black", h: T("Skills & languages", "Compétences & langues"), chips: [
      ["Python", "SQL", "Power BI", "Excel"],
      [T("English · fluent (C2)", "Anglais · courant (C2)"), T("French · native", "Français · langue maternelle"), T("Spanish · B1", "Espagnol · B1"), T("Dutch · A2", "Néerlandais · A2"), T("Korean · A1", "Coréen · A1")]
    ]},
    { id: "interests", c: "--o-green", h: T("Interests", "Centres d'intérêt"), chips: [
      [T("Multi-instrumental music", "Musique (multi-instrumentiste)"), T("Football & tennis", "Football & tennis"), T("Financial markets", "Marchés financiers")]
    ]}
  ]
};

const FOOT = T("This site counts visits and section views without cookies or personal data.", "Ce site mesure les visites et la lecture des sections, sans cookies ni données personnelles.");
