import type { NextPage } from "next"
import Link from "next/link"
import {
  ROUTE_CHAKRA_ISR,
  ROUTE_CHAKRA_SSR,
  ROUTE_TAIL_ISR,
  ROUTE_TAIL_SSG,
  ROUTE_TAIL_SSR,
} from "../constants/routes"

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default Home
