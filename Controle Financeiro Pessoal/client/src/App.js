import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Indicar a nossa aplicação a url base sobre a qual vai trabalhar 
const api = axios.create({ baseURL: 'api' })

export default function App() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const fetchTransactions = async() =>{
      const { data } = await api.get('/transaction?period=2019-07');
      setTransactions(data.transactions);
    };
    fetchTransactions();
  }, [])

  return <div className='container'>
    <h1 className='center'>Desafio Final do Bootcamp Full Stack</h1>
    {
      transactions.map( transaction => {
      return <p key={transaction}>{transaction}</p>
      })
    }
  </div> 
}
