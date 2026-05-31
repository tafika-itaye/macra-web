import Image from "next/image";
import Link from "next/link";
import Topbar from "./Topbar";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <Topbar />
      <div className="bg-white py-3 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" aria-label="MACRA home">
            <Image
              src="/images/macra-logo.png"
              alt="MACRA - Malawi Communications Regulatory Authority"
              width={200}
              height={60}
              priority
            />
          </Link>
        </div>
      </div>
      <Nav />
    </header>
  );
}