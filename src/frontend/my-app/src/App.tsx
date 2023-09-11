import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// layouts e paginas
import { Home } from './pages/Home'
import { Login } from './pages/Login'

// rotas
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />}>
    </Route>
    <Route path='/login' element={<Login />}></Route>
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App