type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <div className="bg-[#003087] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-blue-200 text-sm">{subtitle}</p>}
      </div>
    </div>
  );
}
