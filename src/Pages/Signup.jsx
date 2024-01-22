import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  useToast,
} from "@chakra-ui/react";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
// import { signup } from "../Redux/Authentication/action";
import axios from "axios";
import image1 from "../Pics/photo-1569397288884-4d43d6738fbd.avif"


export const SignUp = ({setLogsign}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  // const { user, regMsg,isRegistered,errMsg } = useSelector((store) => store.authReducer);
  // const { errorMessage } = useSelector((store) => store.authReducer);
  const [formvalue, setFormvalue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  // console.log(user)
  // console.log(regMsg)

  const [submissiondisbled, setSubmissiondisbled] = useState(false);

  // console.log(value)

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(formvalue)
    if (
      !formvalue.firstname ||
      !formvalue.lastname ||
      !formvalue.email ||
      !formvalue.password
    ) {
      return toast({
        title: "Register Failed!",
        description: "Please fill all the inputs",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
    // dispatch(signup(formvalue));
  };

  // useEffect(()=>{
  //   if (isRegistered) {
  //     toast({
  //       title: "Success",
  //       description: "User Registered Successful",
  //       status: "success",
  //       position: "top",
  //       duration: 4000,
  //       isClosable: true,
  //     });
  //     setTimeout(() => {
  //       navigate("/login");
  //     }, 4000);
  //     setFormvalue({ firstname: "", lastname: "", email: "", password: "" });
  //     return;
  //   } 
  //   else if(errMsg){
  //      toast({
  //       title: "Failed",
  //       description: errMsg,
  //       status: "error",
  //       position: "top",
  //       duration: 4000,
  //       isClosable: true,
  //     });
  //   }
  // },[isRegistered,errMsg])

  return (
    <>
      <Box
        position={"relative"}
        top={{base : "150px" , md: "50px"}}
        style={{
          margin:"auto",
          width:"90%",
          // border:"solid green"
          // backgroundImage: `url(${blackbgEar})`,
          //  backgroundRepeat:"no-repeat",
          // backgroundSize: "cover",
        }}
      >
         <Heading color={"black"} fontSize={"2xl"} textAlign={"center"}>
                  Sign up
                </Heading>
        <form
          style={{
            // position:"absolute",
            //  top:"0",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "100vh",
          }}
          onSubmit={handleSubmit}
        >
          <Flex
            style={{
              // backgroundImage: `url(${blackbgEar})`,
              //  backgroundRepeat:"no-repeat",
            }}
            align={"center"}
            justify={"space-around"}
            flexDirection={{base : "column",md : "row"}}
            bg={useColorModeValue("gray.50", "gray.800")}
            // w={"100%"}
            // border={"solid red"}
          >
            <Box w={{base : "60%", md:"40%"}} h="400px" borderRadius={"5px"} backgroundImage={image1} backgroundSize={"cover"} backgroundPosition={"center"}></Box>
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
              <Stack align={"center"}>
               
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <Box>
                    <FormControl id="firstName">
                      {/* <FormLabel>FirstName</FormLabel> */}
                      <Input
                        borderRight={"none"}
                        borderTop={"none"}
                        focusBorderColor="none"
                        placeholder={"Enter your firstname"}
                        // h={"30px"}
                        // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                        _placeholder={{ opacity: 1, color: "#a0a0a0" }}
                        _focus={{
                          bg: "whiteAlpha.300",
                          borderColor: "#FFB300",
                        }}
                        type="text"
                        value={formvalue.firstname}
                        onChange={(e) =>
                          setFormvalue((prev) => ({
                            ...prev,
                            firstname: e.target.value,
                          }))
                        }
                      />
                    </FormControl>
                  </Box>

                  <Box>
                    <FormControl id="lastname">
                      {/* <FormLabel>LastName</FormLabel> */}
                      <Input
                        borderRight={"none"}
                        borderTop={"none"}
                        focusBorderColor="none"
                        placeholder={"Enter your lastname"}
                        // h={"30px"}
                        // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                        _placeholder={{ opacity: 1, color: "#a0a0a0" }}
                        _focus={{
                          bg: "whiteAlpha.300",
                          borderColor: "#FFB300",
                        }}
                        type="text"
                        value={formvalue.lastname}
                        onChange={(e) =>
                          setFormvalue((prev) => ({
                            ...prev,
                            lastname: e.target.value,
                          }))
                        }
                      />
                    </FormControl>
                  </Box>
                  <FormControl id="email">
                    {/* <FormLabel>Email address</FormLabel> */}
                    <Input
                      borderRight={"none"}
                      borderTop={"none"}
                      focusBorderColor="none"
                      placeholder={"Enter email address"}
                      // h={"30px"}
                      // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                      _placeholder={{ opacity: 1, color: "#a0a0a0" }}
                      _focus={{
                        bg: "whiteAlpha.300",
                        borderColor: "#FFB300",
                      }}
                      type="email"
                      value={formvalue.email}
                      onChange={(e) =>
                        setFormvalue((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </FormControl>
                  <FormControl id="password">
                    {/* <FormLabel>Password</FormLabel> */}
                    <InputGroup>
                      <Input
                        borderRight={"none"}
                        borderTop={"none"}
                        focusBorderColor="none"
                        placeholder={"Enter password"}
                        // h={"30px"}
                        // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                        _placeholder={{ opacity: 1, color: "#a0a0a0" }}
                        _focus={{
                          bg: "whiteAlpha.300",
                          borderColor: "#FFB300",
                        }}
                        value={formvalue.password}
                        onChange={(e) =>
                          setFormvalue((prev) => ({
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
                      // bgGradient='linear(to-r, #171616, #363431)'
                      loadingText="Submitting"
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        // bg: 'blue.500',
                        bgGradient: "linear(to-r,  #363431,#171616)",
                        border: "1px solid #FFB300 ",
                        color: "#FFB300",
                      }}
                    >
                      Sign up
                    </Button>
                  </Stack>
                  <Stack pt={1}>
                    <Text align={"center"}>
                      Already a user?{" "}
                      <Button  variant='link'
                        onClick={()=> setLogsign(false)}
                        color={"rgb(255,189,89)"}
                        fontWeight={"600"}
                      >
                        Login
                      </Button>
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