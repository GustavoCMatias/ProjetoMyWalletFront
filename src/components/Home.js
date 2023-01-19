import styled from "styled-components"

import sair from "../img/Vector.png"
import mais from "../img/plus.png"
import menos from "../img/minus.png"
import { Link } from "react-router-dom"


export default function Home() {
    return (
        <TelaHome>
            <div>
                <h1>Olá, Fulano</h1>
                <Link to="/">
                    <img src={sair} alt="sair" />
                </Link>
            </div>

            <Registro></Registro>
            <div>
                <Link to="/nova-entrada">
                    <button>
                        <img src={mais} alt="mais" />
                        <p>Nova<br /> entrada</p>
                    </button>
                </Link>
                <Link to="/nova-saida">
                    <button>
                        <img src={menos} alt="menos" />
                        <p>Nova<br /> saída</p>
                    </button>
                </Link>
            </div>

        </TelaHome>
    )
}

const TelaHome = styled.div`
    padding: 15px 25px 16px 25px;
    h1{
        font-family: Raleway;
        font-size: 26px;
        font-weight: 700;
        text-align: left;
        color: #FFFFFF;

    }
    div{
        display: flex;
        justify-content: space-between;
    }
    button{
        background-color: #A328D6;
        height: 114px;
        width: 155px;
        border-radius: 5px;
        border: none;

        text-align: left;
        img{
            margin-bottom: 30px;
        }

    }
    p{
        font-family: Raleway;
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;

    }

`

const Registro = styled.div`
    height: 430px;
    width: 326px;
    border-radius: 5px;

    margin-top: 17px;
    margin-bottom: 13px;

    background-color: #FFFFFF;

`