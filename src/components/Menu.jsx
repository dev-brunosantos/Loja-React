import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import '../styles/Menu.css'

export const Menu = ({funcao, background, color}) => {
    return (
        <header className="cabecalho" style={{backgroundColor: background, color: color}}>
            <nav className="menu-principal centralizar">
                <div className="logo">
                    <h1>Tênis Mark</h1>
                </div>

                <ul className="menu-lista centralizar">
                    <li className="menu centralizar">
                        <Link style={{color: color}} to="/" id="home" onClick={funcao}>Home</Link>
                    </li>
                    <li className="menu centralizar">
                        <Link style={{color: color}} to="/produtos" id="produtos" onClick={funcao}>Produtos</Link>
                    </li>
                    <li className="menu centralizar">
                        <Link style={{color: color}} to="/carrinho" id='carrinho' onClick={funcao}>Carrinho</Link>
                    </li>
                    <li id='contatos' className="menu centralizar">
                        <Link style={{color: color}} to="/contatos" id='contatos' onClick={funcao}>Contatos</Link>
                    </li>
                </ul>

                <div className="pesquisa centralizar">
                    <BsSearch className='icone' />
                    <input type="text" placeholder="Buscar" />
                </div>
            </nav>
        </header>
    )
}