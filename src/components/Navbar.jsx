import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" p={4}>
      <Flex align="center">
        <Text fontSize="xl" color="white" fontWeight="bold">
          Fashionista
        </Text>
        <Spacer />
        <Flex>
          <Link as={NavLink} to="/" p={2} color="white" _hover={{ textDecoration: "none", color: "brand.300" }}>
            Home
          </Link>
          <Link as={NavLink} to="/about" p={2} color="white" _hover={{ textDecoration: "none", color: "brand.300" }}>
            About
          </Link>
          <Link as={NavLink} to="/contact" p={2} color="white" _hover={{ textDecoration: "none", color: "brand.300" }}>
            Contact
          </Link>
          <Link as={NavLink} to="/virtual-try-on" p={2} color="white" _hover={{ textDecoration: "none", color: "brand.300" }}>
            Virtual Try-On
          </Link>
          <Link as={NavLink} to="/ar-fashion-show" p={2} color="white" _hover={{ textDecoration: "none", color: "brand.300" }}>
            AR Fashion Show
          </Link>
          <Link as={NavLink} to="/personalized-suggestions" p={2} color="white" _hover={{ textDecoration: "none", color: "brand.300" }}>
            Personalized Suggestions
          </Link>
          <Link as={NavLink} to="/featured-content" p={2} color="white" _hover={{ textDecoration: "none", color: "brand.300" }}>
            Featured Content
          </Link>
          <Link as={NavLink} to="/collaboration-facilitation" p={2} color="white" _hover={{ textDecoration: "none", color: "brand.300" }}>
            Collaboration Facilitation
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;