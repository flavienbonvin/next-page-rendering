import { LinkButton } from "./atoms/Button"

interface Props {
  linkText: string
  docLink: string
  method: string
  date?: string
}

const PageHeader = ({ linkText, docLink, method, date }: Props) => {
  return (
    <div className="pb-8">
      <div className="mb-2 flex place-content-between">
        <div>
          <h1 className="mr-2 inline-block text-3xl font-bold">Pokemon list</h1>
          {date && (
            <pre className="inline-block text-sm">(last build: {date})</pre>
          )}
        </div>
        <LinkButton href={docLink} text={linkText} />
      </div>
      <div>
        <div className="inline-block">
          Method to use: <pre className="inline-block text-sm">{method}</pre>
        </div>
      </div>
    </div>
  )
}
export default PageHeader
