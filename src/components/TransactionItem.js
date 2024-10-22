const TransactionItem = (props) => {
    return (
        <div isExpense={props.transaction?.transType === "expense"} className="item" style={{ borderRight:props.transaction?.transType === "expense"? "5px solid red": "5px solid green"}}>
            <span>{props.transaction.details}</span>
            <span>{props.transaction.amount}</span>
            <button className="removeButton" onClick={() => props.removeTransaction(props.transaction.id)}>Remove</button>
        </div>
    )
}
export default TransactionItem;