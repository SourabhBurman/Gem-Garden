import {
  Card,
  Heading,
  CardBody,
  Image,
  Text,
  SimpleGrid,
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

function Bestseller() {
  const navigate = useNavigate();
  return (
    <>
      <Box m="30px">
        <Box w="90%" m="auto">
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Box textAlign={"left"} color={"#171616"} fontWeight={"400"}>
              <Heading
                size={"lg"}
                fontWeight={"400"}
                textTransform={"uppercase"}
                color={"black"}
              >
                Bestsellers
              </Heading>
              <Text fontSize={"16px"}>
                Top-rated jewellery from our collection
              </Text>
            </Box>
            <Box>
              <Button colorScheme='black' fontWeight='light' variant='link' onClick={()=>navigate("/products")}>
                VIEW ALL
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>

      <SimpleGrid
        // border="2px solid red"
        spacing={6}
        templateColumns={{base : "repeat(1,1fr)",md : "repeat(2,1fr)",lg : "repeat(3,1fr)",xl : "repeat(4,1fr)"}}
        justifyContent="space-around"
        width="95%"
        pl="5%"
        pr="5%"
        pb="5%"
        m={"auto"}
      >
        <Box boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" _hover={{ transform: "scale(1.05)", transition: "transform 0.4s" }} h={"300px"}>
          <Image src={"https://gem-garden-jewelry-store.vercel.app/static/media/card5.471f0f73c03a3ce42177.png"} w='200px' m={"auto"} />
          <Heading m="10px" as="h6" size={"sm"} textAlign="left">Messika</Heading>
          <Text m="10px" fontSize={"14px"}>White Gold Diamaond Ring.</Text>
          <Text m="10px" fontSize={"14px"} color='gray'> $1.390</Text>
        </Box>
        <Box boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" _hover={{ transform: "scale(1.05)", transition: "transform 0.4s" }} h={"300px"}>
          <Image src="https://gem-garden-jewelry-store.vercel.app/static/media/card6.cdfc389c353e0a1a95c5.png" w='200px' m={"auto"} />
          <Heading m="10px" as="h6" size={"sm"} textAlign="left">Tiffani</Heading>
          <Text m="10px" fontSize={"14px"}>Silver Necklace.</Text>
          <Text m="10px" fontSize={"14px"} color='gray'> $750</Text>
        </Box>
        <Box boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" _hover={{ transform: "scale(1.05)", transition: "transform 0.4s" }} h={"300px"}>
          <Image src={"https://gem-garden-jewelry-store.vercel.app/static/media/card7.3abfa35a89cf47b097ae.png"} w='200px' m={"auto"} />
          <Heading m="10px" as="h6" size={"sm"} textAlign="left">Bulgari</Heading>
          <Text m="10px" fontSize={"14px"}>White Gold Diamaond Earning.</Text>
          <Text m="10px" fontSize={"14px"} color='gray'>$7.250</Text>
        </Box>
        <Box boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" _hover={{ transform: "scale(1.05)", transition: "transform 0.4s" }} h={"300px"}>
          <Image src={"https://mygemma.com/cdn/shop/products/122588-fv_1200x.jpg?v=1659050494"} w='200px' m={"auto"} />
          <Heading m="10px" as="h6" size={"sm"} textAlign="left">Cartier</Heading>
          <Text m="10px" fontSize={"14px"}>White Gold Ring.</Text>
          <Text m="10px" fontSize={"14px"} color='gray'> $1.950</Text>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default Bestseller;
