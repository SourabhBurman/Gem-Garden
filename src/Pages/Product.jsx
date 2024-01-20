import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Button,
  ButtonGroup,
  Text,
  Spinner,
  Center,
} from "@chakra-ui/react";
import React from "react";

function Product() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchrender();
  }, [page]);

  const fetchrender = async () => {
    setLoading(true);
    try {
      let res = await fetch(
        `https://traveller-jt36.onrender.com/jewellery?_page=${page}&_limit=12`
      );
      let data = await res.json();
      setLoading(false);
      setData(data);
    } catch (err) {
      setLoading(false);
      setErr(true);
    }
  };

  if (loading) {
    return <Center p={"150px"}>
      <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='black.500'
  size='xl'
/>
    </Center>;
  }

  // if (err) {
  //   return <h2>Error...</h2>;
  // }

  const handclick = (val) => {
    setPage(page + val);
  };

  return (
    <div style={{ paddingTop:"70px"}}>
      <Grid
        textAlign={"left"}
        color={"#171616"}
        w="90%"
        m="auto"
        gap="4%"
        // pt={"70px"}
        justifyContent={"center"}
        templateColumns={"repeat(4,1fr)"}
      >
        {data.map((ele) => (
          // <Box
          //   textAlign="center"
          //   boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
          //   _hover={{
          //     transform: "scale(1.05)",
          //     transition: "transform 0.4s",
          //     border: "1px double black",
          //   }}
          // >
          //   <Image src={ele.avatar} w="250px" />
          //   <Heading m="10px" as="h6" size={"sm"} color="green">
          //     {ele.about}
          //   </Heading>
          //   <Heading m="10px" as="h6" size={"sm"}>
          //     {ele.brand}
          //   </Heading>
          //   <Heading m="10px" as="h6" size={"sm"} color="gold">
          //     ₹ {ele.price}
          //   </Heading>
          //   <ButtonGroup variant="outline" spacing="45" mb="18px">
          //     <Button bg="blue" color="white" borderRadius="8px" p="2px">
          //       ADD CARD
          //     </Button>
          //     <Button bg="red" color="white" borderRadius="8px" p="2px">
          //       Read More
          //     </Button>
          //   </ButtonGroup>
          // </Box>
          <Box
            boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
            display={"flex"}
            p={"10px"}
            flexDir={"column"}
            _hover={{ transform: "scale(1.02)", transition: "transform 0.4s" }}
            h={"320px"}
          >
            <Image src={ele.avatar} w="200px" m={"auto"} />
            <Flex justifyContent={"space-around"} alignItems={"center"}>
              <Flex direction="column" gap="2%">
                <Heading as="h6" size={"sm"} textAlign="left">
                  {ele.brand}
                </Heading>
                <Text
                  fontSize={"14px"}
                  maxW={"130px"}
                  textOverflow={"ellipsis"}
                  overflow={"hidden"}
                >
                  {ele.about}
                </Text>
                <Text fontSize={"14px"} color="gray">
                  {" "}
                  ₹{ele.price}
                </Text>
              </Flex>
              <Flex
                direction="column"
                justifyContent={"space-around"}
                alignItems={"center"}
                gap="10px"
              >
                <Button variant="link" color={"black"} fontSize={"15px"}>
                  More Detail
                </Button>
                <Button
                  color="white"
                  bg="black"
                  w={"60px"}
                  _hover={{ color: "black", bg: "gray.100" }}
                  fontSize={"15px"}
                  p={"0"}
                >
                  ADD
                </Button>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Grid>
      <ButtonGroup variant="outline" spacing="7" mt="12%">
        <Button onClick={() => handclick(-1)} isDisabled={page === 1}>
          Previous
        </Button>
        <p>{page}</p>
        <Button onClick={() => handclick(1)}>Next</Button>
      </ButtonGroup>
    </div>
  );
}

export default Product;
