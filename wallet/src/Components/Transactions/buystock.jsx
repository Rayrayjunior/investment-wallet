import { useState, useMemo, useEffect} from "react"

const BuyStock = ( addtoWallet ) => {

    const [stock, setStock] = useState([]);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

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