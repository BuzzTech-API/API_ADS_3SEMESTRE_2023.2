import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// layouts e paginas
import { Home } from './pages/Home'

// rotas
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App