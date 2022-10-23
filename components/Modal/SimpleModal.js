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

    Stack,Input, InputGroup, InputLeftAddon, InputRightAddon
  } from '@chakra-ui/react'
  
const SimpleModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
const [bool,setBool] = useState(false)


 
    return (
      <>
   
     <Button  onClick={()=>setBool(true)} _hover={{ color: 'white', background: "#000000" }} width="100%" background={'black'} color="white" rounded="full">Enquire Now</Button>
                                  
        <Modal isCentered isOpen={bool} onClose={()=>setBool(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Subscribe To Our NewsLetter</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Stack spacing={4}> 
  <InputGroup>
    <InputLeftAddon>@</InputLeftAddon>
    <Input type='tel' placeholder='Email' />
  </InputGroup>

</Stack>

            </ModalBody>
  
            <ModalFooter>
            <Button colorscheme='blue' >Subscribe</Button>
              <Button variant='ghost'  mr={3} onClick={()=>setBool(false)}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default SimpleModal