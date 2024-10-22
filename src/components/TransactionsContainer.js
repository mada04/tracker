import { useEffect, useState } from "react";
import TransactionItem from "./TransactionItem";

const TransactionsContainer = (props) => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredTransactions, setFilteredTransactions] = useState(props.transaction);
    const filteredData = (searchInput) => {
        if (!searchInput || !searchInput.trim().length) {
            setFilteredTransactions(props.transaction);
            return;
        }
        let filtered = [...filteredTransactions];
        filtered = filtered.filter((i) => i.details.toLowerCase().includes(searchInput.toLowerCase().trim()))

        setFilteredTransactions(filtered);
    }
    useEffect(() => {
        filteredData(searchInput);
    }, [props.transaction, searchInput])


    return (
        <div className="containerTransaction">
            <h1>Transactions</h1>
            <input type="text"

                class="searchInput"
                placeholder="Search here"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)} />
            <div>
                {filteredTransactions?.length ?
                    (
                        filteredTransactions.map((t) => (
                            <TransactionItem
                                transaction={t}
                                key={t.id}
                                removeTransaction={props.removeTransaction}
                            />
                        )))
                    : (<p>No transaction</p>)}
            </div>


        </div>
    )
}

export default TransactionsContainer; 