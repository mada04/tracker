const OverviewComponent = (props) => {
    const bal = props.income - props.expense;
    return (
        <div className="cont">
            <div className="expenseBox">

            <h2 className="balance" style={{
                // color: "rgb(49, 117, 49)",
                // textDecoration: "underline",
                fontSize: "20px"
            }}>Balance <span>{bal}</span></h2>
            </div>
            <div style={{marginTop:"5px",textAlign:"end"}}>

            <button onClick={() => props.setToggle(!props.toggle)} className="addBtn" style={{background:"linear-gradient(180deg, rgb(68, 230, 16), #0000002b)"}}>{props.toggle ? "Cancel" : "Add"}</button>
            </div>
        </div>
    )
}

export default OverviewComponent;