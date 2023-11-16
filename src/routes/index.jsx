import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'
import Carrinho from '../pages/Carrinho'
import Contatos from '../pages/Contatos'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/produtos' Component={Produtos} />
                <Route path='/carrinho' Component={Carrinho} />
                <Route path='/contatos' Component={Contatos} />
            </Routes>
        </BrowserRouter>
    )
}