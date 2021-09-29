import { useState } from "react";
import { Box, Typography,TextField,makeStyles,Button } from "@material-ui/core";



const useStyle = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
       
        '& > *': {
            marginTop:10
        }
    },
    button :{
        background:'#445A6F',
        color:'#FFF'
    }
})
const NewTransactions = ({addTransaction}) => {
    const classes = useStyle();
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const newTransaction = () => {
        const transaction = {
            id: Math.floor(Math.random() *10000),
            text :text,
            amount: +amount
            
        }
        addTransaction(transaction);
    }
    return (
    <Box className={classes.container}>
            <Typography variant="h5">New Transactions</Typography>
            <TextField label="Enter Expense" onChange={(e) => setText(e.target.value)} />
            <TextField label="Total Amount" onChange={(e) => setAmount(e.target.value)}/>
            <Button className={classes.button} onClick={newTransaction} variant="container">Add New Transaction</Button>
    </Box>
)
    
}
export default NewTransactions;