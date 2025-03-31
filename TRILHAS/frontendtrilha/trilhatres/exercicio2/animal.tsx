import React from 'react';
import { useParams } from 'react-router-dom';

interface Params {
    name: string;
}

const Animal: React.FC = () => {
    const { name } = useParams<Params>();

    return (
        <div>
            <h1>Animal Page</h1>
            <p>O nome do animal é: {name}</p>
        </div>
    );
};

export default Animal;