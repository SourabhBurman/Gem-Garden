import React from 'react'
import styles from '../style/mainPage.module.css'
import { Box, Flex, HStack, Heading, Image, Spacer, Text, VStack } from '@chakra-ui/react'
export const MainPagemainComponent = () => {
  return (
    <Flex className={styles.stopmostcontainer} alignItems={"end"} w={{base : "140%", md:"100%"}} pt={{base:"200px", md:"40px"}} flexDirection={{base : "column",md:"row"}}>
    <HStack w='30%' h='90%' marginLeft='10%'>
      <VStack alignItems='start'>
        <Heading as='h2' textAlign='left' m='1' color='white'>Your Jewellery Search Starts Here</Heading>
        <Text textAlign='left' fontSize='lg'  color='white'>Discover the perfect jewellery pieces for your unique style at our store</Text>
        <br />
        <br />
        <Text textAlign='left'  color='white'>DISCOVER</Text>
      </VStack>
     
    </HStack>
 <Spacer />
    <Box w='60%' className={styles.mainhands}>
      </Box>
  </Flex>
  )
}
