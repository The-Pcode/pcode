import { Dialog, Transition } from '@headlessui/react'
import { IoCloseOutline } from 'react-icons/io5'
import { Fragment } from 'react'

interface ModalTypeProps {
  src: string
  isOpen: boolean
  setIsopen: (isOpen: boolean) => void
  title: string
}

export default function Modal({
  src,
  isOpen,
  setIsopen,
  title,
}: ModalTypeProps) {
  const closeModal = () => {
    setIsopen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 backdrop-blur-sm bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex items-center justify-between">
                      <p>download your image</p>
                      <IoCloseOutline
                        onClick={closeModal}
                        className="cursor-pointer"
                      />
                    </div>
                  </Dialog.Title>

                  <div className="mt-6 w-full">
                    <a
                      href={src}
                      download={title ? title : 'the-pcode'}
                      className="bg-primary-200 w-full block font-medium text-primary-400 py-2 text-center rounded-lg"
                    >
                      download
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
