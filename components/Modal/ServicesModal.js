import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';

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
  Image,
  Box,
  Text,
  Flex,
  Spinner,
  Stack, Input, InputGroup, InputLeftAddon, InputRightAddon
} from '@chakra-ui/react'



const ServicesModal = ({ service, about, msg }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [bool, setBool] = useState(false)
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [loading,setLoading] = useState(false)



  useEffect(() => {
    setMessage(msg)
  }, [])


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    //my public key=  user_lfsf5nasFlaPkYBzVCWr7
    //my default template = template_sb6gw6q
    //my service id = service_xzmhlh3

    console.log(form.current)
    setLoading(true)
    emailjs.sendForm('service_xzmhlh3', 'template_sb6gw6q', form.current, 'user_lfsf5nasFlaPkYBzVCWr7')
      .then((result) => {
        setLoading(false)
        setSent(true)
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <>
      <Button onClick={() => setBool(true)} _hover={{ color: 'white', background: "#000000" }} width="100%" background={'black'} color="white" rounded="full">Enquire Now</Button>


      <Modal size={'xl'} isCentered isMaximized isOpen={bool} onClose={() => setBool(false)}>
        <ModalOverlay />
        <ModalContent width="80%">
          <ModalHeader fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}>{service}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{
           !loading &&  !sent && <Flex  flexDirection={'column'} >
             <Flex bg="black" h="100%" height={'50%'}>
               {setElement(service)}

             </Flex>
             <Flex alignItems="center" justifyContent="center" height={'50%'}>

               <Flex flexDir="column" w="100%" >
                 <Text my="2" fontSize={{ sm: 'sm', md: 'md', base: 'sm' }}>{about}</Text>
                 <form ref={form} onSubmit={sendEmail}>
                   <Flex flexDir={{ base: 'column', sm: 'column', md: 'row' }}>
                     <InputGroup px="2" flexBasis="100%" my="2">
                       <InputLeftAddon>N</InputLeftAddon>
                       <Input type='text' name="user_name" placeholder='Name' />
                     </InputGroup>
                     <InputGroup px="2" flexBasis="100%" my="2">
                       <InputLeftAddon>@</InputLeftAddon>
                       <Input type='email' name="user_email" placeholder='Email' />
                     </InputGroup>

                     <Input display="none" value={message} type='text' name="message" placeholder='Message' />

                   </Flex>
                   <Button bg="black" color="white" mt="4" size='sm' type="submit" colorscheme='black' >Make Enquiry</Button>
                 </form>
               </Flex>
             </Flex>
           </Flex>
            }
            {
              
              !sent  && loading && 
              <Flex alignItems="center" justifyContent={'center'} height="100px" width="100px">
 <Spinner
              size="xl"
              position="absolute"
              left="50%"
              top="50%"
              ml="calc(0px - var(--spinner-size) / 2)"
              mt="calc(0px - var(--spinner-size))"
            />
              </Flex>
              
}
            
            {
sent && !loading &&<Flex>
  You have made The Enquiry
</Flex>

            }
           

          </ModalBody>

          <ModalFooter>

            <Button size='sm' variant='ghost' mr={3} onClick={() => setBool(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ServicesModal

let setElement = (val) => {
  let element = ''
  switch (val) {
    case '3D Product Visualisation':
      element = (
        <><Image objectFit="cover" h="250px" w="100%" src="Paw/fila.png" /></>);
      break;
    case 'Architecture Visualisation':
      element = (<><Image objectFit="cover" h="250px" w="100%" src="Paw/building.png" /></>);
      break;
    case '3D Animation for Music and Films':
      element = (<><Image objectFit="cover" h="250px" w="100%" src="Paw/cyber.png" /></>);
      break;
    case '3D Advertisments':
      element = (<><Image objectFit="cover" h="250px" w="100%" src="Paw/facemask.png" /></>);

      break;
  }

  return element
}
