import { createBrowserRouter, createRoutesFromElements, redirect, Route, RouterProvider } from 'react-router-dom'

// layouts e paginas
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import SideBar from './components/SideBar/SideBar'
import { PageModal } from './pages/ModalPage'
import { ModalSolicitaEvidencia } from './components/Modal/BtnPedirEvidencia'
import { ModalUploadEvidence } from './components/UploadEvidence'
import { Authenticated, verifyToken } from './services/token'

// rotas
const loader = () => {
    let authenticated = new Authenticated()
    return verifyToken(authenticated).then(() => {

        if (authenticated.isAuthenticated === false) {
            return redirect('/login')
        } else {
            return null
        }
    }).catch(() => {
        return null
    })
}
const loaderLogin = () => {
    let authenticated = new Authenticated()
    return verifyToken(authenticated).then(() => {


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
                    element: <ModalSolicitaEvidencia />
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

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;