import { Box, Flex, Heading,Image } from '@chakra-ui/react'
import React from 'react'
import AutoTypingText from '../component/AutoTypdText'
import WavingHand from '../component/Transition/WavingHand'
// import pkProfile from "../assets/pk-profile.png"
import { ThreeDCardDemo } from '../test'

export default function HomeSec1() {
const HomeStyle1 = {
  w:"90%",
  m: "auto",
  
}
const HomeStyle2 = {
  w:"50%",
  m:"auto",
}

  return (
    <Flex color={"white"}  {...HomeStyle1}>
        <Box  {...HomeStyle2} textAlign={"center"} mt={'80px'} mb={10}>
          <Heading  color={"red"} fontSize={"45px"}>Hi!  I'm  <WavingHand/></Heading>
          <Heading m={"10px"} fontSize={"70px"}>Pravin Kumar </Heading>
          <Heading ml={"40px"}  fontSize={"35px"} textAlign={"left"}>And I'm a <AutoTypingText/> </Heading>
        </Box >
        <Box  {...HomeStyle2}>
         {/* <Image src={pkProfile} w={'60%'} m={'auto'} borderRadius={28}/> */}
         <ThreeDCardDemo/>
        </Box>
    </Flex>
  )
}

