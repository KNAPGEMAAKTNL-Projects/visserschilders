export interface Project {
    slug: string;
    title: string;
    category: string;
    image: string;
    description: string;
    seoDescription?: string;
    features?: string[];
    details?: {
        year: string;
        location: string;
        service: string;
    };
    gallery?: string[];
    challenge?: string;
    solution?: string;
    size?: string;
}

export const projects: Project[] = [
    {
        title: "Stadsboerderij Geldermalsen",
        slug: "stadsboerderij-geldermalsen",
        category: "Restauratie",
        image: "/images/photo-1600585154340-be6161a56a0c.webp",
        description: "Een monumentale stadsboerderij die zijn oude glorie terugkreeg. Wij verzorgden het complete buitenschilderwerk, inclusief houtrotreparaties en het herstellen van authentieke details.",
        seoDescription: "Volledige restauratie en buitenschilderwerk van een monumentale stadsboerderij in Geldermalsen door Schildersbedrijf Visser.",
        features: ["Herstel houtrot", "Klassiek kleurgebruik", "Monumentaal glas", "Authentieke detaillering"],
        details: {
            year: "2023",
            location: "Geldermalsen",
            service: "Buitenschilderwerk & Restauratie"
        },
        challenge: "Het houtwerk verkeerde in slechte staat door achterstallig onderhoud. Veel authentieke profileringen waren aangetast door houtrot, wat vroeg om specialistisch herstelwerk voordat er geschilderd kon worden.",
        solution: "We hebben gebruik gemaakt van het Repair Care systeem voor duurzaam houtrotherstel. Vervolgens is het pand geschilderd met een vochtregulerend verfsysteem in historisch verantwoorde kleuren, passend bij het dorpsgezicht.",
        gallery: [
            "/images/photo-1600585154340-be6161a56a0c.webp",
            "/images/photo-1523413651479-597eb2da0ad6.webp", // Brick/Window detail
            "/images/photo-1595853035070-59a39fe84de3.webp" // Wood detail
        ],
        size: "md:col-span-2 md:row-span-2",
    },
    {
        title: "Detail Lakwerk Entree",
        slug: "detail-lakwerk",
        category: "Binnenschilderwerk",
        image: "/images/photo-1556912173-3bb406ef7e77.webp",
        description: "De entree is het visitekaartje van de woning. Voor dit herenhuis hebben we de trap, deuren en lambrisering voorzien van hoogwaardig lakwerk met een extreem hoge glansgraad.",
        seoDescription: "Exclusief lakwerk in Tiel. Hoogglans afwerking van deuren, trappen en kozijnen.",
        details: {
            year: "2024",
            location: "Tiel",
            service: "Binnenschilderwerk"
        },
        challenge: "De bestaande verflagen waren beschadigd en onregelmatig. De klant wenste een 'spiegelglad' resultaat, wat extreem hoge eisen stelt aan de voorbewerking.",
        solution: "We hebben alle ondergronden volledig kaal gemaakt en opnieuw opgebouwd met meerdere lagen grondverf, tussendoor fijn geschuurd. De eindafwerking is gedaan met Sikkens hoogglans lak voor een diepe, rijke glans.",
        gallery: [
            "/images/photo-1556912173-3bb406ef7e77.webp",
            "/images/photo-1617806118233-18e1de247200.webp", // Clean wall/door
            "/images/photo-1560448204-e02f11c3d0e2.webp" // Staircase detail
        ],
        size: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Villa Tiel",
        slug: "villa-tiel",
        category: "Buitenschilderwerk",
        image: "/images/photo-1600585154340-be6161a56a0c.webp",
        description: "Strakke lijnen en een moderne uitstraling. Voor deze villa hebben we gekozen voor een kleurenpalet dat de architectuur versterkt en beschermt tegen weer en wind.",
        seoDescription: "Modern buitenschilderwerk Villa Tiel. Duurzame bescherming en strakke afwerking.",
        details: {
            year: "2023",
            location: "Tiel",
            service: "Buitenschilderwerk"
        },
        challenge: "De woning staat in een open gebied en vangt veel wind en regen. De gevelbekleding moest daarom optimaal beschermd worden zonder de natuurlijke uitstraling te verliezen.",
        solution: "We hebben een semi-dekkende beits toegepast die de houtnerf zichtbaar laat maar maximale UV-bescherming biedt. De kozijnen zijn strak in de lak gezet voor een mooi contrast.",
        gallery: [
            "/images/photo-1600585154340-be6161a56a0c.webp",
            "/images/photo-1600607687939-ce8a6c25118c.webp", // Modern villa detail
            "/images/photo-1598928506311-c55ded91a20c.webp" // Modern exterior
        ],
        size: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Marmerstuc Badkamer",
        slug: "marmerstuc-badkamer",
        category: "Wandafwerking",
        image: "/images/photo-1552321554-5fefe8c9ef14.webp",
        description: "Een luxe, spa-achtige uitstraling dankzij naadloze wandafwerking. Waterdicht, hygiënisch en met een unieke handtekening.",
        seoDescription: "Luxe badkamer renovatie met marmerstuc en betonlook in Buren.",
        details: {
            year: "2024",
            location: "Buren",
            service: "Wandafwerking"
        },
        challenge: "De klant wilde af van de standaard tegels en zocht een naadloze, warme oplossing die toch volledig waterdicht was voor in de doucheruimte.",
        solution: "We hebben Beton Ciré aangebracht in meerdere dunne lagen. Door de speciale coating is de wand volledig waterafstotend en schimmelwerend, met de luxe uitstraling van natuursteen.",
        gallery: [
            "/images/photo-1552321554-5fefe8c9ef14.webp", // White bathroom (Main)
            "/images/photo-1631679706909-1844bbd07221.webp", // Modern Bath
            "/images/photo-1560185893-a55cbc8c57e8.webp" // Texture
        ],
        size: "md:col-span-1 md:row-span-2",
    },
    {
        title: "Herenhuis Culemborg",
        slug: "herenhuis-culemborg",
        category: "Binnenschilderwerk",
        image: "/images/photo-1618221195710-dd6b41faaea6.webp",
        description: "Een harmonieus interieur waarin kleuren en materialen perfect op elkaar zijn afgestemd. Kalkverf op de wanden geeft de ruimte een zachte, levendige sfeer.",
        seoDescription: "Interieurstyling en schilderwerk Herenhuis Culemborg. Kalkverf en lakwerk.",
        details: {
            year: "2023",
            location: "Culemborg",
            service: "Binnenschilderwerk & Wandafwerking"
        },
        gallery: [
            "/images/photo-1618221195710-dd6b41faaea6.webp",
            "/images/photo-1615529182904-14819c35db37.webp", // Living room
            "/images/photo-1595853035070-59a39fe84de3.webp" // Detail
        ],
        size: "md:col-span-1 md:row-span-1 lg:col-span-2",
    },
    {
        title: "Monumentaal Plafond",
        slug: "monumentaal-plafond",
        category: "Restauratie",
        image: "/images/photo-1560448205-4d9b3e6bb6db.webp",
        description: "Het herstel van een zwaar beschadigd ornamentenplafond. Met engelengeduld en vakmanschap zijn de details in ere hersteld.",
        seoDescription: "Restauratie ornamentenplafond Zaltbommel. Traditioneel witkalk en gipsherstel.",
        details: {
            year: "2022",
            location: "Zaltbommel",
            service: "Plafondrestauratie"
        },
        gallery: [
            "/images/photo-1560448205-4d9b3e6bb6db.webp",
            "/images/photo-1562663474-6cbb3eaa4d14.webp", // Ceiling detail
            "/images/photo-1560185008-b033106af5c3.webp" // Classic interior
        ],
        size: "md:col-span-2 md:row-span-1",
    },
];
