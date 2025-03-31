import React, { useState } from 'react';

// Definindo as props do componente
interface ContadorProps {
    valorInicial: number;
}

const Contador: React.FC<ContadorProps> = ({ valorInicial }) => {
    // Usando useState para gerenciar o estado do contador
    const [contador, setContador] = useState<number>(valorInicial);

    // Função para incrementar o contador
    const incrementar = () => {
        setContador(contador + 1);
    };

    // Função para decrementar o contador
    const decrementar = () => {
        setContador(contador - 1);
    };

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
};

export default Contador;