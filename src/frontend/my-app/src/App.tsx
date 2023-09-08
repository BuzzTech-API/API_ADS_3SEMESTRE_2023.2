import React from 'react'; //Importação do React
import { ChakraProvider } from '@chakra-ui/react'; //Importação da Biblioteca do Chakra
import client_Form from './components/form/ClientForm';
import { Home } from "./pages/Home";

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
