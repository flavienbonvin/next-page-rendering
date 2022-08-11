interface Props {
  text: string
  href: string
}

export const LinkButton = ({ text, href }: Props) => {
  return (
    <button className="rounded-md bg-neutral-100 py-2 px-4 font-medium hover:bg-neutral-200 hover:underline">
      <a href={href} target="_blank" rel="noreferrer">
        {text}
      </a>
    </button>
  )
}
