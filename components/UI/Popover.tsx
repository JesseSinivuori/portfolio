import { Popover as HUIPopover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import styles from "../../styles/style";
import Link from "next/link";

interface Link {
  name: string;
  description: string;
  href: string;
  icon: () => JSX.Element;
}

export default function Popover({ links }: { links: Link[] }) {
  return (
    <div className="flex max-w-sm ">
      <HUIPopover className="">
        {({ open, close }) => (
          <>
            <HUIPopover.Button
              className={`
                ${open ? "" : "text-opacity-75"}
                group inline-flex items-center rounded-md bg-transparent px-3 py-2 text-base font-medium text-white outline-none ring-transparent hover:text-opacity-100 hover:ring-1 hover:ring-white hover:ring-opacity-75`}
            >
              <span>Projects</span>
              <span
                className={`${open ? "" : " opacity-75"}
                  ml-2 h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-opacity-100 `}
                aria-hidden="true"
              >
                {ChevronDownIcon}
              </span>
            </HUIPopover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
            >
              <HUIPopover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-nav ring-opacity-5 ">
                  <div className="relative grid gap-8 bg-nav p-7 lg:grid-cols-2 ">
                    {links.map((item) => (
                      <Link
                        onClick={close}
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center  rounded-lg p-2 transition duration-150 ease-in-out hover:bg-zinc-800/75 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50 focus-visible:hover:ring-white"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p
                            className={`text-sm font-medium ${styles.heading2}`}
                          >
                            {item.name}
                          </p>
                          <p className={`text-sm ${styles.paragraph}`}>
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </HUIPopover.Panel>
            </Transition>
          </>
        )}
      </HUIPopover>
    </div>
  );
}

const ChevronDownIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    className="h-6 w-6"
  >
    <path
      fill-rule="evenodd"
      d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
      clip-rule="evenodd"
    />
  </svg>
);
