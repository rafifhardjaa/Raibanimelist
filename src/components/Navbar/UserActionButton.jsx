import Link from 'next/link';
export const UserActionButton = () => {
  return (
    <div>
      <Link href="/api/auth/signin" className="text-2xl text-color-primary">Sign In</Link>
    </div>
  )
}

export default UserActionButton;