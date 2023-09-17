import React, { useEffect, useState } from "react"
import { Box, Center, Flex, Grid, IconButton} from "@chakra-ui/react"
import Process from "../models/Process"
import { ProcessInterface } from "../interfaces/processInterface"
import User from "../models/User"
import { CardProcess } from "../components/Card/cardProcesso"
import { CardBase } from "../components/Card/cardBase"
import { AddIcon } from "@chakra-ui/icons"

export const Home = () => {
    const [processes, setProcesses] = useState(new Array<Process>())
    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('access_token');
            const response = await fetch('http://localhost:8000/processes', {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Authorization': `Bearer ${token}`,
                }
              })

              if (response.ok) {
                const content = await response.json()
                console.log(content);
                
                const processList= new Array<Process>()
                content.forEach( (item: ProcessInterface) => {
                    const usersList= new Array<User>()
                    item.users.forEach(element => {
                        usersList.push(element.user)
                    });
                    processList.push(new Process(
                        item.id,
                        item.title,
                        item.endingDate,
                        item.createDate,
                        item.lastUpdate,
                        item.is_active,
                        item.priority,
                        item.status,
                        item.steps,
                        usersList
                    )
                        )
                        
                });
                setProcesses(processList)
            }else{
                
              }
              
            })();
        }, [])

    return(<div>

        <Grid marginLeft='1rem' templateColumns='repeat(4, 1fr)' gap='1.5rem' >
            {processes.map((process:Process) =>{
                return <CardProcess 
                process={process}                
                />
                

            })}
            <CardBase>
                <Box padding='0' width='100%' height='100%'>
                    <Center>
                        <IconButton margin='50% auto'
                                    aria-label="Btn Add Processo"
                                    bg="#58595B"
                                    color="white"
                                    size='14'
                                    icon={<AddIcon h='14' w='14' />}
                                    _hover={{ color: "#58595B", bg: "white" }}
                                    >
                        </IconButton>
                    </Center>
                    
                </Box>
            </CardBase>
            
        </Grid>
    </div>

    )
}