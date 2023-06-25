import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
  const [expenses,setExpenses] = useState([]);

  const addExpenseHandler = expense => {
    setExpenses((prevExpense)=>{  
      return [expense,...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
