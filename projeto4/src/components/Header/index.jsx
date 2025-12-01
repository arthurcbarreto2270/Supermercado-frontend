import './style.css'
import { Link } from "react-router-dom"
export default function Header() {
    return(
        <header className="header">
            <div className="container">Supermercado
            <Link to="/">
                <img src="src/assets/5766127-supermercado-loja-logo-vetor.jpg" alt="" />
            </Link>
            </div>
            <nav>
                <Link to="/">Pagina inicial</Link>
                <Link to="/cadastro">Faça Cadastro</Link>
                <Link to="/sobreNos">Sobre nós</Link>
                <Link to="/produtos">Nossos produtos</Link>
                <Link to="/duvidas">Duvidas Frequentes</Link>
            </nav>
        </header>
    )
}
