// import { Link } from "@chakra-ui/react";
// import React from "react";
// import { NavLink } from "react-router-dom";

// export const Navbar = () => {
//   return (
//     <>
//       <Link to="/" as={NavLink}>
//         Home
//       </Link>
//       <Link to="/contactUs" as={NavLink}>
//         Contact
//       </Link>
//       <Link to="/account" as={NavLink}>
//         Account
//       </Link>
//       <Link to="/bag" as={NavLink}>
//         Bag
//       </Link>
import { Flex, Heading, Link, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../style/navbar.module.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { MydrawerContent } from "./MydrawerContent";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../Store/actiontype";

export const Navbar = ({setQuery}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
   const {isAuth} = useSelector(st=>st);
   const dispatch = useDispatch();
   const navigate = useNavigate();
  return (
    <>
      <Flex
        justify="space-around"
        alignItems="center"
        zIndex={"2"}
        p="4"
        pl="20"
        pr="20"
        h="10vh"
        w="100%"
        className={styles.navbaronly}
      >
        <Text
          onClick={() => onOpen()}
          p="1"
          _hover={{ cursor: "pointer" }}
          color="white"
        >
          Jewellery
        </Text>
        <Text
          onClick={() => onOpen()}
          p="1"
          _hover={{ cursor: "pointer" }}
          color="white"
        >
          Watches
        </Text>
        <Text
          onClick={() => onOpen()}
          p="1"
          _hover={{ cursor: "pointer" }}
          color="white"
        >
          Gift
        </Text>

        <Link to="/" as={NavLink}>
          <Heading as="h4" fontSize="25px" color="white">
            Gem Garden
          </Heading>
        </Link>

        <Link to="/contactUs" as={NavLink} p="1">
          Contact
        </Link>
        <Link to="/account" as={NavLink} p="1">
          Account
        </Link>
        <Link to="/bag" as={NavLink} p="1">
          Bag
        </Link>
      </Flex>
      {isAuth ? <Button pos={"fixed"} color={"white"} zIndex={5} right={"12px"} top={"10px"} colorScheme='white' variant='ghost' onClick={()=>dispatch({type:LOGOUT})}>
    Logout
  </Button> 
  : <Button pos={"fixed"} right={"12px"}  color={"white"} zIndex={5} top={"10px"}  colorScheme='white' variant='ghost' onClick={()=>{navigate("/account")}}>
    Login
  </Button>
  }
      <Drawer onClose={onClose} isOpen={isOpen} size="md" placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`Gem Garden`}</DrawerHeader>
          <DrawerBody>
            <MydrawerContent setQuery={setQuery}/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
