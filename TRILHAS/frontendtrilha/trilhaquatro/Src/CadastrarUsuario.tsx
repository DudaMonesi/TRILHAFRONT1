import React, { useState } from 'react';

const CadastrarUsuario = () => {
  const [nome, setNome] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [mensagem, setMensagem] = useState(''); 
  const [loading, setLoading] = useState(false); 

  const handleCadastrar = async () => {
    if (!nome || !email) {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true); // Indica que a requisição está em andamento
    setMensagem(''); // Limpa a mensagem antes de enviar os dados

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nome,
          email: email,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
      }

      const data = await response.json();
      setMensagem(`Usuário cadastrado com sucesso! ID: ${data.id}`);
      setNome(''); 
      setEmail(''); 
      setMensagem(`Erro: ${error.message}`);
    } finally {
      setLoading(false); 

  return (
    <div>
      <h1>Cadastrar Novo Usuário</h1>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleCadastrar} disabled={loading}>
        {loading ? 'Cadastrando...' : 'Cadastrar'}
      </button>

      {mens


{mensagem && (
    <p style={{ color: loading ? 'blue' : 'red' }}>
      {mensagem}
    </p>
  )}
</div>
);
};

export default CadastrarUsuario;