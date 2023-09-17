import { Box, Flex } from "@chakra-ui/react"
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode; // O tipo ReactNode permite que qualquer conteúdo seja passado
  onClickEvent?:()=> void;
}

export const CardBase= ({children, onClickEvent}:Props) => {
    return(
    <Box width='20rem' bg='#58595B' height='25rem' borderRadius='2rem' padding='0' onClick={onClickEvent}>
        <Flex flexDirection='column' height='100%'  padding='0'>
            {children}
        </Flex>
    </Box>
    )
}