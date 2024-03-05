import React from 'react';
import Navbar from '../components/Navbar';
import TransactionDetail from '../components/TransactionDetail';
import '../App.css';

const TransactionPage = ({ transactionDetail, setTransactionDetail }) => {
  return (
    <div>
      <TransactionDetail 
        transactionDetail={transactionDetail} 
        setTransactionDetail={setTransactionDetail} 
      />
    </div>
  );
}

export default TransactionPage;


