import { Box, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">About Fashionista</Text>
        <Text>Fashionista is a platform for fashion enthusiasts, models, and designers to showcase their work, talents, and inspirations.</Text>
      </VStack>
    </Box>
  );
};

export default About;