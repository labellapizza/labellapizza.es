"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import styles from "./index.module.css";

const CartSummary = () => {
    const { getTotalItemCount, getTotalPrice } = useCart();
    const router = useRouter();

    const handleViewCart = () => {
        router.push("/cart");
    };

    return (
        <div className={styles.cartSummary}>
            <div className={styles.summaryDetails}>
                <p>Cantidad de pizzas: {getTotalItemCount()}</p>
                <p>Precio Total: ${getTotalPrice()}</p>
            </div>
            <button onClick={handleViewCart} className={styles.viewCartButton}>
                Ver carrito
            </button>
        </div>
    );
};

export default CartSummary;
