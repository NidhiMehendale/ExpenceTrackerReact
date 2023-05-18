import React , { useState } from 'react';
import ExpenseItem from './Expenceitem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  
  const filteredExpenses = props.items.filter( (expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
 
  let expensesContent = <p>No expenses here</p>
  let oneExpenseContent;

    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense)=>{
            return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} 
                    date={expense.date} LocationOfExpenditure={expense.LocationOfExpenditure}/>
        });
        if(filteredExpenses.length === 1) {
            oneExpenseContent = <p>Only single Expense here. Please add more...</p>
        }
    }
    
  return (
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
  
    { expensesContent }
    { oneExpenseContent }
    
    </Card>
  );
}

export default Expenses;