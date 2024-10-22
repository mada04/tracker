import { useEffect, useState } from "react";
import OverviewComponent from "./OverviewComponent";
import AddTransactions from "./AddTransaction";
import TransactionsContainer from "./TransactionsContainer";
const Tracker = () => {

    const [toggle, setToggle] = useState(false);
    const [transaction, setTransaction] = useState([])
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);

    const AddTransaction = (payload) => {
        const transactionArray = [...transaction];
        transactionArray.push(payload)
        setTransaction(transactionArray)
        console.log("transaction",transaction)
    }

    const calculateTransactions = () => {
        let exp = 0;
        let inc = 0;
        transaction.map((i) => {
            i.transType === 'expense'
                ? (exp = exp + i.amount)
                : (inc = inc + i.amount)
        });
        setExpense(exp);
        setIncome(inc);
    }
    const removeTransaction = (id) => {
        const updatedTransactions = transaction
            .filter((transaction) => transaction.id !== id);
        setTransaction(updatedTransactions);
    };

    useEffect(() => {
        calculateTransactions();
console.log("transac",transaction)
    }, [transaction])

    return (
        <div className="container">
            <h1 className="heading">Tracker</h1>
            <OverviewComponent toggle={toggle}
                setToggle={setToggle}
                expense={expense}
                income={income}
            />

            {toggle && (
                <AddTransactions
                    setToggle={setToggle}
                    AddTransaction={AddTransaction}
                />
            )}
            <div className="transactionDetails">
                <div className="expenseBox" >Expense <span>{expense}</span></div>

                <div className="incomeBox">Budget <span>{income}</span></div>
            </div>

            <TransactionsContainer transaction={transaction}
                removeTransaction={removeTransaction}
            />
        </div>
    )
}
export default Tracker;