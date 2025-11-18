import Link from "next/link"

const Header = ({ title, subtitle, linkHref, linkTitle }) => {
  return (
    <div className="p-4 text-color-dark">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          {subtitle && (
            <p className="text-sm text-color-dark/60 mt-1">{subtitle}</p>
          )}
        </div>

        {linkHref && linkTitle && (
        <Link
          href={linkHref}
          className="
            px-3 py-1.5
            text-sm
            rounded-lg
            bg-color-primary/20
            text-color-dark
            hover:bg-color-accent
            hover:text-color-dark
            transition-all
          "
        >
          {linkTitle}
        </Link>
      )}
      </div>

      <div className="mt-2 h-[2px] w-14 bg-color-primary/80 rounded"></div>
    </div>
  )
}

export default Header;
