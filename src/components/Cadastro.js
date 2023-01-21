import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function Cadastro() {
    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [confirmacao, setConfirmacao] = React.useState('')
    const nav = useNavigate()

    function Cadastrar(e) {
        e.preventDefault()
        if(senha!==confirmacao)return alert('Senha está diferente da confirmação')
        axios.post('http://localhost:5000/cadastro', {nome, email, senha, confirmacao})
            .then(()=>{
                alert('Cadastro realizado com sucesso')
                nav('/')
            })
            .catch((erro)=> {
                alert(erro.response.data)
                setNome('')
                setEmail('')
                setSenha('')
                setConfirmacao('')
            })
        
        return
    }

    return (
        <TelaCadastro>

            <h1>MyWallet</h1>
            <form onSubmit={Cadastrar}>
                <input type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="Nome"
                    required />
                <input type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="E-mail"
                    required />

                <input type="text"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    placeholder="Senha"
                    required />

                <input type="text"
                    value={confirmacao}
                    onChange={e => setConfirmacao(e.target.value)}
                    placeholder="Confirme a senha"
                    required />

                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">
                <p>Já tem uma conta? Entre agora!</p>
            </Link>

        </TelaCadastro>
    )

}

const TelaCadastro = styled.div`
    padding-top: 95px;
    form{
        display: flex;
        flex-direction: column;
    }
    h1{
        font-family: 'Saira Stencil One';
        font-size: 32px;
        font-weight: 400;
        line-height: 50px;
        letter-spacing: 0em;
        text-align: center;
        color: #FFFFFF;

        margin-bottom: 24px;

    }
    input{
        width: 326px;
        height: 58px;
        margin: auto;

        margin-bottom: 13px;

        font-family: Raleway;
        font-size: 20px;    
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        padding-left: 15px;

    }
    button{

    width: 326px;
    height: 46px;

    background: #A328D6;
    border-radius: 5px;
    margin: auto;
    border: none;

    font-family: Raleway;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFFFF;

    }
    p{
        font-family: Raleway;
        font-size: 15px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: center;
        color: #FFFFFF;

        margin-top: 36px;

    }

`