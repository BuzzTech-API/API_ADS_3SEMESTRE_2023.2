import React, { useState } from 'react';
import { cardAnatomy } from '@chakra-ui/anatomy'
import { Box,
         Button,
         FormControl,
         FormLabel,
         Input,
         Card, 
         CardHeader, 
         CardBody, 
         Heading, 
         createMultiStyleConfigHelpers, 
         defineStyle } from '@chakra-ui/react';


interface FormData {
  title: string;
  description: string;
  objective: string;
}

const ClientForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    objective: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { title, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [title]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Aqui vou adicionar o controle dos dados. A rota talvez ?
  };
  
  const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys)

  const sizes = {
    xl: definePartsStyle({
      container: {
        borderRadius: "36px",
        padding: "40px"
      }
    })
  };

  return (
    <Card  w="70%" h="100%">
      <Box alignContent="left" bg="#333">
        <CardHeader>
          <Heading color="#ffffff" size='md'>
          CRIAÇÃO DE PROCESSOS
          </Heading>
        </CardHeader>
      </Box>
      <CardBody>
      <Box maxW="md" mx="auto" p={4}>
        <form onSubmit={handleSubmit}>
          <FormControl id="title" mb={4}>
            <FormLabel>Título</FormLabel>
            <Input
              type="text"
              title="title"
              value={formData.title}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="description" mb={4}>
            <FormLabel>Descrição</FormLabel>
            <Input
              type="text"
              title="description"
              value={formData.description}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="objective" mb={4}>
            <FormLabel>Objetivo</FormLabel>
            <Input
              type="text"
              title="objective"
              value={formData.objective}
              onChange={handleChange}
            />
          </FormControl>
          <div>
            <Button bg="#333" color="#ffffff" type="submit">Enviar</Button>
          </div>
      </form>
    </Box>
    </CardBody>
    </Card>
  );
};


export default ClientForm;

