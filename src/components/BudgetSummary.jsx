import { useExpense } from "../context/ExpenseContext";

const BudgetSummary = () => {
  const { state } = useExpense();
  const { transactions } = state;

  const income = transactions
  .filter((t) => t.type === "income")
  .reduce((acc, t) => acc + t.amount, 0);
  
  const expense = transactions
  .filter((t) => t.type === "expense")
  .reduce((acc, t) => acc + t.amount, 0);
  
  const balance = income - expense;

  return (
    <div className="budget-summary">
      <h2>Budget Summary</h2>
      <div className="summary-box">
        <p><strong>💰 Income:</strong> ₹{income.toFixed(2)}</p>
        <p><strong>💸 Expenses:</strong> ₹{Math.abs(expense).toFixed(2)}</p>
        <p><strong>🧾 Balance:</strong> ₹{balance.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BudgetSummary;
