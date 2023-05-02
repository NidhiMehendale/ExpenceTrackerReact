import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenceItem.css';
import Button from '../UI/Button';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount}  LocationOfExpenditure={props.LocationOfExpenditure}   
                   title={props.title} />
      <button onClick={console.log('Deleted')} >Delete</button>
    </Card>
  );
}

export default ExpenseItem;