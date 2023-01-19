import styled from "styled-components";

import GlobalStyle from './globalStyles.js'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/Login.js";
import Cadastro from "./components/Cadastro.js";
import Home from "./components/Home.js";
import NovaEntrada from "./components/NovaEntrada.js";
import NovaSaida from "./components/NovaSaida.js";


function App() {


  return (
    <BrowserRouter>
      <GlobalStyle />
      <Tela>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/nova-entrada" element={<NovaEntrada/>}/>
          <Route path="/nova-saida" element={<NovaSaida/>}/>

        </Routes>
      </Tela>
    </BrowserRouter>
  );
}

export default App;

const Tela = styled.div`
  min-height: 100vh;
  width: 375px;
  background-color: #8C11BE;


`