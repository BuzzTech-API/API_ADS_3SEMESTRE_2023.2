import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProcessById } from "../services/process";
import Process from "../models/Process";
import { Box, Center, Flex, Grid, Heading, Text  } from "@chakra-ui/react";
import Step from "../models/Steps";
import { CardStep } from "../components/Card/cardStep";
import { CardBase } from "../components/Card/cardBase";
import FormP from "../components/FormProcess";

interface ShowProcessProps{
    id:number
}

export const ShowProcess = ()=>{
    const { id } = useParams();
    const [process, setProcess] = useState(new Process())
    useEffect(() => {
        (async () => {
            if (id) {
                const process =await getProcessById(Number.parseInt(id))
                if(process){
                    
                    setProcess(process)
                }
            }
        })();
        

    }, [id])
    
    
    return(<Flex textColor='white' flexDirection='column'>
    <Box 
    width='92rem'
    height='8rem'
    marginLeft='1rem'
    marginTop='1rem'
    borderRadius='2rem'
    padding='1rem'
    bg='#58595B'
    >
        <Flex flexDirection='column'>
        <Heading
        color='#53C4CD'
        size='lg'
        >
        {process.title}
        </Heading>
        <Text>{process.objective}</Text>
        </Flex>
    </Box>
    <Flex
    width='92rem'
    minHeight='50rem'
    marginLeft='1rem'
    marginTop='1.5rem'
    borderRadius='2rem'
    padding='1rem'
    bg='#58595B'
    
    >

        
    <Grid padding='1rem' templateColumns='repeat(4, 1fr)' gap='1.5rem' flex='1' >
        {process.steps===undefined? <div></div>: process.steps.map((step:Step)=> {
            
            
            return(<CardStep step={step} />)
        })}
            <CardBase width="18rem" height="21rem" bgColor="#1d1e20">
                <Box padding='0' width='100%' height='100%'>
                    <Center margin='50% auto'>
                        
                        <FormP sizeIcon="14" heightIcon={14} widthIcon={14} />

                    </Center>
                    
                </Box>
            </CardBase>
            
        </Grid>
    </Flex>
    
    </Flex>)

}