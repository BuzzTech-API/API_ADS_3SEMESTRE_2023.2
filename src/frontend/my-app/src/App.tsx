import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// layouts e paginas
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import SideBar from './components/SideBar/SideBar'
import { PageModal } from './pages/ModalPage'
import { ModalSolicitaEvidencia } from './components/Modal/BtnPedirEvidencia'

// rotas
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/modal" element={<PageModal />}></Route>

      <Route path='/login' element={<Login />}></Route>
      <Route path="/" element={<ModalSolicitaEvidencia/>}></Route>

      
    </>
  )
)

  function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;