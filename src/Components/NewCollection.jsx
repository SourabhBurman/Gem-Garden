import { Box, Flex, Grid, Heading, Image, Text, transition } from '@chakra-ui/react'
import React from 'react'
import img1 from "../Pics/messika-cr_oles-move-uno-diamant-or-blanc.jpg"
import img2 from "../Pics/messika-collier-move-uno-gm-diamant-or-blanc-bis.jpg"
import img3 from "../Pics/messika-bracelet-diamant-or-blanc-so-move-xl-pave-12942.jpg"
import img4 from "../Pics/bague-diamant-blanc-titane-graphite-move-titanium-pm-07164_1.jpg"

export const NewCollection = () => {
    return (
        <>
        <Box m="30px">
            <Box w="88%" m="auto">

                <Flex justifyContent={"space-between"} alignItems={"center"}>

                    <Box textAlign={"left"} color={"#171616"} fontWeight={"400"}>
                        <Heading size={"lg"} fontWeight={"400"} textTransform={"uppercase"}>New Collections</Heading>
                        <Text fontSize={"16px"}>Check Out the New Collections of Famous Brands</Text>
                    </Box>
                    <Box>
                        <Text fontSize={"16px"}>ALL COLLECTIONS</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>

        <Grid  textAlign={"left"} color={"#171616"} w="90%" m="20px auto" gap="20px" justifyContent={"center"} templateColumns={"repeat(4,250px)"}>
      <Box boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" _hover={{transform:"scale(1.05)",transition:"transform 0.4s"}} >
        <Image src={img1} w='250px'/>
        <Heading m="10px" as="h6" size={"sm"}>Messika</Heading>
        <Text m="10px" fontSize={"14px"}>Move Uno Collection</Text>
      </Box>
      <Box  boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" _hover={{transform:"scale(1.05)",transition:"transform 0.4s"}} >
        <Image src={img2} w='250px'/>
        <Heading m="10px" as="h6" size={"sm"}>Messika</Heading>
        <Text m="10px" fontSize={"14px"}>Lucky Move Collection</Text>
      </Box>
      <Box  boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" _hover={{transform:"scale(1.05)",transition:"transform 0.4s"}} >
        <Image src={img3} w='250px'/>
        <Heading m="10px" as="h6" size={"sm"}>Garrard</Heading>
        <Text m="10px" fontSize={"14px"}>1735 Collection</Text>
      </Box>
      <Box  boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" _hover={{transform:"scale(1.05)",transition:"transform 0.4s"}} >
        <Image src={img4} w='250px'/>
        <Heading m="10px" as="h6" size={"sm"}>Cartier</Heading>
        <Text m="10px" fontSize={"14px"}>Love Collection</Text>
      </Box>
     </Grid>
        </>
    )
}
