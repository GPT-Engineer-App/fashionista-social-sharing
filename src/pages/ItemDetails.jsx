import React from 'react';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const mockItems = [
  { id: 1, name: 'Unique Dress', price: 120, image: '/images/unique-dress.jpg', description: 'A one-of-a-kind dress.' },
  { id: 2, name: 'Custom Hat', price: 45, image: '/images/custom-hat.jpg', description: 'A custom-made hat.' },
];

const ItemDetails = () => {
  const { id } = useParams();
  const item = mockItems.find((item) => item.id === parseInt(id));

  if (!item) {
    return <Text>Item not found</Text>;
  }

  return (
    <Box p={4}>
      <Image src={item.image} alt={item.name} />
      <Text fontSize="2xl" mt={2}>{item.name}</Text>
      <Text>${item.price}</Text>
      <Text>{item.description}</Text>
      <Button colorScheme="blue" mt={2}>Add to Cart</Button>
    </Box>
  );
};

export default ItemDetails;