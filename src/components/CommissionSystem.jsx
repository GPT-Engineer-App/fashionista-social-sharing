import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const CommissionSystem = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Commission System</Text>
      <VStack spacing={4}>
        <Box p={4} borderWidth="1px" borderRadius="md" w="100%">
          <Text fontSize="lg">The platform takes a 10% commission on all sales.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default CommissionSystem;