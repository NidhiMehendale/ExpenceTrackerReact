const ExpenseDetails = (props) => {
    
    return(
    <div className='expense-item__description'>
    <h2>{props.title}</h2>
    <div className='expense-item__price'>Rs{props.amount}</div>
    <div>{props.LocationOfExpenditure}</div>
  </div>
    );
}

export default ExpenseDetails;