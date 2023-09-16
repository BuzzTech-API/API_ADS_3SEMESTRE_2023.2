import { Box, Button } from "@chakra-ui/react"
import React from "react"
import SideBar from "../components/SideBar/SideBar"
import EtapaForm from "../components/EtapaForm"
import { Outlet } from "react-router-dom"
import { Flex} from "@chakra-ui/react"

export const Home = () => {

    return(<div>

        <Flex>
            <Box p='2' padding='0'>
                <SideBar></SideBar>
            </Box>
            <Box p='2'>
                <Outlet />
                <EtapaForm></EtapaForm>
            </Box>
        </Flex>
    </div>

    )
}