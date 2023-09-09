import { Image, Flex, Center, Text, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { SettingsIcon, Search2Icon, AddIcon } from '@chakra-ui/icons'
import Logo from "../../assets/images/logo-ionichealth-1.png"


function SideBar(){

    return(
        <Flex flexDirection="column" bg="#58595B" w="300px" h="100vh" gap="20px">
            <Center>
                <Image src={Logo} alt="Logo Ionic Health"></Image>      
            </Center>
            <Center display="flex" flexDirection="column">
                <Flex align="center">
                    <Text color="#53C4CD" fontFamily="Poppins, sans-serif" fontSize="30px">Processos</Text>
                    <IconButton aria-label="Configuracao Processos" icon={<SettingsIcon/>} bg="#58595B" color="white"></IconButton>
                </Flex>
                <Flex>
                     <InputGroup>
                        <Input bg="white" placeholder="Pesquise um processo..."></Input>
                        <InputRightElement>
                            <IconButton aria-label="Btn Pesquisar Processo" icon={<Search2Icon/>}></IconButton>
                        </InputRightElement>
                     </InputGroup>
                     <IconButton aria-label="Btn Add Processo" icon={<AddIcon/>} ></IconButton>
                </Flex>
            </Center>

        </Flex>
    )
    
}

export default SideBar