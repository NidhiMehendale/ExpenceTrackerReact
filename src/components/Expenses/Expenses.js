import React , { useState } from 'react';
import ExpenseItem from './Expenceitem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  
  return (
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {props.items.map( (expense) => (
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