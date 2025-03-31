import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Você pode adicionar estilos aqui

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/animal/cachorro">Cachorro</Link></li> {/* Exemplo de link para animal */}
                <li><Link to="/animal/gato">Gato</Link></li> {/* Exemplo de link para animal */}
            </ul>
        </nav>
    );
};

export default Navbar;