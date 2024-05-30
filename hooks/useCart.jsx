"use client";
import { useState, useContext, createContext } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (cartItem) => cartItem.name === item.name
            );
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.name === item.name
                        ? { ...cartItem, amount: cartItem.amount + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, amount: 1 }];
            }
        });
    };

    const removeFromCart = (itemName) => {
        setCart((prevCart) =>
            prevCart.reduce((acc, cartItem) => {
                if (cartItem.name === itemName) {
                    const updatedAmount = cartItem.amount - 1;
                    if (updatedAmount > 0) {
                        return [...acc, { ...cartItem, amount: updatedAmount }];
                    }
                    return acc;
                }
                return [...acc, cartItem];
            }, [])
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const getItemCount = (itemName) =>
        cart.find((cartItem) => cartItem.name === itemName)?.amount || 0;

    const getTotalItemCount = () =>
        cart.reduce((sum, item) => sum + item.amount, 0);

    const getTotalPrice = () =>
        cart
            .reduce((total, item) => total + item.price * item.amount, 0)
            .toFixed(2);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                getItemCount,
                getTotalItemCount,
                getTotalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
