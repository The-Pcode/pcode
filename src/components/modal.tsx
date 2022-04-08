import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'

const ModalComp = ({
  onClose,
  isOpen,
  src,
}: {
  onClose: () => void
  isOpen: boolean
  src: string
}) => {
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>download your image</ModalHeader>
        <ModalCloseButton as="a" />

        <ModalFooter>
          <a
            className="bg-primary-200 font-medium  text-primary-400 w-full py-2 text-center rounded-lg"
            href={src}
            download="Pcode"
          >
            download
          </a>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalComp
