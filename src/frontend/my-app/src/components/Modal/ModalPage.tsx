
import { useDisclosure, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import React from "react";
import { ModalGeneric } from "./Modal";
import "./SolicitaEvidencia.css";

export const ModalSolicitaEvidencia = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        
            <>
            <button onClick={onOpen}>Pedir evidência</button>
                <ModalGeneric isOpen={isOpen} onClose={onClose}>
            <FormLabel><strong>Solicitação de evidência</strong></FormLabel>
                <FormLabel id="label">Documento requerido</FormLabel>
                <Input placeholder='Digite o documento requerido' size='md' />

                <FormLabel id="label">Descrição</FormLabel>
                <Textarea placeholder='Descreva a solicitação' />

                <FormLabel id="label">Data de entrega</FormLabel>
                <Input placeholder="Selecione a data" size="md" type="datetime-local"/>

                <Button colorScheme='teal' variant='solid'>Enviar</Button>
        </ModalGeneric></>
        
    );
};