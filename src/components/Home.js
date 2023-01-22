import styled from "styled-components"

import sair from "../img/Vector.png"
import mais from "../img/plus.png"
import menos from "../img/minus.png"
import { Link } from "react-router-dom"
import React, { useContext, useEffect } from "react"
import axios from "axios"
import AuthContext from "../contexts/AuthContext";



export default function Home() {
    const { token } = useContext(AuthContext)
    const [registros, setRegistros] = React.useState([])
    const [valorSaldo, setValorSaldo] = React.useState(0)

    function saldo(extrato){
        let saldo = 0
        extrato.forEach(element => {
            if(element.tipo === 'saida'){
                saldo-=element.valor
            }else{
                saldo+=element.valor
            }

        });
        return saldo;
    }

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const req = axios.get('http://localhost:5000/registros', config)
            .then((res) => {
                setRegistros(res.data)
                setValorSaldo(saldo(res.data))

            })
    }, [])

    return (
        <TelaHome>
            <div>
                <h1>Olá, Fulano</h1>
                <Link to="/">
                    <img src={sair} alt="sair" />
                </Link>
            </div>

            <Registro>
                <div className="registros">
                {registros.map((item) =>
                    <div className="item">
                        <span>
                            <span className="cinza">01/01</span> <span> {item.descricao}</span>
                        </span>
                        <span className={item.tipo === 'saida' ? 'vermelho' : 'verde'}>{item.valor}</span>
                    </div>
                )}
                <p className={!registros ? '' : 'esconder'}>Não há registros de <br />entrada ou saída</p>
                </div>
                <div className={registros?"item":"esconder"} ><span className="saldo"> SALDO</span> <span className={valorSaldo<0?'vermelho':'verde'}>{Math.abs(valorSaldo)}</span></div>
            </Registro>
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
    height: 446px;
    width: 326px;
    border-radius: 5px;

    margin-top: 17px;
    margin-bottom: 13px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    background-color: #FFFFFF;
    overflow: hidden;

    padding: 23px 12px 10px 12px;

    p{
        font-family: Raleway;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: center;
        color: #868686;

        margin: auto;

    }

    .esconder{
        display: none;
    }

    .item{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    span{
        font-family: Raleway;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        color: black;


    }
    .registros{
        display: flex;
        flex-direction: column;
    }
    .vermelho{
        color: #C70000;
    }
    .verde{
        color: #03AC00;
    }
    .cinza{
        color: #C6C6C6;
        margin-right: 8px;
    }
    .saldo{
        font-weight: 700;
    }

`