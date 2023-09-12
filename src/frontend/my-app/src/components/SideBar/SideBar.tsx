import { Image, Flex, Center, Text, IconButton, Input} from "@chakra-ui/react"
import { SettingsIcon, Search2Icon, AddIcon, ChevronRightIcon } from '@chakra-ui/icons'

import Logo from "../../assets/images/logo-ionichealth-1.png"


function SideBar() {

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
                <hr/>
            </Center>

            
            <Flex
                flexDirection="column">
                
                {/* CONFIG PROCESSOS */}
                <Flex
                    align="center"
                    pl="20px">
                    <Text color="#53C4CD" fontFamily="Poppins, sans-serif" fontSize="35px">Processos</Text>
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

                        icon={<Search2Icon />}>
                    </IconButton>
                    <IconButton
                        aria-label="Btn Add Processo"
                        bg="#58595B"
                        color="white"
                        icon={<AddIcon />}>
                    </IconButton>
                </Flex>
            </Flex>

            {/* LISTA DE PROCESSOS */}
            <Flex
                flexDirection="column"
                borderRadius="5px"
                p="5px"
                pl="20px"
                cursor="pointer">

                {/* PROCESSO CRIADO */}
                {/* <Flex
                    align="center">
                    <ChevronRightIcon
                        color="white"
                        boxSize="30px">
                    </ChevronRightIcon>
                    <Text
                        color="#53C4CD"
                        fontFamily="Poppins, sans-serif"
                        fontSize="25px">
                        Processo1
                    </Text>
                </Flex>      */}
            </Flex>
            
        </Flex>
    )

}

export default SideBar