import React, { useState } from 'react';
import styles from "../style/gift.module.css"
import gift from '../giftBox.png';
import { Box, useToast } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react-use-disclosure';

export const Gifts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [input, setInput] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);


  return (
    <>
      <section className={styles.Gift}>
        <div>
          <img src={gift} alt="Gift Box" />
        </div>

        <div className={styles.giftText}>
          <h1><b>GIFT CARD</b></h1>
          <br />
          <p>Looking for the perfect gift?</p>
          <p>
            Look no further! Our extensive collection of jewelry gifts
            includes something for everyone - from elegant and timeless pieces
            for her to bold and sophisticated designs for him
          </p>
          <br />
          <br />
          <span> 
            <Button border={"none"} colorScheme='white' variant='link' onClick={onOpen}>
            SEND GIFT CARD
          </Button>
          </span>
        </div>
      </section>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>SEND GIFT CARD</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1>
            Delight your friends and family with the magic of a surprise gift card!</h1>
             
             <br />
              <FormControl >
                <Input placeholder='Enter Email' type='email' value={input} onChange={handleInputChange} />
              </FormControl>
           
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose} border={"none"} color='white' bg='black' _hover={{color:"black",bg:"gray.100"}}>
              Cancel
            </Button>

            <Button type='submit' color='white' bg='black'  _hover={{color:"black",bg:"gray.100"}}
              onClick={() =>
                // toast({
                //   title: 'GIFT SEND SUCCESSFULLY',
                //   description: "We've send your gift.",
                //   status: 'success',
                //   duration: 5000,
                //   isClosable: true,
                 
                // })
                toast({
                  position: 'bottom-left',
                  title: 'GIFT SEND SUCCESSFULLY',
                  description: "We've send your gift.",
                  duration: 2000,
                  render: () => (
                    <Box color='white' p={3} bg='black'>
                     🎁 GIFT SENT SUCCESSFULLY
                    </Box>
                  ),
                })
              }
            >Send</Button>

          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}

