import { useState } from "react"
import Process from "../../models/Process"
import { CardBase } from "./cardBase"
import { Box, Heading, Text } from "@chakra-ui/react"

interface processCardInterface{
    process:Process
}



export const CardProcess = (processI: processCardInterface) => {
    const [process, setProcess] = useState(processI.process)
    const evento = ()=>{}
    if (process.priority === 'Alta') {
         
        return  <CardBase onClickEvent={evento}>
                    <Box flex='1' marginBottom='0rem'>
                        <Box borderBottom='0.2rem solid' borderColor='#FFF' padding='0.4rem'>
                            <Heading textColor='#53C4CD' size='lg' textAlign='center'>Processo #{process.id}</Heading>
                        </Box>
                        <Box padding='0.5rem 0.1rem'>
                            <Text fontSize='1rem' textAlign='center' textColor='#FFF'>Titulo</Text>
                            <Text fontSize='1.5rem' textAlign='center' textColor='#53C4CD'>{process.title}</Text>
                        </Box>
                        <Box padding='0.5rem 0.1rem'>
                            <Text fontSize='1rem' textAlign='center' textColor='#FFF'>Última Atualização</Text>
                            <Text fontSize='1.5rem' textAlign='center' textColor='#53C4CD'>{process.lastUpdate.toString()}</Text>
                        </Box>
                        <Box padding='0.5rem 0.1rem'>
                            <Text fontSize='1rem' textAlign='center' textColor='#FFF'>Status</Text>
                            <Text fontSize='1.5rem' textAlign='center' textColor='#53C4CD'>{process.status}</Text>
                        </Box>

                    </Box>
                    <Box 
                    bg='#FF0000' 
                    width='20rem' 
                    height='4rem' 
                    borderRadius='0 0 2rem 2rem' 
                    alignSelf='flex-end'
                    textColor='#FFF'
                    fontFamily="Poppins, sans-serif"
                    fontSize="25px"
                    textAlign='center'
                    marginBottom='0'
                    marginTop='1.7rem'
                    borderTop='0.2rem solid'
                    borderColor='#FFF'
                    padding='0.6rem'
                    >Alta</Box>;
                </CardBase>
    }else if (process.priority ==='Média') {
        return  <CardBase onClickEvent={evento}>
                    <Box flex='1' marginBottom='0rem'>
                        <Box borderBottom='0.2rem solid' borderColor='#FFF' padding='0.4rem'>
                            <Heading textColor='#53C4CD' size='lg' textAlign='center'>Processo #{process.id}</Heading>
                        </Box>
                        <Box padding='0.5rem 0.1rem'>
                            <Text fontSize='1rem' textAlign='center' textColor='#FFF'>Titulo</Text>
                            <Text fontSize='1.5rem' textAlign='center' textColor='#53C4CD'>{process.title}</Text>
                        </Box>
                        <Box padding='0.5rem 0.1rem'>
                            <Text fontSize='1rem' textAlign='center' textColor='#FFF'>Última Atualização</Text>
                            <Text fontSize='1.5rem' textAlign='center' textColor='#53C4CD'>{process.lastUpdate.toString()}</Text>
                        </Box>
                        <Box padding='0.5rem 0.1rem'>
                            <Text fontSize='1rem' textAlign='center' textColor='#FFF'>Status</Text>
                            <Text fontSize='1.5rem' textAlign='center' textColor='#53C4CD'>{process.status}</Text>
                        </Box>

                    </Box>
                    <Box 
                    bg='#FF7A00' 
                    width='20rem' 
                    height='4rem' 
                    borderRadius='0 0 2rem 2rem' 
                    alignSelf='flex-end'
                    textColor='#FFF'
                    fontFamily="Poppins, sans-serif"
                    fontSize="25px"
                    textAlign='center'
                    marginBottom='0'
                    marginTop='1.7rem'
                    borderTop='0.2rem solid'
                    borderColor='#FFF'
                    padding='0.6rem'
                    >Média</Box>;
                </CardBase>
    }else{
        return  <CardBase onClickEvent={evento}>
                    <Box flex='1' marginBottom='0rem'>
                        <Box borderBottom='0.2rem solid' borderColor='#FFF' padding='0.4rem'>
                            <Heading textColor='#53C4CD' size='lg' textAlign='center'>Processo #{process.id}</Heading>
                        </Box>
                        <Box padding='0.5rem 0.1rem'>
                            <Text fontSize='1rem' textAlign='center' textColor='#FFF'>Titulo</Text>
                            <Text fontSize='1.5rem' textAlign='center' textColor='#53C4CD'>{process.title}</Text>
                        </Box>
                        <Box padding='0.5rem 0.1rem'>
                            <Text fontSize='1rem' textAlign='center' textColor='#FFF'>Última Atualização</Text>
                            <Text fontSize='1.5rem' textAlign='center' textColor='#53C4CD'>{process.lastUpdate.toString()}</Text>
                        </Box>
                        <Box padding='0.5rem 0.1rem'>
                            <Text fontSize='1rem' textAlign='center' textColor='#FFF'>Status</Text>
                            <Text fontSize='1.5rem' textAlign='center' textColor='#53C4CD'>{process.status}</Text>
                        </Box>

                    </Box>
                    <Box 
                    bg='#00750C' 
                    width='20rem' 
                    height='4rem' 
                    borderRadius='0 0 2rem 2rem' 
                    alignSelf='flex-end'
                    textColor='#FFF'
                    fontFamily="Poppins, sans-serif"
                    fontSize="25px"
                    textAlign='center'
                    marginBottom='0'
                    marginTop='1.7rem'
                    borderTop='0.2rem solid'
                    borderColor='#FFF'
                    padding='0.6rem'
                    >Baixa</Box>;
                </CardBase>
    }
       
}