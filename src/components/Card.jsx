import { useState } from 'react'
import { BtnTenis } from './BtnTenis'
import { Menu } from './Menu'
// FOLHA DE ESTILO CSS
import '../styles/Card.css'
// DADOS COM INFORMAÇÕES DOS TENIS
import { tenis1, tenis2, tenis3, tenis4, tenis5 } from '../database/descricao.json'

export const Card = () => {
    const imgLocal=(num) => {
        const teste =  `../../public/tenis-${num}.png`
        return teste
    }
    // VARIÁVEIS COM INFORMAÇÕES DO TENIS
    const [tituloTenis, setTituloTenis] = useState(tenis1.nome)
    const [descricao, setDescricao] = useState(tenis1.descricao)
    const [preco, setPreco] = useState(tenis1.preco)
    //VARIÁVEIS RESPONSÁVEIS PELA ESTILIZAÇÃO DA PÁGINA AO VIZUALIZAR AS INFORMAÇÕES DOS TENIS
    const [imgTenis, setImgTenis] = useState("../../public/tenis-1.png")
    const [backColor, setBackColor] = useState('var(--azul)')
    const [menuColor, setMenuColor] = useState('var(--branco)')
    const [styles, setStyles] = useState([])
    // FUNÇÃO RESPONSÁVEL PELA MUDANDA DOS TENIS NO CONTAINER
    function mudarTenis(
        corDoFundo, nomeDoTenis, descricaoDoTenis, precoDoTenis, imagemDoTenis, corDoMenu
    ) {
        setStyles([
            setBackColor(corDoFundo), setTituloTenis(nomeDoTenis),
            setDescricao(descricaoDoTenis), setPreco(precoDoTenis),
            setImgTenis(imagemDoTenis), setMenuColor(corDoMenu)
        ])
    }
    function verTenis(e) {
        if (e.target.id == "tenis2") {
            return mudarTenis('var(--branco)', tenis2.nome, tenis2.descricao,
            tenis2.preco, imgLocal(2), 'var(--preto'
            )
        }
        if (e.target.id == "tenis3") {
            return mudarTenis('var(--cinza_escuro)', tenis3.nome, tenis3.descricao,
                tenis3.preco, imgLocal(3), 'var(--branco'
            )
        }
        if (e.target.id == "tenis4") {
            return mudarTenis('var(--branco)', tenis4.nome, tenis4.descricao,
                tenis4.preco, imgLocal(4), 'var(--cinza_transparente)'
            )
        }
        if (e.target.id == "tenis5") {
            return mudarTenis('var(--cinza_escuro)', tenis5.nome, tenis5.descricao,
                tenis5.preco, imgLocal(5), 'var(--branco)'
            )
        }
        return mudarTenis('var(--azul)', tenis1.nome, tenis1.descricao,
            tenis1.preco, imgLocal(1), 'var(--branco'
        )
    }
    return (
        <div style={{ backgroundColor: backColor }} className="cardProdutos centralizar telas" >
            <Menu color={menuColor} />
            <div className="card centralizar">
                {/* BOTOES PARA VIZUALIZAR AS INFORMAÇÕES DOS TENIS */}
                <div className="btnOpc centralizar coluna">
                    <BtnTenis id="tenis1" funcao={verTenis} imagem="../../public/tenis-1.png" />
                    <BtnTenis id="tenis2" funcao={verTenis} imagem="../../public/tenis-2.png" />
                    <BtnTenis id="tenis3" funcao={verTenis} imagem="../../public/tenis-3.png" />
                    <BtnTenis id="tenis4" funcao={verTenis} imagem="../../public/tenis-4.png" />
                    <BtnTenis id="tenis5" funcao={verTenis} imagem="../../public/tenis-5.png" />
                </div>
                {/* INFORMAÇÕES SOBRE O TENIS ( NOME, DESCRICAO / PRECO ) */}
                <div style={{ color: menuColor }} className="texto centralizar coluna card-item">
                    <h1> {tituloTenis} </h1>
                    <p> {descricao} </p>
                    <h2> R$ {preco} </h2>
                </div>
                {/* CONTAINER COM IMAGEM DO TÊNIS */}
                <div className="imagem card-item centralizar">
                    <img src={imgTenis} alt="" />
                </div>
                {/* BOTÃO PARA REALIZAR A ESCOLHA DO TENIS E PARTIR PARA A SEÇÃO DE PAGAMENTO */}
                <button style={{ backgroundColor: menuColor, color: backColor }}
                    className="comprar"
                    onClick={() => {
                        alert("Produto adicionado ao CARRINHO")
                        localStorage.setItem("Tenis", tituloTenis)
                        localStorage.setItem("Descricao", descricao)
                        localStorage.setItem("Preco", preco)
                        localStorage.setItem("Imagem", imgTenis.toString())
                        // localStorage.setItem("produto", {tituloTenis, descricao, preco, imgTenis})
                    }}
                >
                    Comprar
                </button>
            </div>
        </div>
    )
}