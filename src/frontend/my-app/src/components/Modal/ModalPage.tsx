
import { useDisclosure, FormLabel } from "@chakra-ui/react";
import React from "react";
import { ModalGeneric } from "./Modal";

export const ModalSolicitaEvidencia = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        
            <>
            <button onClick={onOpen}>Pedir evidência</button>
                <ModalGeneric isOpen={isOpen} onClose={onClose}>
            <FormLabel>Solicitação de evidência</FormLabel>


        </ModalGeneric></>
        
    );
};