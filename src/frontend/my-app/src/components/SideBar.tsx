import { Image, Flex, Center, Text, IconButton, Input } from "@chakra-ui/react"
import { Search2Icon, AddIcon, ChevronRightIcon } from '@chakra-ui/icons'

import Logo from "../../assets/images/logo-ionichealth-1.png"
import { useEffect, useState } from "react"
import Process from ".././models/Process"
import { ProcessInterface } from ".././interfaces/processInterface"
import User from ".././models/User"


function SideBar() {
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

    return (
        <Flex
            flexDirection="column"
            bg="#58595B"
            maxW="380px"
            h="100vh"
            gap="30px"
            borderTopEndRadius="10px"
            borderBottomEndRadius="10px">

            {/*LOGO */}
            <Center
                mt="80px"
                mb="50px">
                <Image src={Logo} alt="Logo Ionic Health"></Image>
            </Center>


            <Flex
                flexDirection="column">

                {/* CONFIG PROCESSOS */}
                <Flex
                    align="center"
                    pl="20px">
                    <Text color="#53C4CD" fontFamily="Poppins, sans-serif" fontWeight='bold' fontSize="2rem">Processos</Text>
                </Flex>

                {/* PESQUISA E ADD PROCESSO */}
                <Flex
                    pl="20px" >
                    <Input
                        bg="white"
                        placeholder="Pesquise um processo..."
                        borderRightRadius="0"
                        w="250px">
                    </Input>
                    <IconButton
                        aria-label="Btn Pesquisar Processo"
                        borderLeftRadius="0"
                        bg="white"
                        border="0"
                        color="#292A2D"
                        p="0"
                        icon={<Search2Icon />}>
                    </IconButton>
                    <IconButton
                        aria-label="Btn Add Processo"
                        bg="#58595B"
                        color="white"
                        icon={<AddIcon />}
                        _hover={{ color: "black", bg: "white" }}>
                    </IconButton>
                </Flex>
            </Flex>

            {/* LISTA DE PROCESSOS */}
            <Flex
                flexDirection="column"
                borderRadius="5px"
                p="5px"
                pl="20px"
                cursor="pointer"
                >

                {/* PROCESSO CRIADO */}
                {processes.map( (process:Process) =>{
                    console.log(process);
                    
                    return <Flex
                    align="center"
                    key={process.id}
                    marginBottom='1rem' onClick={()=>{console.log('clicado no'+process.title)}}
                    >
                    <ChevronRightIcon
                        color="white"
                        boxSize="30px">
                    </ChevronRightIcon>
                    <Text
                        color="#53C4CD"
                        fontFamily="Poppins, sans-serif"
                        fontSize="25px">
                        {process.title}
                    </Text>
                </Flex>
                })}

                
            </Flex>

        </Flex>
    )

}

export default SideBar