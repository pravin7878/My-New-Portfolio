import { Box, Button, Flex, Heading,Image } from '@chakra-ui/react'
import React from 'react'
// import AutoTypingText from '../component/AutoTypdText'
import AutoTypingText from './AutoTypdText'
// import WavingHand from '../component/Transition/WavingHand'
import WavingHand from './Transition/WavingHand'
// import pkProfile from "../assets/pk-profile.png"
import { ThreeDCardDemo } from '../../test'

import { motion } from 'framer-motion'

export default function HomeSec1() {
const HomeStyle1 = {
  w:"90%",
  m: "auto",
  
}
const HomeStyle2 = {
  w:"50%",
  m:"auto",
}

const buttonStyle = {
bg:'RGB(190 18 90)',
color:'white',
w:'35%',
mt:'30px',
_hover:{bg:'RGB(180 54 106)' , w:'37%'}
}

  return (
    <Flex color={"white"}  {...HomeStyle1}>
        <Box  {...HomeStyle2} textAlign={"center"} mt={'120px'} mb={10}>
      <motion.div  animate={{ x: [-100,60] }} transition={{ duration: 1.5 }}>
          <Heading  color={"red"} fontSize={"45px"}>Hi!  I'm  <WavingHand/></Heading>
          <Heading m={"10px"} fontSize={"70px"}>Pravin Kumar </Heading>
          <Heading ml={"40px"}  fontSize={"35px"} textAlign={"left"}>And I'm a <AutoTypingText/> </Heading>
          <Button {...buttonStyle}>Resume</Button>
        </motion.div>
        </Box >
        <Box  {...HomeStyle2}>
        <motion.div  animate={{ x: [150,0] }} transition={{ duration: 1.5 }} >
         {/* <Image src={pkProfile} w={'60%'} m={'auto'} borderRadius={28}/> */}
         <ThreeDCardDemo/>
         </motion.div>
        </Box>
    </Flex>
  )
}

