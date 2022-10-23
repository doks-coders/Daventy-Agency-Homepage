import React from 'react'
import { useState } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,

  Stack, Input, InputGroup, InputLeftAddon, InputRightAddon
} from '@chakra-ui/react'

const MessageModal = ({ bool, setBool, message }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>

      <Modal isCentered isOpen={bool} onClose={() => setBool(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Alert</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          {message}

          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={() => setBool(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default MessageModal