import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';


import TransactionsList from './components/TransactionsList';
import Navbar from './components/Navbar';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/api/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route 
          path='/'
          element={
            <TransactionsList 
              transactions={transactions}
              setTransactions={setTransactions}
            />
          }
        />
        {/* <Route />
        <Route />
        <Route /> */}
      </Routes>
    </div>
  )}

export default App
