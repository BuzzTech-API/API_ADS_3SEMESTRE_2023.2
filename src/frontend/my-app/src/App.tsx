import { Outlet } from 'react-router-dom'

// layouts e paginas
import SideBar from './components/SideBar/SideBar'
<<<<<<< HEAD
import { PageModal } from './pages/ModalPage'
import { ModalSolicitaEvidencia } from './components/Modal/BtnPedirEvidencia'
import { Authenticated, verifyToken } from './services/token'
import { ModalUploadEvidence } from './components/UploadEvidence'
=======
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'; //Importação do React
import { ChakraProvider, CSSReset, extendTheme} from '@chakra-ui/react'; //Importação da Biblioteca do Chakra
>>>>>>> 97a5a3c458f68fae583b92ebbfea02995b478639

const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif", // Altere "body" para a chave do tipo de fonte que deseja definir
    heading: "Poppins, sans-serif", // Se você deseja definir uma fonte para títulos
  },
  fontWeights: {
    normal: 400, // O peso normal da fonte (não negrito)
    bold: 1000, // O peso da fonte em negrito
  },
});


<<<<<<< HEAD
        if (authenticated.isAuthenticated === true) {
            return redirect('/')
        } else {
            return null
        }
    }).catch(() => {
        return null
    })
}

const router = createBrowserRouter(
    [
        {
            path: '/',
            loader: loader,
            element: <Home />,
            children: [
                {
                    path: '/modal',
                    element: <PageModal />
                },
                {
                    path: '/modal2',
                    element: <ModalUploadEvidence idRequestForEvidence = {1} idProcess = {1} />
                }
            ]
        },
        {
            path: '/login',
            loader: loaderLogin,
            element: <Login />
        }
    ]
)
=======
>>>>>>> 97a5a3c458f68fae583b92ebbfea02995b478639

function App() {
  return (
      <ChakraProvider theme={theme}>
        <CSSReset />
        <div>
            <Flex>
                <SideBar></SideBar>
                <Box p='2'>
                    <Outlet />
                </Box>
            </Flex>
        </div>
      </ChakraProvider>
    )

  }

      
     // <div className="App">
      //  <FormP/>
     // </div>


export default App;