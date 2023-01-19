import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function NovaSaida(){

    const [valor, setValor] = React.useState('')
    const [descricao, setDescricao] = React.useState('')
    const nav = useNavigate()

    function CadastarEntrada(e) {
        e.preventDefault()
        console.log('show')

        setValor('')
        setDescricao('')
        nav("/Home")
        return
    }

    return (
        <TelaSaida>

            <h1>Nova saída</h1>
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

                <button type="submit">Salvar saída</button>
            </form>
        </TelaSaida>
    )
}

const TelaSaida = styled.div`
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