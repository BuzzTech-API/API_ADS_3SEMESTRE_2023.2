import React from 'react'; //Importação do React
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react'; //Importação da Biblioteca do Chakra
import Client_Form from './components/form/ClientForm';
import { Home } from "./pages/Home";

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <div className="App">
        <Client_Form />
      </div>
    </ChakraProvider>
  );
}

export default App;