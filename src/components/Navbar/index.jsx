import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="bg-color-secondary/80 backdrop-blur-md shadow-lg">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href="/" className=" text-4xl font-bold text-color-primary drop-shadow-md animate-pulse bg-gradient-to-r from-color-primary to-primary/800 bg-clip-text text-transparent">
          ANIMEWORLD.ME
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};

export default Navbar;
