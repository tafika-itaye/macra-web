import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="bg-[#003087] text-white py-24 px-4"
      aria-label="Homepage hero"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-[#C8A84B] font-medium mb-3 text-sm uppercase tracking-widest">
          Vision
        </p>
        <h1 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight mb-8">
          Communications services for a digitally transformed nation
        </h1>
        <Link
          href="/about-us/organisation"
          className="inline-block bg-[#C8A84B] text-[#003087] font-semibold px-6 py-3 rounded hover:brightness-110 transition-all"
        >
          About MACRA
        </Link>
      </div>
    </section>
  );
}
