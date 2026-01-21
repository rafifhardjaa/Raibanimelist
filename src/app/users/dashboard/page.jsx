import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
const Page = async () => {
  const user = await authUserSession();
  console.log(user);

  return (
    <div className="text-color-dark flex justify-center items-center flex-col mt-8 gap-5">
      <h5 className="text-2xl font-bold">Hello! Welcome, {user?.name}</h5>
      <Image src={user?.image} alt={user?.name} width={250} height={250} />
      <div className="flex flex-wrap gap-4 py-8">
      <Link href="/users/dashboard/collections" className="bg-color-accent text-color-light font-bold px-4 py-3 text-xl rounded hover:bg-color-primary ease-in-out duration-300">My Collections</Link>
      <Link href="/users/dashboard/comments" className="bg-color-accent text-color-light font-bold px-4 py-3 text-xl rounded hover:bg-color-primary ease-in-out duration-300">My Comment</Link>

      </div>
    </div>
  );
};
export default Page;
