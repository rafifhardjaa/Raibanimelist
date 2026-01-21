import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const UserActionButton  = async () => {
  const user = await getServerSession(authOptions);
  const actionLabel = user ? "Sign Out" : "Sign In"
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

  return (
    <div className="flex justify-between gap-3 items-center">
      {
        user? <Link href="/users/dashboard" className=" text-color-primary py-1 hover:underline">Dashboard</Link> : null
      }
      <Link href={actionURL} className=" text-color-light bg-color-primary py-1 px-12 inline-block hover:underline">{actionLabel}</Link>
    </div>
  )
}

export default UserActionButton;