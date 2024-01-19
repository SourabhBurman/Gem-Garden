import {
  Card,
  Heading,
  CardBody,
  Image,
  Text,
  SimpleGrid,
  Box,
  Flex,
} from "@chakra-ui/react";

function Bestseller() {
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
              >
                Bestsellers
              </Heading>
              <Text fontSize={"16px"}>
                Top-rated jewellery from our collection
              </Text>
            </Box>
            <Box>
              <Text fontSize={"16px"}>VIEW ALL</Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      <SimpleGrid
        // border="2px solid red"
        spacing={6}
        templateColumns="repeat(4,  1fr)"
        justifyContent="space-around"
        width="100%"
        pl="5%"
        pr="5%"
        pb="7%"
      >
        <Card
          maxW="sm"
          _hover={{ transform: "scale(1.05)", transition: "transform 0.4s" }}
        >
          <CardBody>
            <Image
              src="https://gem-garden-jewelry-store.vercel.app/static/media/card5.471f0f73c03a3ce42177.png"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Heading size="md">Messika</Heading>
            <Text>White Gold Diamaond Ring.</Text>
            <Text color="blue.600" fontSize="1.5xm">
              $1.390
            </Text>
          </CardBody>
        </Card>
        <Card
          maxW="sm"
          _hover={{ transform: "scale(1.05)", transition: "transform 0.4s" }}
        >
          <CardBody>
            <Image
              src="https://gem-garden-jewelry-store.vercel.app/static/media/card6.cdfc389c353e0a1a95c5.png"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Heading size="md">Tiffani</Heading>
            <Text>Silver Necklace.</Text>
            <Text color="blue.600" fontSize="1.5xm">
              $750
            </Text>
          </CardBody>
        </Card>
        <Card
          maxW="sm"
          _hover={{ transform: "scale(1.05)", transition: "transform 0.4s" }}
        >
          <CardBody>
            <Image
              src="https://gem-garden-jewelry-store.vercel.app/static/media/card7.3abfa35a89cf47b097ae.png"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Heading size="md">Bulgari</Heading>
            <Text>White Gold Diamaond Earning.</Text>
            <Text color="blue.600" fontSize="1.5xm">
              $7.250
            </Text>
          </CardBody>
        </Card>
        <Card
          maxW="sm"
          _hover={{ transform: "scale(1.05)", transition: "transform 0.4s" }}
        >
          <CardBody>
            <Image
              src="https://mygemma.com/cdn/shop/products/122588-fv_1200x.jpg?v=1659050494"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Heading size="md">Cariter</Heading>
            <Text>White Gold Ring.</Text>
            <Text color="blue.600" fontSize="1.5xm">
              $1.950
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
}

export default Bestseller;
