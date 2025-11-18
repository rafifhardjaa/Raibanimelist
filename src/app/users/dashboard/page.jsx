import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
const Page = async () => {
  const user = await authUserSession();
  console.log(user);

  return (
    <div>
      <h3>Dashboard</h3>
      <h5>Welcome, {user.name}</h5>
      <Image src={user.image} alt={user.name} width={100} height={100} />
    </div>
  )
}
export default Page;