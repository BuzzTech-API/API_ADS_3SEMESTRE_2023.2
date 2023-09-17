import { Outlet } from "react-router-dom"
import Home from "./layout/Home"

function App() {
  return (
      <div>
        <Outlet/>
      </div>
  )
}

export default App