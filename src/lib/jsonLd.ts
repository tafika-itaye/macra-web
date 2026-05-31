const SITE_URL = "https://tafika-itaye.github.io/macra-web";
const ORG_NAME = "Malawi Communications Regulatory Authority";
const ORG_URL = "https://macra.mw";
const LOGO_URL = `${SITE_URL}/images/macra-logo.png`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    name: ORG_NAME,
    alternateName: "MACRA",
    url: ORG_URL,
    logo: LOGO_URL,
    sameAs: [ORG_URL],
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 Kasungu Crescent, Snr Chief Kapeni Campus",
      addressLocality: "Blantyre",
      postalCode: "312225",
      addressCountry: "MW",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+265-1-810-497",
      contactType: "customer service",
      areaServed: "MW",
      availableLanguage: "English",
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ORG_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function webPageSchema(title: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${title} | MACRA`,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: { "@type": "WebSite", url: SITE_URL },
    publisher: {
      "@type": "GovernmentOrganization",
      name: ORG_NAME,
      url: ORG_URL,
    },
  };
}

