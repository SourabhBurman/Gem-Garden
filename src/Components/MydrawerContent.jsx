import { Button, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const MydrawerContent = () => {
  return (

    <HStack h='80%'>
        <Spacer />
         <VStack h='90%' spacing='10%'>
      <Text fontSize='20px' fontWeight='bold'>Categories</Text>
    
 
  <Button colorScheme='black' variant='link' mt='10%' fontWeight='100'>
    Rings
  </Button>
  <Button colorScheme='black' variant='link' fontWeight='100'>
    Bracelets
  </Button>
  <Button colorScheme='black' variant='link' fontWeight='100'>
    Earrings 
  </Button>
  <Button colorScheme='black' variant='link' fontWeight='100'>
    Necklaces & Pendants
  </Button>
  <Button colorScheme='black' variant='link' fontWeight='100'>
    Men's Jewellery
  </Button>

    </VStack >
    <Spacer />
    <Spacer />
    <VStack h='90%' spacing='10%'>
      

    <Text  fontSize='20px' fontWeight='bold'>Brands</Text>
  <Button colorScheme='black' variant='link' fontWeight='100' mt='10%'>
  Pandora
  </Button>
  <Button colorScheme='black' variant='link' fontWeight='100'>
  Cartier
  </Button>
 
    </VStack>
    <Spacer />
    </HStack>
   
  )
}
