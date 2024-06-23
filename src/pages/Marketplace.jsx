import React, { useState, useEffect } from 'react';
import { Box, Text, VStack, Button, Input, Image, Grid, GridItem } from '@chakra-ui/react';

const mockItems = [
  { id: 1, name: 'Unique Dress', price: 120, image: '/images/unique-dress.jpg', description: 'A one-of-a-kind dress.' },
  { id: 2, name: 'Custom Hat', price: 45, image: '/images/custom-hat.jpg', description: 'A custom-made hat.' },
];

const Marketplace = () => {
  const [items, setItems] = useState(mockItems);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Marketplace for Unique Pieces</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {items.map((item) => (
          <GridItem key={item.id} borderWidth="1px" borderRadius="md" p={4}>
            <Image src={item.image} alt={item.name} />
            <Text fontSize="lg" mt={2}>{item.name}</Text>
            <Text>${item.price}</Text>
            <Text>{item.description}</Text>
            <Button colorScheme="blue" mt={2} onClick={() => addToCart(item)}>Add to Cart</Button>
          </GridItem>
        ))}
      </Grid>
      <Box mt={8}>
        <Text fontSize="2xl" mb={4}>Shopping Cart</Text>
        {cart.length === 0 ? (
          <Text>No items in cart.</Text>
        ) : (
          <VStack spacing={4}>
            {cart.map((item, index) => (
              <Box key={index} borderWidth="1px" borderRadius="md" p={4} w="100%">
                <Text fontSize="lg">{item.name}</Text>
                <Text>${item.price}</Text>
              </Box>
            ))}
          </VStack>
        )}
      </Box>
    </Box>
  );
};

export default Marketplace;