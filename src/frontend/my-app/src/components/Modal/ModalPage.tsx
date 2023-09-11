
import { useDisclosure, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import React from "react";
import { ModalGeneric } from "./Modal";
import "./SolicitaEvidencia.css";

export const ModalSolicitaEvidencia = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        
            <>
            <Button onClick={onOpen} colorScheme="dark" variant='outline'>Pedir evidência</Button>
                <ModalGeneric isOpen={isOpen} onClose={onClose}>
            <FormLabel><strong>Solicitação de evidência</strong></FormLabel>
                <FormLabel margin-bottom="4px">Documento requerido</FormLabel>
                <Input placeholder='Digite o documento requerido' size='md' />

                <FormLabel margin-bottom="4px">Descrição</FormLabel>
                <Textarea placeholder='Descreva a solicitação' />

                <FormLabel margin-bottom="4px">Data de entrega</FormLabel>
                <Input placeholder="Selecione a data" size="md" type="datetime-local"/>

                <FormLabel margin-bottom="4px">Responsável</FormLabel>
                <Input placeholder='Digite o responsável pela solicitação' size='md' />
                <br/>
                <br/>
                <Button colorScheme='teal' variant='solid'>Enviar</Button>
        </ModalGeneric></>
        
    );
};