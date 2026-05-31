import Link from "next/link";
import { bp } from "@/lib/basePath"

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-sm text-gray-500">
      <ol className="flex flex-wrap gap-1 items-center">
        <li>
          <Link href={bp("/")} className="hover:text-[#E30613]">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-[#E30613]">{item.label}</Link>
            ) : (
              <span aria-current="page" className="text-[#333333] font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
