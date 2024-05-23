import { useState } from "react";

export default function useCart() {
    const [cart, setCart] = useState({});

    const addToCart = (item) => {
        setCart((prevCart) => ({
            ...prevCart,
            [item]: (prevCart[item] || 0) + 1,
        }));
    };

    const removeFromCart = (item) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            newCart[item] = Math.max(0, (newCart[item] || 0) - 1);
            if (newCart[item] === 0) {
                delete newCart[item];
            }
            return newCart;
        });
    };

    const getItemCount = (item) => cart[item] || 0;

    return { cart, addToCart, removeFromCart, getItemCount };
}
