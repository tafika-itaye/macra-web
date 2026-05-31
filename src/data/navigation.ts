export type NavChild = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavChild[];
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navigation: NavItem[] = [
  {
    label: "About Us",
    href: "/about-us/organisation",
    children: [
      { label: "Organisation", href: "/about-us/organisation" },
      { label: "Board of Directors", href: "/about-us/board-of-directors" },
      { label: "Management", href: "/about-us/management" },
      {
        label: "Directorates and Departments",
        href: "#",
        children: [
          { label: "Executive", href: "/about-us/directorates/executive" },
          { label: "Administration and Human Resource", href: "/about-us/directorates/admin-hr" },
          { label: "Broadcasting", href: "/about-us/directorates/broadcasting" },
          { label: "Finance", href: "/about-us/directorates/finance" },
          { label: "Legal Services", href: "/about-us/directorates/legal-services" },
          { label: "Postal", href: "/about-us/directorates/postal" },
          { label: "Telecommunications", href: "/about-us/directorates/telecommunications" },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services/telecommunications",
    children: [
      {
        label: "Telecommunications",
        href: "/services/telecommunications",
        children: [
          { label: "Licensing", href: "/services/telecommunications/licensing" },
          { label: "Quality of Service", href: "/services/telecommunications/qos" },
          { label: "Type Approval", href: "/services/telecommunications/type-approval" },
          { label: "Spectrum", href: "/services/telecommunications/spectrum" },
          { label: "Numbering", href: "/services/telecommunications/numbering" },
          { label: "Fault Handling Regulations", href: "/services/telecommunications/fault-handling" },
        ],
      },
      {
        label: "Broadcasting",
        href: "/services/broadcasting",
        children: [
          { label: "Licensing", href: "/services/broadcasting/licensing" },
          { label: "Quality of Service", href: "/services/broadcasting/qos" },
          { label: "Broadcasting Frequencies", href: "/services/broadcasting/frequencies" },
        ],
      },
      {
        label: "Postal and Courier",
        href: "/services/postal",
        children: [
          { label: "Licensing", href: "/services/postal/licensing" },
          { label: "Licensees", href: "/services/postal/licensees" },
          { label: "Quality of Service", href: "/services/postal/qos" },
          { label: "National Addressing Project", href: "/services/postal/national-addressing" },
          { label: "Post Codes", href: "/services/postal/post-codes" },
        ],
      },
    ],
  },
  {
    label: "Consumer Protection",
    href: "/consumer-protection/consumer-affairs",
    children: [
      { label: "Consumer Affairs", href: "/consumer-protection/consumer-affairs" },
      { label: "Consumer Rights and Obligations", href: "/consumer-protection/rights-obligations" },
      { label: "Consumer Complaints", href: "/consumer-protection/consumer-complaints" },
    ],
  },
  {
    label: "MACRA and Community",
    href: "/macra-and-community",
    children: [
      { label: "Service Charter", href: "/macra-and-community/service-charter" },
      { label: "Social Enterprise Responsibility", href: "/macra-and-community/social-enterprise-responsibility" },
      { label: "Projects", href: "/macra-and-community/projects" },
    ],
  },
  {
    label: "Quick Links",
    href: "#",
    children: [
      { label: "Malawi CERT", href: "/quick-links/cert" },
      { label: "USF Stakeholder Consultations", href: "/quick-links/usf-consultations" },
      { label: "Muuni Innovation Fund", href: "https://muuni.mw", external: true },
      { label: "Mvera Innovation City", href: "https://mvera.mw", external: true },
    ],
  },
  {
    label: "Media",
    href: "/media/news",
    children: [
      { label: "News", href: "/media/news" },
      { label: "Acts", href: "/media/acts" },
      { label: "Rules and Regulations", href: "/media/rules-regulations" },
      { label: "Policies", href: "/media/policies" },
      { label: "Application Forms", href: "/media/application-forms" },
      { label: "Annual Reports", href: "/media/annual-reports" },
      { label: "Research", href: "/media/research" },
      { label: "MACRA Magazine", href: "/media/macra-magazine" },
      { label: "Determinations", href: "/media/determinations" },
      { label: "QoS Reports", href: "/media/qos-reports" },
      { label: "General Reports", href: "/media/general-reports" },
      { label: "Regulations", href: "/media/regulations" },
      { label: "Adverts", href: "/media/adverts" },
    ],
  },
  {
    label: "Vacancies",
    href: "/vacancies",
  },
];
