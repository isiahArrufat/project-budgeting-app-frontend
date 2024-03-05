import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";



const TransactionForm = ({ createdTransaction, handleCancel, handleSubmit, handleChange }) => {
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name of Transaction:
          <input
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            value={createdTransaction.item_name || ""}
          />
        </label>
        <label htmlFor="amount">
          Amount:
          <input
            onChange={handleChange}
            type="number"
            id="amount"
            name="amount"
            value={createdTransaction.amount}
          />
        </label>
        <label htmlFor="date">
          Created On:
          <input
            onChange={handleChange}
            type="text"
            id="date"
            name="date"
            value={createdTransaction.date}
          />
        </label>
        <label htmlFor="from">
          Origin:
          <input
            onChange={handleChange}
            type="text"
            id="from"
            name="from"
            value={createdTransaction.from}
          />
        </label>
        <label htmlFor="category">
          Type:
          <input
            onChange={handleChange}
            type="text"
            id="category"
            name="category"
            value={createdTransaction.category}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};


export default TransactionForm;