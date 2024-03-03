import React from 'react';
import Navbar from '../components/Navbar';
import TransactionsList from '../components/TransactionsList';
import '../App.css';

const HomePage = ({ transactions,  }) => {
  return (
    <div>
      <Navbar />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default HomePage;
