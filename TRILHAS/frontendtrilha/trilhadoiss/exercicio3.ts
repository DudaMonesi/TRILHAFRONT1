import React, { useState } from 'react';

// Definindo as props do componente
interface ListaTarefasProps {
    tarefasIniciais: string[];
}

const ListaTarefas: React.FC<ListaTarefasProps> = ({ tarefasIniciais }) => {
    // Usando useState para gerenciar o estado das tarefas
    const [tarefas, setTarefas] = useState<string[]>(tarefasIniciais);
    const [novaTarefa, setNovaTarefa] = useState<string>('');

    // Função para adicionar uma nova tarefa
    const adicionarTarefa = () => {
        if (novaTarefa.trim() !== '') {
            setTarefas([...tarefas, novaTarefa]);
            setNovaTarefa(''); // Limpa o campo de input após adicionar
        }
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <input 
                type="text" 
                value={novaTarefa} 
                onChange={(e) => setNovaTarefa(e.target.value)} 
                placeholder="Digite uma nova tarefa" 
            />
            <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListaTarefas;