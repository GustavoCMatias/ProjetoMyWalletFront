import axios from "axios"
import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import AuthContext from "../contexts/AuthContext"

export default function NovaEntrada(){
    const { token } = useContext(AuthContext)
    const [valor, setValor] = React.useState('')
    const [descricao, setDescricao] = React.useState('')
    const nav = useNavigate()

    function CadastarEntrada(e) {
        e.preventDefault()

        const config = {
            headers: {
                "Authorization": `Bearer ${token.token}`
            }
        }

        axios.post('http://localhost:5000/registros', {valor, descricao, tipo:'entrada'}, config)
            .then(() => {
                alert("Entrada registrada com sucesso")
                nav("/Home")
            })
            .catch(() => {
                alert("Insira os dados corretamente!")
                setValor('')
                setDescricao('')
            })
    }

    return (
        <TelaEntrada>

            <h1>Nova entrada</h1>
            <form onSubmit={CadastarEntrada}>
                <input type="number"
                    value={valor}
                    onChange={e => setValor(e.target.value)}
                    placeholder="Valor"
                    required />

                <input type="text"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                    placeholder="Descrição"
                    required />

                <button type="submit">Salvar entrada</button>
            </form>
        </TelaEntrada>
    )
}

const TelaEntrada = styled.div`
    padding-top: 25px;
    form{
        display: flex;
        flex-direction: column;
    }
    h1{
        font-family: Raleway;
        font-size: 26px;
        font-weight: 700;
        text-align: left;
        color: #FFFFFF;

        padding-left: 25px;
        margin-bottom: 40px;

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