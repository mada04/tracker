const OverviewComponent=(props)=>{
    const bal=props.income-props.expense;
return(
    <div className="cont">
        <h2 className="balance">Balance <span>{bal}</span></h2>
        <button onClick={()=>props.setToggle(!props.toggle)} className="addBtn">{props.toggle?"Cancel":"Add"}</button>
    </div>
)
}

export default OverviewComponent;