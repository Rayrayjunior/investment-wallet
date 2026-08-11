const API_KEY = import.meta.env.VITE_STOCK;

export const stockdata = async () => {

    const response = await fetch(API_KEY);

    if (!response.ok) {
        throw new Error("Failed");
    }

    const data = await response.json()

    return data;
}