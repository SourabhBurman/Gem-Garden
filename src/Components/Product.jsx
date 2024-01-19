import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Button,
  ButtonGroup,
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
        `https://gem-gardern-mock-api.onrender.com/products?_page=${page}&_limit=10`
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
    return <h2>Loading...</h2>;
  }

  if (err) {
    return <h2>Error...</h2>;
  }

  const handclick = (val) => {
    setPage(page + val);
  };

  var stylesecondmaindiv = {
    width: "100%",
    padding: "20px",
    backgroundColor: "green",
    marginBottom: "25px",
  };

  return (
    <div style={{ marginBottom: "10%" }}>
      <div style={stylesecondmaindiv}>Some Link</div>

      <Grid
        textAlign={"left"}
        color={"#171616"}
        w="90%"
        m="20px auto"
        gap="4%"
        justifyContent={"center"}
        templateColumns={"repeat(4,1fr)"}
      >
        {data.map((ele) => (
          <Box
            textAlign="center"
            boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.4s",
              border: "1px double black",
            }}
          >
            <Image src={ele.avatar} w="250px" />
            <Heading m="10px" as="h6" size={"sm"} color="green">
              {ele.about}
            </Heading>
            <Heading m="10px" as="h6" size={"sm"}>
              {ele.brand}
            </Heading>
            <Heading m="10px" as="h6" size={"sm"} color="gold">
              ₹ {ele.price}
            </Heading>
            <ButtonGroup variant="outline" spacing="45" mb="18px">
              <Button bg="blue" color="white" borderRadius="8px" p="2px">
                ADD CARD
              </Button>
              <Button bg="red" color="white" borderRadius="8px" p="2px">
                Read More
              </Button>
            </ButtonGroup>
            {/* <div style={{ margin: "4% 4%" }}>
              <button style={stylemapdivbutton1}>ADD CARD</button>
              <button style={stylemapdivbutton2}>Read More</button>
            </div> */}
          </Box>
        ))}
      </Grid>
      <ButtonGroup variant="outline" spacing="7" mb="22px" mt="16%">
        <Button
          bg="#f4511e"
          color="white"
          borderRadius="4px"
          p="5px 7px 5px 7px"
          mr="8px"
          onClick={() => handclick(-1)}
          disabled={page == 1}
        >
          Previous
        </Button>
        {page}
        <Button
          bg="green"
          color="white"
          borderRadius="4px"
          p="5px 10px"
          onClick={() => handclick(1)}
        >
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Product;
