import React, { useState } from 'react'
import { Login } from './Login'
import { SignUp } from './Signup';
import { Box, Flex } from '@chakra-ui/react';


export const Account = () => {

  const [logsign,setLogsign] = useState(false);
  return (
  <div style={{paddingTop:"70px"}}>
     <div> {logsign ?  <SignUp  setLogsign={setLogsign}/>: <Login setLogsign={setLogsign}/>}</div>
    </div>
  )
}
