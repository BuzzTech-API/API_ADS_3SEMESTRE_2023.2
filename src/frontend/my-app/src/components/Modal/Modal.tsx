import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import * as React from 'react'
  
  
  interface ModalProps {
    isOpen: boolean,
    onClose: () => void
    children: React.ReactNode,
    header?: React.ReactNode,
    footer?: React.ReactNode
  
  }
  
  export const ModalGeneric = ({header, footer, children, isOpen, onClose}: ModalProps) =>{
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            {header ? <ModalHeader>{header}</ModalHeader>: null}
            <ModalCloseButton />
            <ModalBody>{children}</ModalBody>
            {footer ? <ModalFooter>{footer}</ModalFooter>: null}
          </ModalContent>
        </Modal>
    );
  };