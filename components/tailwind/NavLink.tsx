import Link from "next/link"
import { useRouter } from "next/router"

interface Props {
  link: string
  title: string
}

const NavLink = ({ link, title }: Props) => {
  const router = useRouter()
  const active = link === router.asPath

  return (
    <Link href={link} passHref>
      <a
        className={`mr-2 p-3 font-semibold hover:bg-neutral-100 hover:text-blue-400 md:mr-4 ${
          active
            ? "border-b-2 border-b-blue-500 font-bold text-blue-500 decoration-blue-500"
            : "text-neutral-500"
        }`}>
        {title}
      </a>
    </Link>
  )
}

export default NavLink
