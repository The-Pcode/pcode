import clsx from 'clsx'
import { Fragment, memo, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi'

type ListBoxProps = {
  items: any
  handleClick: (item: string) => void
  type: string
}

function ListBox({ items, handleClick, type }: ListBoxProps) {
  const [selected, setSelected] = useState<{ title: string; icon: any }>(
    items[0],
  )
  const [icon, setIcon] = useState<Element>()

  return (
    <div
      className={clsx(
        'top-16  mx-1',
        type === 'bg'
          ? 'w-34'
          : type === 'lang'
          ? 'w-34'
          : type === 'padding'
          ? 'w-28'
          : 'w-34',
      )}
    >
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg  py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate text-primary-400 font-medium cursor-pointer select-none">
              {type === 'bg'
                ? 'background'
                : type === 'lnag'
                ? 'language'
                : type === 'padding'
                ? 'padding'
                : ''}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              {type === 'bg' ? (
                !icon ? (
                  items[0].icon
                ) : (
                  icon
                )
              ) : (
                <BiChevronDown className="text-primary-400  mt-1 text-xl" />
              )}
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              style={{ marginTop: '-230px' }}
              className={clsx(
                'absolute mt-1 max-h-60 overflow-auto rounded-md bg-white bg-opacity-50 backdrop-blur-sm py-1 text-base shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
                type === 'padding' ? 'w-[100px]' : 'w-[160px]',
              )}
            >
              {items.map(
                (item: { title: string; icon: any }, itemIdx: string) => (
                  <Listbox.Option
                    key={itemIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    onClick={() => {
                      handleClick(item.title)
                      setIcon(item.icon)
                    }}
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item.title}
                        </span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          {item.icon}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ),
              )}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default memo(ListBox)
