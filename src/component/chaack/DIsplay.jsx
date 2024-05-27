import React from 'react'
import { Box } from '@chakra-ui/react'

export default function DIsplay() {
  return (<>

    <Box display='none' height={"40px"} bg={"black"}/>
    
    <Box display={{ sm: "none", md: "block" }} height={4} bg={"red"}/>
    
    <Box hideBelow='md' height={4} bg={"blue"}/>
    
    <Box display={{ base: "block", md: "none" }} height={4} bg={"green"}/>
    
    <Box hideFrom='md' height={4} bg={"yellow"}/>
  </>

  )
}
