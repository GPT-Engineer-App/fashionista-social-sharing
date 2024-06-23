import React, { useState } from 'react';
import { Box, Button, Input, VStack, Text, Image } from '@chakra-ui/react';

const CollaborationUpload = () => {
  const [designImage, setDesignImage] = useState(null);
  const [modelImage, setModelImage] = useState(null);

  const handleDesignUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setDesignImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleModelUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setModelImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Collaboration Upload</Text>
        <Input type="file" onChange={handleDesignUpload} />
        {designImage && <Image src={designImage} alt="Design" />}
        <Input type="file" onChange={handleModelUpload} />
        {modelImage && <Image src={modelImage} alt="Model" />}
        <Button colorScheme="blue">Submit</Button>
      </VStack>
    </Box>
  );
};

export default CollaborationUpload;