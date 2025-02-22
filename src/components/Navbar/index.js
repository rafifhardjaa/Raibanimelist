import Link from "next/link";
import inputSearch from "./inputSearch";

const Navbar = () => {
  return (
    <header className="bg-indigo-400">
      <div className="flex justify-between md:flex-row flex-col p-4">
        <Link href="" className="font-bold text-white text-2xl">
          RAIB ANIMELIST
        </Link>
        <inputSearch />
      </div>
    </header>
  );
};

export default Navbar;
