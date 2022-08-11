import Link from "next/link"
import { useRouter } from "next/router"
import { forwardRef } from "react"

interface Props {
  link: string
  title: string
}

const NavLink = forwardRef<HTMLAnchorElement, Props>(
  ({ link, title, ...rest }, ref) => {
    const router = useRouter()
    const active = link === router.asPath

    return (
      <Link href={link}>
        <a
          ref={ref}
          {...rest}
          className={`mr-2 p-3 font-semibold hover:bg-neutral-100 hover:text-blue-400 md:mr-4 ${
            active
              ? "block w-full bg-gray-100 px-4 py-2 text-left text-sm text-neutral-900"
              : "block w-full px-4 py-2 text-left text-sm text-neutral-700"
          }`}>
          {title}
        </a>
      </Link>
    )
  }
)

NavLink.displayName = "NavLink"
export default NavLink
