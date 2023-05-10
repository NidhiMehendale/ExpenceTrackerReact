import React from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {

     const changeHandler = (event) => {
        console.log(event.target.value); 
    }
    
    return(
        <form className="new-expense"> 
        <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Title</label>
               <input type='text' onChange={changeHandler}/>
            </div>
            <div className="new-expense__control">
               <label>Amount</label>
               <input type='number' onChange={changeHandler}/>
            </div>
            <div className="new-expense__control">
               <label>Date</label>
               <input type='date' min="2019-01-01" max="2023-12-31" onChange={changeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
        </form>
    );
};
export default ExpenseForm;