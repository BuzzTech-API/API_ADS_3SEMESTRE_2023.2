import { Outlet } from 'react-router-dom'

// layouts e paginas
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import SideBar from './components/SideBar'
import { PageModal } from './pages/ModalPage'
import { ModalSolicitaEvidencia } from './components/Modal/BtnPedirEvidencia'
import { ModalUploadEvidence } from './components/UploadEvidence'
import { Authenticated, verifyToken } from './services/token'
import { Box, Flex } from '@chakra-ui/react'



function App() {
    return (<div>

        <Flex>
            <SideBar></SideBar>
            <Box p='2'>
                <Outlet />
            </Box>
        </Flex>
    </div>
    )
}

export default App;