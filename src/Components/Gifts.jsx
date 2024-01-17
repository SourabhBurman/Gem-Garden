import React, { useState } from 'react';
import '../gift.css';
import gift from '../giftBox.png';
import { FormErrorMessage, FormHelperText, useToast } from '@chakra-ui/react';
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
    
    // var format = /@./;
    // let isError = true;
    const isError = input === '';
    // if (input === '' && !input.match(format)){
    //     isError = false;
    // }

    return( 
    <>
       <section className="Gift">
            <div>
                <img src={gift} alt="Gift Box" />
            </div>

           <div className='giftText'>
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
              <span><button onClick={onOpen}>SEND GIFT CARD</button></span>
           </div>
        </section>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
            <ModalContent>
                <ModalHeader>SEND GIFT CARD</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <h1>Send a gift card to your loved on , and put a smile on their face..</h1>
                    <form>
                        <FormControl isInvalid={isError}>
                            <FormLabel>Enter Your Friends Email</FormLabel>
                            <Input type='email' value={input} onChange={handleInputChange}/>
                            {isError ? (
                                <FormErrorMessage>Valid Email is required.</FormErrorMessage>
                                
                            ) : (
                                <FormHelperText>
                                  Enter the email you'd like to send the gift card on.
                                </FormHelperText>
                            )}
                        </FormControl>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Cancel
                    </Button>
        
                    {isError ? (
                                <Button type="submit" colorScheme='red' disabled={true}>SEND</Button>
                            ) : (
                                <Button type='submit' colorScheme='blue'
                                disabled = {true}
                                onClick={() =>
                                toast({
                                title: 'GIFT CARD SEND SUCCESSFULLY..',
                                description: "We've send the gift card..",
                                position: 'center',
                                status: 'success',
                                duration: 3000,
                                isClosable: true,
                                })
                            } 
                            >Send</Button>
                            )}
                </ModalFooter>
            </ModalContent>
      </Modal>
    
    </>
  )
}

