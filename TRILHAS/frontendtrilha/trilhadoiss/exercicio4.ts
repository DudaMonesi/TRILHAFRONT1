import React, { useState } from 'react';

// Definindo as props do componente
interface ToggleVisibilidadeProps {
    texto: string;
}

const ToggleVisibilidade: React.FC<ToggleVisibilidadeProps> = ({ texto }) => {
    // Usando useState para gerenciar a visibilidade
    const [visivel, setVisivel] = useState<boolean>(false);

    // Função para alternar a visibilidade
    const alternarVisibilidade = () => {
        setVisivel(!visivel);
    };

    return (
        <div>
            <button onClick={alternarVisibilidade}>
                {visivel ? 'Ocultar' : 'Mostrar'}
            </button>
            {visivel && <p>{texto}</p>} {/* Exibe o texto se visível */}
        </div>
    );
};

export default ToggleVisibilidade;
