import { useState } from "react"
import { BsTrash } from 'react-icons/bs'
import { Menu } from "../../components/Menu"

export default function Carrinho() {

    const dados = {
        nome: localStorage.Tenis,
        valor: localStorage.Preco,
        imagem: localStorage.Imagem
    }
    const [quantidade, setQuantidade] = useState(1)
    const [valor, setValor] = useState(`${dados.valor}`)

    return (

        <section className="carrinho telas centralizar coluna">
            <Menu color='var(--azul)' />
            <div className="dados centralizar">
                <div className="centralizar">
                    <img src={localStorage.Imagem} alt="" />
                </div>
                <div className="centralizar">
                    <h1>{localStorage.Tenis}</h1>
                </div>
                <div className="centralizar">
                    <p>{localStorage.Descricao}</p>
                </div>
                <div className="centralizar">
                    <h2>R$ {valor}</h2>
                </div>
                <div className="botoes centralizar">
                    <button onClick={() => {
                        setQuantidade(quantidade - 1)
                        let teste1 = parseInt(valor)
                        let teste2 = parseInt(dados.valor)
                        setValor(teste1 - teste2)
                        if (valor == 0) {
                            setValor(0)
                        }
                        if (quantidade == 0) {
                            setQuantidade(0)
                        }
                    }}>-</button>
                    <input type="text" value={quantidade} id="" />
                    <button onClick={() => {
                        setQuantidade(quantidade + 1)
                        let teste1 = parseInt(valor)
                        let teste2 = parseInt(dados.valor)
                        setValor(teste1 += teste2)
                        console.log(valor)
                    }}>+</button>
                </div>
                <BsTrash className="lixeira"
                    onClick={() => {
                        localStorage.clear()
                    }}
                />
            </div>

        </section>
    )
}