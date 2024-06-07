"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import styles from "./index.module.css";
import Link from "next/link";

const CartSummary = () => {
    const { getTotalItemCount, getTotalPrice } = useCart();
    const router = useRouter();

    const handleViewCart = () => {
        router.push("/cart");
    };

    return (
        <>
            <div className={styles.cartSummary}>
                <div className={styles.summaryDetails}>
                    <p>
                        Cantidad de pizzas:{" "}
                        <span className={styles.number}>
                            {getTotalItemCount()}
                        </span>
                    </p>
                    <p>
                        Total:
                        <span className={styles.number}>
                            {" "}
                            {getTotalPrice()} €
                        </span>
                    </p>
                </div>
                <Link
                    href={"/cart"}
                    onClick={handleViewCart}
                    className={styles.viewCartButton}
                >
                    Ver carrito
                </Link>
            </div>
        </>
    );
};

export default CartSummary;
