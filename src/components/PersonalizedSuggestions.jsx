import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const mockUserData = {
  preferences: ['streetwear', 'vintage', 'minimalist'],
  browsingHistory: ['designer1', 'trend1', 'product1'],
};

const mockSuggestions = [
  { type: 'creator', name: 'Designer 1' },
  { type: 'trend', name: 'Vintage Revival' },
  { type: 'product', name: 'Minimalist Watch' },
];

const PersonalizedSuggestions = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Personalized Suggestions</Text>
      <VStack spacing={4}>
        {mockSuggestions.map((suggestion, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md" w="100%">
            <Text fontSize="lg">{suggestion.type}: {suggestion.name}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default PersonalizedSuggestions;