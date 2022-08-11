import PlausibleProvider from "next-plausible"
import type { AppProps } from "next/app"
import Nav from "../components/tailwind/Nav"
import "../styles/global.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="next-speed.flavienbonvin.com">
      <Nav />
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default MyApp
