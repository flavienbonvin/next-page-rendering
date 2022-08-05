import {
  ROUTE_TAIL_SSG,
  ROUTE_TAIL_SSR,
  ROUTE_TAIL_ISR,
  ROUTE_CHARKA_SSG,
  ROUTE_CHAKRA_SSR,
  ROUTE_CHAKRA_ISR,
} from "../../constants/routes"
import NavLink from "./NavLink"

const Nav = () => {
  return (
    <nav className="sticky top-0 z-10 rounded-b-lg bg-white p-3 shadow-sm">
      <div className="mb-2 md:mb-0 md:inline">
        <NavLink title="/" link="/" />
      </div>
      <div className="mb-4 ml-0 md:mb-0 md:ml-4 md:inline">
        <NavLink title="SSG Tailwind" link={ROUTE_TAIL_SSG} />
        <NavLink title="SSR Tailwind" link={ROUTE_TAIL_SSR} />
        <NavLink title="ISR Tailwind" link={ROUTE_TAIL_ISR} />
      </div>
      <div className="ml-0 md:ml-4 md:mb-0 md:inline">
        <NavLink title="SSG Chakra" link={ROUTE_CHARKA_SSG} />
        <NavLink title="SSR Chakra" link={ROUTE_CHAKRA_SSR} />
        <NavLink title="ISR Chakra" link={ROUTE_CHAKRA_ISR} />
      </div>
    </nav>
  )
}

export default Nav
