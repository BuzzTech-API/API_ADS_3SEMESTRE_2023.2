import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Checkbox, CheckboxGroup, CircularProgress, CircularProgressLabel  } from '@chakra-ui/react';
import './ClientForm.css';

interface FormData {
  title: string;
  description: string;
}

const Client_Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
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

  return (
    
    <Box maxW="md" mx="auto" p={4}>
      <link rel="stylesheet" href="ClientForm.css"></link>
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
        <button className="button" type="submit">Enviar</button>
      </form>
    </Box>
  );
};

export default Client_Form;
