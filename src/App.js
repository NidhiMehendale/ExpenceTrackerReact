import ExpenceItem from "./components/Expenceitem";

function App() {
  const expenses = [
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
  return (
    <div>
    <h2>Let's get started!</h2>
    <div>
      {expenses.map(expense => (
        <ExpenceItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          LocationOfExpenditure={expense.LocationOfExpenditure}
        />
      ))}
    </div>
   
  </div>
  );
}

export default App;
