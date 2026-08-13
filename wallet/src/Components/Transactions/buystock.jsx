import { useState, useMemo, useEffect} from "react"
import { fetchData } from "../API/stock"

const BuyStock = ( {addtoWallet} ) => {

    const [stocks, setStocks] = useState([]);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError]  = useState(null);

    useEffect(() => {

        const loadStocks = async () => {

            try {
                setLoading(true);

                const article = await fetchData();
                setStock(article);

                // Fetch data

            } catch (err) {
                setError("Not found");
            } finally {
                setLoading(false);
            }
        };

        loadStocks();
    }, []);

    const getName = (event) => {

        setName(event.target.value);
    }

    const getAmount = (event) => {

        setAmount(event.target.value);
    }

    const theDetails = () => {

        if(name.trim() === "") return;

        const walletInfo = {
            name : name,
            amount : amount,
            TransID : Date.now()
        };

        addtoWallet(walletInfo);
        setName("");
        setAmount("");
    };

    return(
        <div>
        <select name="" id="">
            {stocks.map((stock) => (
                <option key={stock.id} value={stock.id}>
                    {stock.name}
                </option>
            ) )}
        </select>
        </div>
    )
};

export default buyStock;