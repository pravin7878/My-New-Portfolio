import { Box, Flex, Heading,Image,Text} from '@chakra-ui/react'
import { AnimatedComputer } from './animtion/ComputerAnimatin'

export default function About() {

    const aboutBoxstyle = {
        border:'solid 2px red',
        justify:'space-around'
    }
    const childstyle = {
        border:'solid 2px red'
    }
  return (
   <Box>
<Heading>About me</Heading>
<Flex {...aboutBoxstyle}>
    <Box {...childstyle}>
        {/* <Image /> */}
     <AnimatedComputer/>
    </Box>
    <Box  {...childstyle}>
        <Text>I'm Pravin Kumar.I'm Frontend Devloper
I'm Skilled Front End Developer, mastering HTML, CSS, and JavaScript. Git expert for seamless version control. Renowned for crafting visually appealing, responsive web interfaces, showcasing adept problem-solving skills.</Text>
    </Box>
</Flex>
   </Box>
  )
}
