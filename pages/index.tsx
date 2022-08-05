import type { NextPage } from "next";
import Link from "next/link";
import {
  ROUTE_CHAKRA_ISR,
  ROUTE_CHAKRA_SSR,
  ROUTE_TAIL_ISR,
  ROUTE_TAIL_SSG,
  ROUTE_TAIL_SSR,
} from "../constants/routes";

const Home: NextPage = () => {
  return (
    <div>
      <p>Hello</p>
      <Link href={ROUTE_TAIL_SSG} passHref>
        <a>SSG Tailwind</a>
      </Link>
      <Link href={ROUTE_TAIL_SSR} passHref>
        <a>SSR Tailwind</a>
      </Link>
      <Link href={ROUTE_TAIL_ISR} passHref>
        <a>ISR Tailwind</a>
      </Link>

      <Link href={ROUTE_CHAKRA_SSR} passHref>
        <a>SSG Chakra</a>
      </Link>
      <Link href={ROUTE_CHAKRA_SSR} passHref>
        <a>SSR Chakra</a>
      </Link>
      <Link href={ROUTE_CHAKRA_ISR} passHref>
        <a>ISR Chakra</a>
      </Link>
    </div>
  );
};

export default Home;
