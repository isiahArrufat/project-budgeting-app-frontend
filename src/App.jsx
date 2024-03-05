import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'; // Import useNavigate
import './App.css';

import TransactionPage from './pages/TransactionPage';
import TransactionsList from './components/TransactionsList';
import Navbar from './components/Navbar';
import NewTransactionsPage from "./pages/NewTransactionsPage";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionDetail, setTransactionDetail] = useState({});
  const [createdTransaction, setCreatedTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  useEffect(() => {
    fetch("http://localhost:3003/api/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  }, []);

  const navigate = useNavigate(); // Initialize navigate here

  const handleChange = (e) => {
    setCreatedTransaction({ ...createdTransaction, [e.target.id]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const id = e.target.id; // Assuming the id is passed as an attribute in the form
    if (id) {
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(createdTransaction),
      };

      fetch(`http://localhost:3003/api/bookmarks/${id}`, options)
        .then((res) => res.json())
        .then((data) => setTransactions(data.transactions))
        .then(() => navigate("/"));
    } else {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(createdTransaction),
      };
      fetch("http://localhost:3003/api/transactions", options)
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            alert("All Inputs Must Be Filled");
          } else {
            setTransactions(data.transactions);
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    }
  }

  function handleCancel() {
    navigate("/");
  }

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
        <Route
          path='/:id'
          element={
            <TransactionPage 
              transactionDetail={transactionDetail}
              setTransactionDetail={setTransactionDetail}
            />
          }
        />
        <Route 
          path='/edit/:id'
        />
        <Route 
          path='/new'
          element={
            <NewTransactionsPage 
              createdTransaction={createdTransaction}
              setCreatedTransaction={setCreatedTransaction}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleCancel={handleCancel}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;


