import React from 'react'; //Importação do React
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'; //Importação da Biblioteca Chakra
import './Form.css'; // Importe seu arquivo CSS

const client_Form: React.FC = () => {
    return (
      <Box p={5}>
        <form>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input type="text" placeholder="Título" />
          </FormControl>
          <FormControl>
            <FormLabel>Deadline</FormLabel>
            <Input type="text" placeholder="Valido até: " />
          </FormControl>
          <FormControl>
            <FormLabel>InChargeOf</FormLabel>
            <Input type="text" placeholder="Responsável: " />
          </FormControl>
          <FormControl>
            <FormLabel>Objective</FormLabel>
            <Input type="text" placeholder="Objetivo: " />
          </FormControl>
          <FormControl>
            <FormLabel>MadeIn</FormLabel>
            <Input type="text" placeholder="Criado em: " />
          </FormControl>
          <FormControl>
            <FormLabel>UpdatedIn</FormLabel>
            <Input type="text" placeholder="Atualizado em: " />
          </FormControl>
  
          <Button type="submit" colorScheme="blue">Criar</Button>
        </form>
      </Box>
    );
  };
export default client_Form;