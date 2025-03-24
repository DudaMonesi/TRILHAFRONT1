import React, { useState } from 'react';

// Definindo as props do componente
interface SaudacaoProps {
    nomeInicial: string;
}

const Saudacao: React.FC<SaudacaoProps> = ({ nomeInicial }) => {
    // Usando useState para gerenciar o estado do nome
    const [nome, setNome] = useState<string>(nomeInicial);

    // Função para atualizar o nome com o valor do input
    const atualizarNome = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value);
    };

    return (
        <div>
            <h1>Olá, {nome}!</h1>
            <input 
                type="text" 
                value={nome} 
                onChange={atualizarNome} 
                placeholder="Digite um novo nome" 
            />
        </div>
    );
};

export default Saudacao;