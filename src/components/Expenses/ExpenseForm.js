import React, { useState }from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredLocation, setEnteredLocation] = useState('');
    const [enableEdit, setEnableEdit] = useState(false);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        
    };

    const amountChangeHandler = (event) => {
       setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
    };

    const LocationChangeHandler = (event) => {
        setEnteredLocation(event.target.value);
      };
    
      const toggleEdit = () => {
        setEnableEdit(!enableEdit);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount : enteredAmount,
            date: new Date(enteredDate),
            LocationOfExpenditure : enteredLocation
        }

        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

      };
 
    return(
        <div className="new-expense">
        {!enableEdit && (
            <button onClick={toggleEdit}>Add New Expense</button>
        )}
        {enableEdit && (
            <form className="new-expense" onSubmit={submitHandler}> 
            <div className="new-expense__controls">
                <div className="new-expense__control">
                <label>Title</label>
                <input  
                 type='text' 
                 value={enteredTitle}
                 onChange={titleChangeHandler}
                />
                </div>
                <div className="new-expense__control">
                <label>Amount</label>
                <input 
                type='number' 
                value={enteredAmount}
                onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                <label>Date</label>
                <input 
                type='date' 
                min="2019-01-01" 
                max="2023-12-31"
                value={enteredDate} 
                onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__control">
                <label>Location</label>
                <input  
                 type='text' 
                 value={enteredLocation}
                 onChange={LocationChangeHandler}
                />
                </div>
            </div>
            <div className="new-expense__actions">
            <button type="button" onClick={toggleEdit}>Cancel</button>
              <button type="submit">Add Expense</button>
            </div>
        </form>
        )}

        </div>
       
    );
};
export default ExpenseForm;