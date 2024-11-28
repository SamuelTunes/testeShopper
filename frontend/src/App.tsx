import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080'; // Default local para desenvolvimento

  axios.get(`${API_URL}/api`)
    .then(response => setMessage(response.data.message))
    .catch(error => console.error(error));
  

  return (
    <div>
      <h1>Mensagem do Backend</h1>
      <p>{message || 'Carregando...'}</p>
    </div>
  );
};

export default App;
