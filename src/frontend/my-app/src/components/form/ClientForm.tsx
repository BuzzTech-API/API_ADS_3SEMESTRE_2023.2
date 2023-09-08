import React from 'react'; //Importação do React
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'; //Importação da Biblioteca Chakra
import './Form.css'; // Importe seu arquivo CSS

const client_Form: React.FC = () => {
    return (
      <Box p={4}>
        <form>
          <FormControl>
            <FormLabel>Nome:</FormLabel>
            <Input type="text" placeholder="Digite seu nome" />
          </FormControl>
  
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input type="email" placeholder="Digite seu email" />
          </FormControl>
  
          <Button type="submit" colorScheme="blue">
            Enviar
          </Button>
        </form>
      </Box>
    );
  };
export default client_Form;