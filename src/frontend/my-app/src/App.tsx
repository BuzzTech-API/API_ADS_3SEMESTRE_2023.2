import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// layouts e paginas
import { Home } from './pages/Home'
import { ModalSolicitaEvidencia } from './components/Modal/ModalPage'

// rotas
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<ModalSolicitaEvidencia/>}>
      
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App