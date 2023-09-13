import React from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

function EtapaForm() {
  return (
    <Box
      className="card"
      maxWidth="400px"
      margin="0 auto"
      padding="20px"
      border="1px solid #ccc"
      borderRadius="8px"
      boxShadow="0 2px 4px #0000001a"
      backgroundColor="#333"
      alignItems="center"
    >
      <Heading as="h2" size="lg" mb={4} className="Titulo" color="#54c5ce" textAlign="center">
        Nova etapa
      </Heading>
      <form>
        <FormControl id="nomeEtapa" mb={4}>
          <FormLabel className="Subtitulo" color="#ffff">
            Nome da Etapa
          </FormLabel>
          <Input type="text" background="white" color="#333" />
        </FormControl>

        <FormControl id="objetivo" mb={4}>
          <FormLabel className="Subtitulo" color="#ffff">
            Objetivo
          </FormLabel>
          <Textarea background="white" color="#333" />
        </FormControl>

        <FormControl className="Subtitulo" color="#ffff" id="previsaoTermino" mb={4}>
          <FormLabel>Previsão de Término</FormLabel>
          <Input type="date" background="white" color="#333" />
        </FormControl>

        <FormControl id="responsaveis" color="#ffff" mb={4}>
          <FormLabel className="Subtitulo">Responsáveis</FormLabel>
          <Input type="text" background="white" color="#333" />
        </FormControl>

        <Button
          marginTop= "20px"
          type="submit"
          colorScheme="teal"
          backgroundColor="#53c4cd" // Define a cor de fundo para #53c4cd
          color="#333"
          width="100%" // Faz o botão ocupar todo o espaço lateralmente
        >
          Enviar
        </Button>
      </form>
    </Box>
  );
}

export default EtapaForm;
