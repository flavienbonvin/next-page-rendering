import Divider from "./atoms/Divider"

interface Props {
  pageStrategy: "ISR" | "SSG" | "SSR"
  explainationText: string
  bulletPoints: string[]
}

const PresentationText = ({
  pageStrategy,
  explainationText,
  bulletPoints,
}: Props) => {
  return (
    <div className="mb-10 rounded-lg bg-neutral-100 p-4 lg:w-2/3">
      <p className="text-neutral-700">
        This page was built using the following data fetching strategy:{" "}
        <span className="font-bold">{pageStrategy}</span>
      </p>
      <Divider />
      <p className="mb-5 text-neutral-700">{explainationText}</p>
      <p className="text-neutral-700">
        Here are some points to consider when it comes to {pageStrategy}:
      </p>
      <ul>
        {bulletPoints.map((point, num) => (
          <li
            key={num}
            className="ml-4 list-outside list-disc text-neutral-700">
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default PresentationText
