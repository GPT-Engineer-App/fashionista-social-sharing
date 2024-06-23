import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const featuredContent = [
  { type: 'style', name: 'Bohemian Chic' },
  { type: 'collection', name: 'Spring 2023 by Designer X' },
  { type: 'content', name: 'Top 10 Summer Trends' },
];

const FeaturedContent = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Featured Content</Text>
      <VStack spacing={4}>
        {featuredContent.map((content, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md" w="100%">
            <Text fontSize="lg">{content.type}: {content.name}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default FeaturedContent;