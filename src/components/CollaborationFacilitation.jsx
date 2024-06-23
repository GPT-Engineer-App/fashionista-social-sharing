import React from 'react';
import { Box, Text, VStack, Input, Button } from '@chakra-ui/react';

const creatorsLookingForCollab = [
  { name: 'Designer A', description: 'Looking for models for a new collection.' },
  { name: 'Photographer B', description: 'Seeking fashion designers for a photoshoot.' },
];

const CollaborationFacilitation = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Collaboration Facilitation</Text>
      <VStack spacing={4}>
        {creatorsLookingForCollab.map((creator, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md" w="100%">
            <Text fontSize="lg">{creator.name}</Text>
            <Text>{creator.description}</Text>
          </Box>
        ))}
        <Box p={4} borderWidth="1px" borderRadius="md" w="100%">
          <Text fontSize="lg" mb={2}>Express Interest</Text>
          <Input placeholder="Your Name" mb={2} />
          <Input placeholder="Your Email" mb={2} />
          <Input placeholder="Message" mb={2} />
          <Button colorScheme="blue">Submit</Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default CollaborationFacilitation;