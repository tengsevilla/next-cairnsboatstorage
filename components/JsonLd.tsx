import { ClientInformation } from "@/data/ClientInformation";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const localBusiness = {
    "@context": "https://schema.org",
    "@type": "SelfStorage",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    logo: `${SITE_URL}/logo.png`,
    telephone: ClientInformation.contact,
    email: ClientInformation.email,
    address: {
        "@type": "PostalAddress",
        streetAddress: "459R Redbank Road",
        addressLocality: "Packers Camp",
        addressRegion: "QLD",
        postalCode: "4865",
        addressCountry: "AU",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: -17.011212,
        longitude: 145.797208,
    },
    hasMap: ClientInformation.mapLink,
    areaServed: {
        "@type": "City",
        name: "Cairns",
    },
    sameAs: [ClientInformation.facebook],
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "17:00",
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: "08:00",
            closes: "12:00",
        },
    ],
};

const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "en-AU",
    publisher: { "@id": `${SITE_URL}/#business` },
};

function JsonLdScript({ data }: { data: object }) {
    return (
        <script
            type="application/ld+json"
            // Values are project constants, not user input.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

/** LocalBusiness + WebSite graph, rendered once from the root layout. */
export default function JsonLd() {
    return (
        <>
            <JsonLdScript data={localBusiness} />
            <JsonLdScript data={website} />
        </>
    );
}

/** Per-page breadcrumb trail. `name` should match the page's nav label. */
export function BreadcrumbJsonLd({ name, path }: { name: string; path: string }) {
    return (
        <JsonLdScript
            data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: `${SITE_URL}/`,
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name,
                        item: `${SITE_URL}${path}`,
                    },
                ],
            }}
        />
    );
}
