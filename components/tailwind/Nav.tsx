import {
  ROUTE_TAIL_SSG,
  ROUTE_TAIL_SSR,
  ROUTE_TAIL_ISR,
  ROUTE_CHARKA_SSG,
  ROUTE_CHAKRA_SSR,
  ROUTE_CHAKRA_ISR,
} from "../../constants/routes"
import Dropdown from "./Dropdown"
import NavLink from "./atoms/NavLink"
import Link from "next/link"

const Nav = () => {
  const tailwindLinks = [
    { title: "SSG Tailwind", link: ROUTE_TAIL_SSG },
    { title: "ISR Tailwind", link: ROUTE_TAIL_ISR },
    { title: "SSR Tailwind", link: ROUTE_TAIL_SSR },
  ]

  const chakraLinks = [
    { title: "SSG Chakra", link: ROUTE_CHARKA_SSG },
    { title: "ISR Chakra", link: ROUTE_CHAKRA_ISR },
    { title: "SSR Chakra", link: ROUTE_CHAKRA_SSR },
  ]

  return (
    <nav className="sticky top-0 z-10 rounded-b-lg bg-white p-3 shadow-sm">
      <div className="flex place-content-between">
        <div className="my-auto h-full">
          <Link href="/" passHref>
            Home
          </Link>
        </div>
        <div className="grid grid-flow-col gap-4">
          <Dropdown buttonText="Tailwind" links={tailwindLinks} />
          <Dropdown buttonText="Chakra" links={chakraLinks} />
        </div>
      </div>
    </nav>
  )
}

export default Nav
