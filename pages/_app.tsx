import type { AppProps } from "next/app"
import Nav from "../components/tailwind/Nav"
import "../styles/global.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
