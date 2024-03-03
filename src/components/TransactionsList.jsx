import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const TransactionsList = ({ transactions, setTransactions }) => {

  if (!transactions || transactions.length === 0) {
    return <p>No transactions available</p>;
  }

  

  return (
    <div>
      <h2>My Transactions</h2>
       <ul className='TransactionsList'>
      {transactions.map(({ id, item_name, amount, date, from, category }) => (
        <li key={id}>
          <p>{new Date(date).toDateString()} - 
          <Link to={`/${id}`} key={id}> {item_name} </Link> - {amount}</p>
        </li>
        
      ))}
      </ul>
    </div>
  );
}

export default TransactionsList;
