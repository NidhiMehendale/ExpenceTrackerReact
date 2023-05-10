import React , { useState } from 'react';
import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenceItem.css';

const ExpenseItem = (props) => {

  const [amount, setTitle] = useState(props.amount);

  //let title = props.title;
   
  const clickHandler = () =>  {
    setTitle('100');
    console.log(amount);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={amount}  LocationOfExpenditure={props.LocationOfExpenditure}   
                   title={props.title} />
      <button onClick={clickHandler}>Change Amount</button>
    </Card>
  );
}

export default ExpenseItem;