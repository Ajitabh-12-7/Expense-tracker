import { createContext, useReducer, useContext, useEffect } from "react";

// Create Context
const ExpenseContext = createContext();

// Initial State
const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
};

// Reducer Function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (t) => t.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// Provider Component
export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

// Custom hook to use context easily
export const useExpense = () => useContext(ExpenseContext);
