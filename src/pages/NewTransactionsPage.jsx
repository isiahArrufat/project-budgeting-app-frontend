import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import TransactionForm from '../components/TransactionForm';

const NewTransactionsPage = ({ createdTransaction, setCreatedTransaction, handleChange, handleSubmit, handleCancel }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3003/api/transactions/${id}`)
        .then((res) => res.json())
        .then((data) => setCreatedTransaction(data.createdTransaction));
    } else {
      setCreatedTransaction({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: "",
      });
    }
  }, [id]);

  return (
    <div>
      <h2>Create New Transaction</h2>
      <TransactionForm
        createdTransaction={createdTransaction}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </div>
  );
}

export default NewTransactionsPage;


    



