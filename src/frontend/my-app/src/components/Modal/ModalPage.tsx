
import { useDisclosure, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import React from "react";
import { ModalGeneric } from "./Modal";

export const ModalSolicitaEvidencia = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        
            <>
            <Button bg='teal' onClick={onOpen} colorScheme="dark" variant='outline'>Pedir evidência</Button>
                <ModalGeneric isOpen={isOpen} onClose={onClose}>
            <FormLabel textAlign="center" fontSize="large"><strong>Solicitação de evidência</strong></FormLabel>
                <FormLabel pt={3}>Documento requerido</FormLabel>
                <Input placeholder='Digite o documento requerido' size='md' />

                <FormLabel pt={3}>Descrição</FormLabel>
                <Textarea placeholder='Descreva a solicitação' />

                <FormLabel pt={3}>Data de entrega</FormLabel>
                <Input placeholder="Selecione a data" size="md" type="datetime-local"/>

                <FormLabel pt={3}>Responsável</FormLabel>
                <Input mb={4}placeholder='Digite o responsável pela solicitação' size='md' />
                
                <Button display="flex" ml="auto" colorScheme='teal' variant='solid'>Enviar</Button>
        </ModalGeneric></>
        
    );
};