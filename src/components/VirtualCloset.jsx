import React, { useState } from 'react';
import { Box, Text, VStack, Image, Button, Input } from '@chakra-ui/react';

const availableItems = [
  { id: 1, name: 'Dress', image: '/images/dress.jpg' },
  { id: 2, name: 'Hat', image: '/images/hat.jpg' },
];

const VirtualCloset = () => {
  const [closet, setCloset] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItemToCloset = (item) => {
    setCloset([...closet, item]);
  };

  const handleNewItemChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddNewItem = () => {
    if (newItem) {
      addItemToCloset({ id: closet.length + 1, name: newItem, image: '/images/default.jpg' });
      setNewItem('');
    }
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Virtual Closet</Text>
      <VStack spacing={4}>
        <Input placeholder="Add new item" value={newItem} onChange={handleNewItemChange} />
        <Button colorScheme="blue" onClick={handleAddNewItem}>Add Item</Button>
        {availableItems.map((item) => (
          <Button key={item.id} onClick={() => addItemToCloset(item)}>{item.name}</Button>
        ))}
        <Text fontSize="xl" mt={4}>Your Closet</Text>
        {closet.map((item, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md" w="100%">
            <Image src={item.image} alt={item.name} />
            <Text fontSize="lg" mt={2}>{item.name}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default VirtualCloset;