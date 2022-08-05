import Head from "next/head"

interface Props {
  title: string
}

const Meta = ({ title }: Props) => {
  const img = "/meta_iamge.png"
  const desc =
    "Simple project that shows how NextJS data fetching strategies has an effect on performance"

  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content="Flavien Bonvin" />
      <meta property="og:image" content={img} />
      <meta property="og:site_name" content="Flavien Bonvin" />
      <meta name="twitter:site" content="@flavienbonvin" />
      <meta name="twitter:creator" content="@flavienbonvin" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
      <meta name="description" content={desc} />
    </Head>
  )
}

export default Meta
