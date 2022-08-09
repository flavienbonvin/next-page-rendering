export const ISR_METHOD = "getStaticProps (with revalidate)"

export const ISR_EXPLAINATION =
  "ISR means that the pages are compiled at build time and are incrementally recreated once a given delay is reached. This is especially useful for pages where the content can change but don’t have to be live"

export const ISR_BULLETS = [
  "ISR allow rebuilding pages without required a rebuild of the whole website",
  "ISR helps reduce the build time of a project since not all the pages need to be built",
  "Not the appropriate solution for pages where data are often updated (Reddit feed for example)",
  "On-demand revalidation is a more advanced feature that can be used to update specific parts of a website",
]

export const SSG_METHOD = "getStaticProps"

export const SSG_EXPLAINATION =
  "SSG are pages that are compiled only once, at compile time. Unlike ISR, it's not possible to regenerate a page, this means that pages won't change until the next deployment"

export const SSG_BULLETS = [
  "SSG is really nice for pages that contain static content such as a contact or about page",
  "It's possible to send a minimal amount of JavaScript to the browser ensuring lighting fast page loads",
  "SSG is a term to define something that was done for decades on the web, the server serves a static content",
  "Having many pages that are built at compile time can lengthen project deployment",
]

export const SSR_METHOD = "getServerSideProps"

export const SSR_EXPLAINATION =
  "SSR are pages that are built at request time on the server. This is particularly useful for pages that contain dynamic content that needs to be fresh (on a social network feed for example)"

export const SSR_BULLETS = [
  "SSR pages are great to get dynamic content or customize the pages depending on user testing or setting",
  "SSR pages can have poorer performance since the request made on the server needs to be resolved first",
  "To speed pages rendering defining a cache in the response header is great (using Cache-Control)",
  "If the request takes too much time, it's recommended to quickly return a skeleton and fetch data on clients",
]
