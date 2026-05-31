import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page Not Found" subtitle="404" />
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-600 mb-6 text-sm">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-[#E30613] text-white px-6 py-3 rounded hover:bg-[#E30613] transition-colors text-sm"
        >
          Return to Home
        </Link>
      </div>
    </>
  );
}
