import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import blackbgEar from "../Assets/black.jpg";
// import "animate.css";
import { color, useToast } from "@chakra-ui/react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
// import { ArrowForwardIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import image2 from "../Pics/photo-1617038260897-41a1f14a8ca0.avif"
import { LOGIN } from "../Store/actiontype";
import { loginFunc } from "../Store/action";
// import { login } from "../Redux/Authentication/action";
// import { login } from '../Redux/Authentication/action'

export const Login = ({setLogsign}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [submissiondisbled, setSubmissiondisbled] = useState(false);
  // const [token,setToken] = useState(false);
  const toast = useToast();
  const location = useLocation()
  const { isAuth } = useSelector((store) => store)
  const [logindata, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();

    if (!logindata.email || !logindata.password){
      toast({
        title: "Failed!!",
        description: "Please fill all the fields.",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
      // return;
    }
    loginFunc(logindata).then(res=>{
      res && dispatch({type:LOGIN}) && navigate("/");
      // console.log(res);
      if (res) {
        toast({
          title: "Success",
          description: "User LoggedIn Successful",
          status: "success",
          position: "top",
          duration: 4000,
          isClosable: true
        });
      } else {
        toast({
          title: "Failed",
          description: "Email and password mismatch",
          status: "error",
          position: "top",
          duration: 4000,
          isClosable: true,
        });
      }


      }
       )
      
    // console.log(token) 
  };

  // useEffect(()=>{
  //   if (token) {
  //     dispatch({type:LOGIN});
  //     toast({
  //       title: "Success",
  //       description: "User LoggedIn Successful",
  //       status: "success",
  //       position: "top",
  //       duration: 4000,
  //       isClosable: true,
  //     });
  //   } else {
  //     toast({
  //       title: "Failed",
  //       description: "Email and password mismatch",
  //       status: "error",
  //       position: "top",
  //       duration: 4000,
  //       isClosable: true,
  //     });
  //   }
    
  // },[token])

  return (
    <>
      <Box
        position={"relative"}
        style={{
          // backgroundImage: `url(${login})`,
          //  backgroundRepeat:"no-repeat",
          backgroundSize: "cover",
        }}
      >
         <Stack align={"center"}>
              <Heading color={"black"} fontSize={"2xl"} textAlign={"center"}>
                  Login
                </Heading>
              </Stack>
        <form
          onSubmit={handleLogin}
          style={{
            // position:"absolute",
            //  top:"0",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "100vh",
          }}
        >
          <Flex
            style={{
              // backgroundImage: `url(${blackbgEar})`,
              //  backgroundRepeat:"no-repeat",
              backgroundSize: "cover",
            }}
            align={"center"}
            justify={"space-around"}
            flexDirection={{base : "column",md : "row"}}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
             <Box w={{base : "60%", md:"40%"}} h="400px" borderRadius={"5px"} backgroundImage={image2} backgroundSize={"cover"} backgroundPosition={"center"}></Box>
            <Stack
              borderRadius={"none"}
              className="animate__animated animate__pulse"
              w={{
                base: "90%",
                sm: "60%",
                md: "50%",
                lg: "50%",
                xl: "40%",
                "2xl": "40%",
              }}
            >
             
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      borderRight={"none"}
                      borderTop={"none"}
                      focusBorderColor="none"
                      placeholder={"Your email address"}
                      _placeholder={{ opacity: 1, color: "#a0a0a0" }}
                      _focus={{
                        bg: "whiteAlpha.300",
                        borderColor: "#FFB300",
                      }}
                      type="email"
                      value={logindata.email}
                      onChange={(e) =>
                        setLoginData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        borderRight={"none"}
                        borderTop={"none"}
                        focusBorderColor="none"
                        placeholder={"Your password"}
                        _placeholder={{ opacity: 1, color: "#a0a0a0" }}
                        _focus={{
                          bg: "whiteAlpha.300",
                          borderColor: "#FFB300",
                        }}
                        value={logindata.password}
                        onChange={(e) =>
                          setLoginData((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                        type={showPassword ? "text" : "password"}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                      type="submit"
                      isDisabled={submissiondisbled}
                      style={{
                        background:
                          "linear-gradient(to top left, #171616 100%, #363431 51%)",
                      }}
                      loadingText="Submitting"
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bgGradient: "linear(to-r,  #363431,#171616)",
                        border: "1px solid #FFB300 ",
                        color: "#FFB300",
                      }}
                    >
                      Login
                    </Button>
                  </Stack>
                  <Stack pt={6}>
                    <Text align={"center"}>
                      Not registered?{" "}
                      <Button  variant='link'
                        onClick={()=> setLogsign(true)}
                        color={"rgb(255,189,89)"}
                        fontWeight={"600"}
                      >
                        Sign Up
                      </Button>
                    </Text>
                    <Text align={"center"}>
                      <Link
                        href="/adminlogin"
                        color={"rgb(255,189,89)"}
                        fontWeight={"600"}
                      >
                        {" "}
                        {/* Admin Login <ArrowForwardIcon />{" "} */}
                      </Link>
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </form>
      </Box>
    </>
  );
};