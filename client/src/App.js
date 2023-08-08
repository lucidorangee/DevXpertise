import React, { useState, useEffect } from 'react';
import { Grommet, Box, Heading, Text } from 'grommet';
import axios from 'axios';
import AppRouter from './AppRouter';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return <AppRouter />;
}

export default App;
