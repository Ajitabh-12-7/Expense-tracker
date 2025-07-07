import { useExpense } from "../context/ExpenseContext";

const TransactionList = () => {
  const { state, dispatch } = useExpense();
  const { transactions } = state;

  const incomeTransactions = transactions.filter(t => t.type === "income");
  const expenseTransactions = transactions.filter(t => t.type === "expense");

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  return (
    <div className="transaction-list">
      <h2>💰 Income</h2>
      {incomeTransactions.length === 0 ? (
        <p>No income transactions</p>
      ) : (
        <ul>
          {incomeTransactions.map((tx) => (
            <li key={tx.id} className="income">
              <span>{tx.title}</span>
              <span>+ ₹{tx.amount}</span>
              <button onClick={() => handleDelete(tx.id)}>❌</button>
            </li>
          ))}
        </ul>
      )}

      <h2>💸 Expenses</h2>
      {expenseTransactions.length === 0 ? (
        <p>No expense transactions</p>
      ) : (
        <ul>
          {expenseTransactions.map((tx) => (
            <li key={tx.id} className="expense">
              <span>{tx.title}</span>
              <span>- ₹{tx.amount}</span>
              <button onClick={() => handleDelete(tx.id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
