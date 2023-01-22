import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import AuthContext from "../contexts/AuthContext"


export default function Login() {
    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const nav = useNavigate()
    const {setToken} = useContext(AuthContext)

    async function FazerLogin(e) {
        e.preventDefault()

        axios.post('http://localhost:5000', {email, senha})
            .then((res) => {
                console.log(res.data)
                setToken(res.data)
                nav('/Home')
            })
            .catch(() => {
                alert('Usuário/senha inválido(s)')
                setEmail('')
                setSenha('')
            })
    }
    return (
        <TelaLogin>

            <h1>MyWallet</h1>
            <form onSubmit={FazerLogin}>
                <input type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="E-mail"
                    required />

                <input type="password"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    placeholder="Senha"
                    required />

                <button type="submit">Entrar</button>
            </form>
            <Link to="/Cadastro">
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </TelaLogin>
    )
}


const TelaLogin = styled.div`
    padding-top: 159px;
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
        :link{
            text-decoration: none;
        }
        

    }
    




`