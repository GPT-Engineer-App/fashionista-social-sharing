import React from 'react';
import { Box, Text, VStack, Image, Button } from '@chakra-ui/react';

const featuredItems = [
  { id: 1, name: 'Stylish Dress', image: '/images/stylish-dress.jpg', price: 120, tips: 'Pair with high heels for an elegant look.' },
  { id: 2, name: 'Cool Hat', image: '/images/cool-hat.jpg', price: 45, tips: 'Perfect for a sunny day out.' },
];

const StylingTipsAndPurchases = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Styling Tips and Purchases</Text>
      <VStack spacing={4}>
        {featuredItems.map((item) => (
          <Box key={item.id} p={4} borderWidth="1px" borderRadius="md" w="100%">
            <Image src={item.image} alt={item.name} />
            <Text fontSize="lg" mt={2}>{item.name}</Text>
            <Text>${item.price}</Text>
            <Text>{item.tips}</Text>
            <Button colorScheme="blue" mt={2}>Buy Now</Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default StylingTipsAndPurchases;