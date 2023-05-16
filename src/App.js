import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Purse',
    amount: 94.12,
    date: new Date(2023, 2, 12),
    LocationOfExpenditure : 'Dombivli',
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2023, 1,10),LocationOfExpenditure : 'Kalyan', },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 2, 28),
    LocationOfExpenditure : 'Thane',
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2023, 3, 12),
    LocationOfExpenditure : 'Mumbai',
  },
];

const App = () => {
   
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses( (prevExpenses) => {
        return [expense, ...prevExpenses];
    }); 
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />   
    </div>
  );
}

export default App;
