import { BrowserRouter, redirect, Route, Routes, Navigate } from "react-router-dom"
import { Authenticated, verifyToken } from "../services/token"
import { useEffect, useState } from "react"
import { Home } from "../pages/Home"

const validateAccessToken = async () => {
    let authenticated = new Authenticated()
    return verifyToken(authenticated).then(() => {
        return authenticated.isAuthenticated
    }).catch(() => {
        return false
    })
  }

export function AuthValidation() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const checkAuthentication = async () => {
        setIsLoading(true)
        let authenticated = await validateAccessToken()
        setIsAuthenticated(authenticated)
        setIsLoading(false)
    }

    useEffect(() => {
        checkAuthentication()
    },[])

    return (
        
    )
}


function RequireAuth({ children }) {
    const { authed } = AuthValidation();
  
    return authed === true ? children : <Navigate to="/login" replace />;
  }

export function Router(){
    return(
        <BrowserRouter basename="/app">
            <Routes>
                <Route path="/" element={
                    <RequireAuthentication>
                        <Home/>
                    </RequireAuthentication>
                }
            </Routes>
      </BrowserRouter>
    )
}