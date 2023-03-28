import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BsChevronDown } from "react-icons/bs";
import Link from 'next/link';
import { Squeeze as Hamburger } from 'hamburger-react'



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav2() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Menu as="div" className="pt-1 relative inline-block text-left self-center">
      <div>
        <Menu.Button className="inline-flex w-full justify-center self-center items-center text-slate-200">
          {/* Menu
          <BsChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
          <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/preferences"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Preferences
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                href="https://github.com/csvidit/snapshot"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                Project details
              </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                href="/api/auth/logout"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                Logout
              </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
