import { useState } from "react"

const AddTransactions = (props) => {
const [amount,setAmount]=useState("");
const [details,setDetails]=useState("");
const [transType,setTransType]=useState("expense");


const AddTransactionData=()=>{
    props.AddTransaction({
        amount:Number(amount),
        details,
        transType,
        id:Date.now(),

    });
    console.log("oo",props)
    props.setToggle();
}
    return (
        <div className="containerAdd">

            <input 
            className="inputAdd"
            type={"number"}
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)} />
            <input type={"text"}  className="inputAdd"
                placeholder="Enter Details"
                value={details}
                onChange={(e) => setDetails(e.target.value)} />
            <div className="radioContainter">
                <div className="radioButton">
                    <input 
                        type="radio"
                        id="expense"
                        name="type"
                        value={"expense"}
                        checked={transType === "expense"}
                        onChange={(e) => setTransType(e.target.value)}
                    />  <label>Expense</label>
                </div>
                <div className="radioButton">
                    <input
                        type="radio"
                        id="income"
                        name="type"
                        value={"income"}
                        checked={transType === "income"}
                        onChange={(e) => setTransType(e.target.value)}
                    />  <label>Income</label>
                </div>
            </div>
            <button className="buttonSub" onClick={AddTransactionData}>Add Transaction</button>
        </div>
    )
}
export default AddTransactions;