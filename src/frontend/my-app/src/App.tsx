import React from 'react'; //Importação do React
import { ChakraProvider, CSSReset} from '@chakra-ui/react'; //Importação da Biblioteca do Chakra
import ClientForm from './components/form/ClientForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import './App.css';


function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <div className="App">
        <ClientForm/>
      </div>
    </ChakraProvider>
  );
}

export default App;