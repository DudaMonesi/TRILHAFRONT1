import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RoomDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const handleBooking = () => {
        // Simular a reserva
        navigate('/booking-success'); // Redireciona para a página de sucesso
    };

    return (
        <div>
            <h1>Detalhes do Quarto {id}</h1>
            <p>Informações sobre o quarto...</p>
            <button onClick={handleBooking}>Reservar</button>
        </div>
    );
};

export default RoomDetails;