export interface Service {
    slug: string;
    title: string;
    category: string;
    intro: string;
    description: string;
    features: string[];
    image: string;
}

export const services: Service[] = [
    {
        slug: "binnenschilderwerk",
        title: "Binnenschilderwerk",
        category: "Schilderwerk",
        intro: "Uw interieur verdient de hoogste afwerkingsgraad. Van plinten tot plafonds, wij zorgen voor een resultaat dat rust en klasse uitstraalt.",
        description: "De kwaliteit van binnenschilderwerk valt of staat met de voorbereiding. Wij nemen ruim de tijd voor het inspecteren van de ondergrond, het repareren van oneffenheden en het schuren. Pas als de basis perfect is, pakken we de kwast. Wij zorgen ervoor dat uw woning niet alleen mooier wordt, maar ook beschermd is voor de toekomst.",
        features: [
            "Inspectie en advies op maat",
            "Gebruik van A-merk verven (Sikkens, Sigma, Farrow & Ball)",
            "Stofvrij schuren met Festool apparatuur",
            "Garantie op uitgevoerd werk"
        ],
        image: "/images/photo-1560448204-e02f11c3d0e2.webp"
    },
    {
        slug: "buitenschilderwerk",
        title: "Buitenschilderwerk",
        category: "Schilderwerk",
        intro: "Bescherm uw pand tegen de elementen. Wij werken met hoogwaardige lakken die jarenlang hun glans behouden, zelfs in het Nederlandse klimaat.",
        description: "Buitenschilderwerk is essentieel voor het behoud van uw woning. Weersinvloeden zoals zon, regen en wind stellen uw houtwerk constant op de proef. Wij bieden een duurzame oplossing met verfsystemen die specifiek zijn ontwikkeld voor maximale bescherming en glansbehoud. Zo voorkomt u houtrot en hoge herstelkosten.",
        features: [
            "Grondige inspectie van houtwerk",
            "Vochtemeting en houtrotreparatie",
            "Hoogwaardige hoogglans of zijdeglans afwerking",
            "Onderhoudsplan op maat"
        ],
        image: "/images/photo-1600585154340-be6161a56a0c.webp"
    },
    {
        slug: "wandafwerking",
        title: "Exclusieve Wandafwerking",
        category: "Afwerking",
        intro: "Geef muren karakter met betonlook, marmerstuc of exclusief behang. Een statement in uw interieur.",
        description: "Wanden bepalen voor een groot deel de sfeer in uw woning. Of u nu kiest voor de robuuste uitstraling van betonlook, de pure luxe van marmerstuc (zoals Coristil), of een exclusief behang met rijke texturen: wij beheersen de technieken om uw visie werkelijkheid te maken.",
        features: [
            "Betonlook en Marmerstuc (Coristil)",
            "Exclusief behang (bijv. Arte, Elitis)",
            "Strak sauswerk met airless spuittechniek",
            "Advies in kleur en textuur"
        ],
        image: "/images/photo-1560185893-a55cbc8c57e8.webp"
    },
    {
        slug: "monumentaal",
        title: "Monumentaal Onderhoud",
        category: "Restauratie",
        intro: "Respect voor historie. Wij zijn gespecialiseerd in het restaureren van monumentale panden volgens de richtlijnen van ERM.",
        description: "Een monumentaal pand vraagt om een andere aanpak. Het gaat niet alleen om verfraaien, maar om conserveren. Wij hebben jarenlange ervaring met historische bouwmaterialen, authentieke kleurenwaaiers en traditionele schildertechnieken. Wij renoveren met liefde voor het ambacht en respect voor het verleden.",
        features: [
            "Kennis van historische bouwmaterialen",
            "Samenwerking met monumentenzorg mogelijk",
            "Authentiek kleurgebruik",
            "Restauratie van houtsnijwerk en ornamenten"
        ],
        image: "/images/photo-1523413651479-597eb2da0ad6.webp"
    },
    {
        slug: "spuitwerk",
        title: "Spuitwerk",
        category: "Specialisme",
        intro: "Efficiënt en streeploos resultaat voor wanden, plafonds én houtwerk.",
        description: "Spuitwerk biedt een afwerkingsniveau dat met de hand nauwelijks te evenaren is. Het resultaat is perfect egaal en streeploos. Daarnaast is het een zeer efficiënte methode, wat het interessant maakt voor grotere oppervlakken. Wij werken met moderne, nevelarme apparatuur waardoor overlast tot een minimum beperkt blijft.",
        features: [
            "Snel en efficiënt",
            "Absoluut streeploos eindresultaat",
            "Hoogwaardige dekking",
            "Nevelarm (minimale afplakwerkzaamheden)"
        ],
        image: "/images/photo-1600607687920-4e2a09cf159d.webp"
    },
    {
        slug: "meubels-restylen",
        title: "Meubels Restylen",
        category: "Interieur",
        intro: "Geef uw geliefde meubels een tweede leven met een professionele make-over.",
        description: "Waarom nieuwe meubels kopen als uw huidige meubels van goede kwaliteit zijn, maar qua kleur niet meer passen? Wij toveren uw kasten, tafels of stoelen om. Van een strakke moderne laklaag tot een landelijke 'used look' of een klassieke afwerking. Duurzaam en uniek.",
        features: [
            "Kleuradvies op maat",
            "Gebruik van, slijtvaste meubellakken",
            "Alle stijlen: Modern, Landelijk, Klassiek",
            "Herstel van kleine beschadigingen"
        ],
        image: "/images/photo-1532372320572-cda25653a26d.webp"
    },
    {
        slug: "verkoop-materialen",
        title: "Verkoop Verf & Materialen",
        category: "Service",
        intro: "Zelf aan de slag? Gebruik de materialen van de professional.",
        description: "Voor de doe-het-zelver die geen concessies wil doen aan kwaliteit. Wij verkopen dezelfde professionele verven en materialen waar wij zelf dagelijks mee werken. Denk aan topmerken zoals Sikkens en Sigma, maar ook de prachtige, authentieke krijtverven van Carte Colori. Inclusief ons advies, zodat u direct goed start.",
        features: [
            "Levering van Sikkens, Sigma en Carte Colori",
            "Professionele kwasten, rollers en tape",
            "Technische uitleg en kleuradvies",
            "Ook voor kleine hoeveelheden"
        ],
        image: "/images/photo-1562259949-e8e7689d7828.webp"
    }
];
