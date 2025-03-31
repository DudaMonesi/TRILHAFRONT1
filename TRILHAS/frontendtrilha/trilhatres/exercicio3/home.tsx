import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/about'); 
    };

    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Home page!</p>
            <button onClick={handleNavigate}>Ir para About</button> {/* Botão para redirecionar */}
        </div>
    );
};

export default Home;