import React from 'react';
import { Link } from 'react-router-dom';

const Rooms: React.FC = () => {
    const rooms = [
        { id: 1, name: 'Quarto Luxo' },
        { id: 2, name: 'Quarto Standard' },
    ];

    return (
        <div>
            <h1>Lista de Quartos Disponíveis</h1>
            <ul>
                {rooms.map(room => (
                    <li key={room.id}>
                        <Link to={`/rooms/${room.id}`}>{room.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Rooms;