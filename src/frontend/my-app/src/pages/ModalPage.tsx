
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { ModalGeneric } from "../components/Modal/Modal";

export const PageModal = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        
            <>
            <button onClick={onOpen}>Open Modal</button>
                <ModalGeneric isOpen={isOpen} onClose={onClose}>
            <p>Oi</p>

        </ModalGeneric></>
        
    );
};