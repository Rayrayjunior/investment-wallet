import { useState, useMemo, useEffect} from "react"

const BuyStock = ( addtoWallet ) => {

    const [stock, setStock] = useState([]);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError]  = useState(null);

    useEffect(() => {

        const loadHost = async () => {

            try {
                setLoading(true);

                const article = await fetchData();
                setHost(article["host"]);

            } catch (err) {
                setError("Not found");
            } finally {
                setLoading(false);
            }
        };

        loadHost();
    }, []);

    const theDetails = () => {

        if(name.trim() === "") return;

        const walletInfo = {
            name : name,
            amount : amount,
            TansID : Date.now()
        };

        addtoWallet(walletInfo);
        setName("");
        setAmount("");
    };

    return(
        <div>

        </div>
    )
};

export default buyStock;