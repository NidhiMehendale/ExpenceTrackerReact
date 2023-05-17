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
  
  const filterdExpenses = props.items.filter( (expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {filterdExpenses.map( (expense) =>  (
      <ExpenseItem 
      key={expense.id} 
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date} 
      LocationOfExpenditure={expense.LocationOfExpenditure} 
      />
    ))}

    </Card>
  );
}

export default Expenses;