import * as React from 'react';
import Logo from "../assets/pklogo.png"
import { Box, Button, Flex, Heading, Image, Link, textDecoration } from '@chakra-ui/react';


export default function Navbar() {
  const navContStyle = {
    h: "100px",
    justify: "space-between",
    w: "80%",
    m: "auto",
    align: "center",
    color : "white",
    textShadow: '1px 1px white',
    boxShadow: 'dark-lg',

  }

  const LinkStyleing = {
    bg: "none",
    _hover: { color: "red" },
    cursor: "pointer",
    border: "none",
    color: "white"
  }
  const linkstyle = {
    color: "white",
    _hover: { color: "red" },
    fontWeight: "bold",
    textDecoration: "none",
    boxShadow: 'dark-lg',
    
  }

  return (
    <nav style={{ backgroundColor: "black", opacity: 0.4 }}>
      <Flex {...navContStyle} >
        <Flex align={"center"}>
          <Image src={Logo} w={"100px"} />
          <Heading m={0} p={0}>Pravin Kumar</Heading>
        </Flex>
        <Flex align={"center"} justify={"space-around"} w={"40%"} display={{ base: "none", md: "flex" }}>

          <Button {...LinkStyleing} ><Link {...linkstyle} href='#home'>Home</Link> </Button>


          <Button {...LinkStyleing} href={"#about"}><Link {...linkstyle} href='#about'>About</Link></Button>

          <Button {...LinkStyleing} href={"#services"}><Link {...linkstyle} href='#services'>Services</Link></Button>

          <Button {...LinkStyleing} href={"#contect"}><Link {...linkstyle} href='#contect'>Contect Us</Link></Button>
        </Flex>
        <Box display={{ base: "block", md: "none" }} >
          menu
        </Box>
      </Flex>
    </nav>
  )
}
