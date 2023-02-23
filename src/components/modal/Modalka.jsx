// const { ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button, Modal, ModalFooter, useDisclosure } = require("@chakra-ui/react")

// function Modalka() {
//   const { isOpen, onOpen, onClose } = useDisclosure()

//   return (
//     <>
//       <Button onClick={onOpen}>Open Modal</Button>

//       <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Create your account</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme='blue' mr={3}>
//               Save
//             </Button>
//             <Button onClick={onClose}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   )
// }