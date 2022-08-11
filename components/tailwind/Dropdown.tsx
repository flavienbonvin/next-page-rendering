import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import NavLink from "./atoms/NavLink"

interface Props {
  buttonText: string
  links: { title: string; link: string }[]
}

const Dropdown = ({ buttonText, links }: Props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-gray-50">
        {buttonText}
        <ChevronDownIcon
          className="-mr-1 ml-2 h-5 w-5 text-neutral-700"
          aria-hidden="true"
        />
      </Menu.Button>

      <Transition
        as="div"
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-85"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-15">
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {links.map((item, index) => (
              <Menu.Item key={index}>
                <NavLink title={item.title} link={item.link} />
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown
