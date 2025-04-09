import React, { useState } from 'react';

const BuscarUsuario = () => {
  const [id, setId] = useState(''); // Estado para armazenar o ID digitado
  const [usuario, setUsuario] = useState(null); 
  const [erro, setErro] = useState(''); 

  const handleBuscar = async () => {
    if (!id) {
      setErro('Por favor, insira um ID.');
      return;
    }
    
    setErro(''); 
    setUsuario(null); // Limpar dados de usuário anterior
    
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) {
        throw new Error('Usuário não encontrado');
      }
      const data = await response.json();
      setUsuario(data); // Armazenar dados do usuorio
    } catch (error) {
      setErro(error.message); 
  };

  return (
    <div>
      <h1>Buscar Usuário</h1>
      <input 
        type="number" 
        value={id} 
        onChange={(e) => setId(e.target.value)} 
        placeholder="Digite o ID do usuário" 
      />
      <button onClick={handleBuscar}>Buscar</button>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      
      {usuario && !erro && (
        <div>
          <h2>Informações do Usuário</h2>
          <p><strong>Nome:</strong> {usuario.name}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
        </div>
      )}
    </div>
  );
};

export default BuscarUsuario;
