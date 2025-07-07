import { useState } from "react";
import { useExpense } from "../context/ExpenseContext";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = () => {
  const { dispatch } = useExpense();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income"); // default type

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    const newTransaction = {
      id: uuidv4(),
      title,
      amount: parseFloat(amount),
      type, // store income or expense explicitly
    };

    dispatch({ type: "ADD_TRANSACTION", payload: newTransaction });

    setTitle("");
    setAmount("");
    setType("income");
  };

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTransaction;
