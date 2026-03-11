import { useState } from 'react';

function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function enviarFormulario(e) {
    e.preventDefault();
    alert('Obrigado pelo contato, Saudações Tricolores!');
  }

  return (
    <div className="container">
      <h1 style={{ color: '#005a3b', textAlign: 'center' }}>Fale com o Fluminense</h1>
      <form onSubmit={enviarFormulario} className="form">
        <input
          type="text"
          placeholder="Seu Nome"
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Seu Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Sua Mensagem"
          onChange={(e) => setMensagem(e.target.value)}
          required
          rows="5"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
