import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    axios.get('http://localhost:5000/api')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Mensagem do Backend</h1>
      <p>{message || 'Carregando...'}</p>
    </div>
  );
};

export default App;
