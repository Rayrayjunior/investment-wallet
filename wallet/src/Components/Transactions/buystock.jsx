import { useState, useMemo, useEffect} from "react"

const buyStock = ( addtoWallet ) => {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const theDetails = () => {

        if(name.trim() === "") return;

        const walletInfo = {
            name : name,
            amount : amount,
            TansID : Date.now()
        };
    }

    return(
        <div>
            
        </div>
    )
};

export default buyStock;