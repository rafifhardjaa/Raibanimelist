import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const UserActionButton  = async () => {
  const user = await getServerSession(authOptions);
  const actionLabel = user ? "Sign Out" : "Sign In"
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

  return (
    <div>
      <Link href={actionURL} className="text-2xl text-color-primary">{actionLabel}</Link>
    </div>
  )
}

export default UserActionButton;