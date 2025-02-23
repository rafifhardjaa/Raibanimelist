import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-secondary/80 backdrop-blur-md shadow-lg">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href="/" className=" text-color-primary font-bold text-2xl">
          DEERANIMEKU
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
