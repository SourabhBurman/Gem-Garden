import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import categoryimgDefault from '../Pics/categoryImgdefault.jpg'
import categoryimgRings from '../Pics/5-Carat-Diamond-Dress-Ring-with-Basket-Setting-in-Platinum.jpg'
import categoryimgEarring from '../Pics/Rhinestone-Earrings-Jewelry-Ladies-Temperament-Fashion-Full-Crystal-Shiny-Tassel-Earrings-Party-Wedding-Bijoux-Gifts-Wholesale.webp'
import categoryimgBracelet from '../Pics/photo-1506049420574-b51320eee265.avif'
import categoryimgWatches from '../Pics/watchesnew-1612817159450-08a180df028b.avif'
import categoryimgMenjewellery from '../Pics/menjewellery1620891239438-eb4b8b467fb7.avif'
import categoryimgPendant from '../Pics/pendant-1611583027838-515a1087afdb.avif'
export const CategoriesSection = () => {
    const [hoverImg,setHover] = useState();
    // console.log(hoverImg);
    function findImage() {
        if(hoverImg=='Rings') {
          return categoryimgRings;
        } else if(hoverImg=='Bracelets') {
          return categoryimgBracelet;
        } else if(hoverImg=='Earrings') {
        return categoryimgEarring;
        } else if(hoverImg=='Watches') {
        return categoryimgWatches;
        } else if(hoverImg=='MensJewelry') {
        return categoryimgMenjewellery;
        } else if(hoverImg=='Necklaces') {
            return categoryimgPendant;
        } else {
          return categoryimgDefault;
        }
    }
    return (
        <Box w="82%" m="70px auto">

            <Flex flexDirection={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row", "2xl": "row" }} w='100%' justifyContent={"space-between"} alignItems={"center"}>

                <Box cursor={"pointer"} textAlign={"left"} color={"#171616"} fontWeight={"400"}>
                    <Text fontSize={"32px"} fontWeight={"300"} textTransform={"capitalize"}>Categories</Text>
                    <Text fontSize={"16px"}>Discover Our Collection of Jewellery by Categories</Text>

                    <Box mt="50px" lineHeight={"40px"} fontWeight={"500"} boxSize='fit-content'>
                        <Text fontSize={"16px"} _hover={{
                            textDecoration: "underline"
                        }} onMouseEnter={()=>setHover('Rings')} >Rings</Text>
                        <Text fontSize={"16px"} _hover={{
                            textDecoration: "underline"
                        }} 
                        onMouseEnter={()=>setHover('Bracelets')}>Bracelets</Text>
                        <Text fontSize={"16px"} _hover={{
                            textDecoration: "underline"
                        }}  
                        onMouseEnter={()=>setHover('Earrings')}>Earrings</Text>
                        <Text fontSize={"16px"} _hover={{
                            textDecoration: "underline"
                        }} 
                        onMouseEnter={()=>setHover('Necklaces')}>Necklaces & Pendants</Text>
                        <Text fontSize={"16px"} _hover={{
                            textDecoration: "underline"
                        }} 
                        onMouseEnter={()=>setHover('Watches')}>Watches</Text>
                        <Text fontSize={"16px"} _hover={{
                            textDecoration: "underline"
                        }} 
                        onMouseEnter={()=>setHover('MensJewelry')}>Men's Jewelry</Text>
                        <Text fontSize={"16px"} textTransform={"uppercase"} letterSpacing={"2px"} mt="40px">All Categories</Text>
                    </Box>
                </Box>

                    <Box minW={"250px"} w='38%' h='75vh' bgImg={`url(${findImage()})`} bgPosition='center' bgSize='cover' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;' borderRadius='5px'></Box>
      

            </Flex>

        </Box>
    )
}
