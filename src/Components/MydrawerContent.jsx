import { Button, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const MydrawerContent = ({setQuery}) => {
  return (

    <HStack h='80%'>
        <Spacer />
         <VStack h='90%' spacing='10%'>
      <Text fontSize='20px' fontWeight='bold'  onClick={()=>setQuery("")}>Categories</Text>
    
 
  <Button colorScheme='black' variant='link' mt='10%' fontWeight='100' onClick={()=>setQuery("Rings")}>
    Rings
  </Button>
  <Button colorScheme='black' variant='link' fontWeight='100'  onClick={()=>setQuery("Brecelets")}>
    Bracelets
  </Button>
  <Button colorScheme='black' variant='link' fontWeight='100'  onClick={()=>setQuery("Earrning")}>
    Earrings 
  </Button>
  <Button colorScheme='black' variant='link' fontWeight='100'  onClick={()=>setQuery("Accessories")}>
  Accessories
  </Button>
  <Button colorScheme='black' variant='link' fontWeight='100'  onClick={()=>setQuery("Men's jewelry")}>
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
