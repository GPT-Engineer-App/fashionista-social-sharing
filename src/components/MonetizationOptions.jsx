import React from 'react';
import { Box, Text, VStack, Button } from '@chakra-ui/react';

const MonetizationOptions = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Monetization Options</Text>
      <VStack spacing={4}>
        <Box p={4} borderWidth="1px" borderRadius="md" w="100%">
          <Text fontSize="lg">Paid Subscriptions</Text>
          <Button colorScheme="blue" mt={2}>Subscribe</Button>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="md" w="100%">
          <Text fontSize="lg">Exclusive Content</Text>
          <Button colorScheme="blue" mt={2}>Access Content</Button>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="md" w="100%">
          <Text fontSize="lg">Workshops</Text>
          <Button colorScheme="blue" mt={2}>Join Workshop</Button>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="md" w="100%">
          <Text fontSize="lg">Consultations</Text>
          <Button colorScheme="blue" mt={2}>Book Consultation</Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default MonetizationOptions;