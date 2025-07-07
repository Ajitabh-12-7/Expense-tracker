import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import BudgetSummary from "./components/BudgetSummary";

function App() {
  return (
    <div className="App">
      <h1>💸 Expense Tracker</h1>
      <BudgetSummary />
      <AddTransaction />
      <TransactionList />
    </div>
  );
}

export default App;
