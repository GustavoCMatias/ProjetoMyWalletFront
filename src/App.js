import styled from "styled-components";

import GlobalStyle from './globalStyles.js'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Login from "./components/Login.js";
import Cadastro from "./components/Cadastro.js";


function App() {


  return (
    <BrowserRouter>
      <GlobalStyle />
      <Tela>
        <Cadastro/>
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