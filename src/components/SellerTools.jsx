import React, { useState } from 'react';
import { Box, Text, VStack, Input, Button, Textarea } from '@chakra-ui/react';

const SellerTools = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    // Logic to handle item submission
    console.log({ name, price, description, image });
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Seller Tools</Text>
      <VStack spacing={4}>
        <Input placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Input type="file" onChange={handleImageUpload} />
        {image && <img src={image} alt="Uploaded" />}
        <Button colorScheme="blue" onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Box>
  );
};

export default SellerTools;