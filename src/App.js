import styled from "styled-components";
import AuthContext from "./contexts/AuthContext.js";
import GlobalStyle from './globalStyles.js'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/Login.js";
import Cadastro from "./components/Cadastro.js";
import Home from "./components/Home.js";
import NovaEntrada from "./components/NovaEntrada.js";
import NovaSaida from "./components/NovaSaida.js";


function App() {

  const [token, setToken] = React.useState('')
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <GlobalStyle />
        <Tela>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/nova-entrada" element={<NovaEntrada />} />
            <Route path="/nova-saida" element={<NovaSaida />} />

          </Routes>
        </Tela>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

const Tela = styled.div`
  min-height: 100vh;
  width: 375px;
  background-color: #8C11BE;


`