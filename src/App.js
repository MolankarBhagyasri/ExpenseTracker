
import './App.css';
import { useState } from 'react';
import { Typography, makeStyles, Box } from '@material-ui/core';
import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import NewTransactions from './Components/NewTransactions';
import Transactions from './Components/Transactions';

const useStyle = makeStyles({
  header: {
    color: "blue",
    fontSize: 35,
    margin: '10px 0',
    textTransform: 'uppercase',

  
  },
  component: {
    background: '#fff',
    width: 800,
    padding: 10,
    borderRadius: 20,
    display: 'flex',
    padding: 15,
    height:"70vh",
    "& > *": {
          width:'50%'
        }
  }
})

function App() {
  const classes = useStyle();

  const [transactions, setTransaction] = useState(
    [
      { id: 1, text: 'Momos', amount: -20 },
      { id: 2, text: 'Salary', amount: 3000 },
      { id: 3, text: 'Books', amount: -100 },
      { id: 4, text: 'Bonus', amount: 1500 },
    ]
  )

  const deleteTransaction = (id) => {
    //console.log(transaction);
    setTransaction(transactions.filter(transaction => transaction.id !== id));
  }


  const addTransaction = (transaction) => {
    setTransaction(transactions  => [transaction,  ...transactions]);
      
    }
  
  return ( 
    <div className="App">
      <Typography className={classes.header}>Expense Tracker</Typography>
      <Box className={classes.component}>
        <Box>
          <Balance transactions={transactions} />
        <ExpenseCard transaction={transactions} />
          <NewTransactions addTransaction={addTransaction}/>
      </Box>
      <Box>
          <Transactions transactions={transactions}
            deleteTransaction={deleteTransaction}/>

          </Box>
      </Box>
    </div>
  );
}

export default App;
