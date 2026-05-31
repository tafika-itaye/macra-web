export interface Download {
  title: string;
  category: string;
  filename: string;
}

export const featuredDownloads: Download[] = [
  { title: "Annual Report 2024", category: "Annual Reports", filename: "annual-report-2024.pdf" },
  { title: "Telecommunications Tariff Schedule", category: "Tariffs", filename: "tariff-telecoms.pdf" },
  { title: "Broadcasting Tariff Schedule", category: "Tariffs", filename: "tariff-broadcasting.pdf" },
  { title: "Postal and Courier Tariff Schedule", category: "Tariffs", filename: "tariff-postal.pdf" },
  { title: "Consumer Complaint Form", category: "Consumer Protection", filename: "consumer-complaint-form.pdf" },
  { title: "Telecommunications Licence Application", category: "Application Forms", filename: "licence-application-telecoms.pdf" },
  { title: "Broadcasting Licence Application", category: "Application Forms", filename: "licence-application-broadcasting.pdf" },
  { title: "Postal and Courier Licence Application", category: "Application Forms", filename: "licence-application-postal.pdf" },
];

export const annualReports: Download[] = [
  { title: "Annual Report 2024", category: "Annual Reports", filename: "annual-report-2024.pdf" },
];

export const applicationForms: Download[] = [
  { title: "Telecommunications Licence Application", category: "Application Forms", filename: "licence-application-telecoms.pdf" },
  { title: "Broadcasting Licence Application", category: "Application Forms", filename: "licence-application-broadcasting.pdf" },
  { title: "Postal and Courier Licence Application", category: "Application Forms", filename: "licence-application-postal.pdf" },
  { title: "Consumer Complaint Form", category: "Consumer Protection", filename: "consumer-complaint-form.pdf" },
];
