import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenceItem.css';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount}  LocationOfExpenditure={props.LocationOfExpenditure}   
                   title={props.title} />
    </Card>
  );
}

export default ExpenseItem;