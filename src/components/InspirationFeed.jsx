import React from 'react';
import { Box, Text, VStack, Image } from '@chakra-ui/react';

const inspirations = [
  { id: 1, name: 'Fashionista A', image: '/images/inspiration1.jpg', description: 'Chic summer look.' },
  { id: 2, name: 'Model B', image: '/images/inspiration2.jpg', description: 'Elegant evening wear.' },
];

const InspirationFeed = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Inspiration Feed</Text>
      <VStack spacing={4}>
        {inspirations.map((inspiration) => (
          <Box key={inspiration.id} p={4} borderWidth="1px" borderRadius="md" w="100%">
            <Image src={inspiration.image} alt={inspiration.name} />
            <Text fontSize="lg" mt={2}>{inspiration.name}</Text>
            <Text>{inspiration.description}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default InspirationFeed;