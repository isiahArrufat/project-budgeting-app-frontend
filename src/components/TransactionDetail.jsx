import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
 import '../App.css';

const TransactionDetail = ({ transactionDetail, setTransactionDetail }) => {
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3003/api/transactions/${id}`)
      .then((res) => res.json())
      .then((data) => setTransactionDetail(data.transaction));
  }, [id, setTransactionDetail]);

  if (!transactionDetail) {
    return <p>No transaction details available</p>;
  }

  return (
    <div>
      <h2>Name of Transaction: {transactionDetail.item_name}</h2>
      <p>Amount of Transaction: {transactionDetail.amount}</p>
      <p>Created On: {transactionDetail.date}</p>
      <p>Orgin: {transactionDetail.from}</p>
      <p>Type: {transactionDetail.category}</p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default TransactionDetail;



