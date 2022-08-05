import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <p>Hello</p>
      <Link href="/ssg" passHref>
        <a>SSG</a>
      </Link>
    </div>
  );
};

export default Home;
