"use client";
import React from "react";
import { useCart } from "@/hooks/useCart";
import CartItem from "@/components/CartItem";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CartPage = () => {
    const router = useRouter();
    const { cart, clearCart } = useCart();

    const calculateTotal = () => {
        return cart.reduce(
            (total, item) => total + item.price * item.amount,
            0
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        clearCart();
        alert("Pedido confirmado!!");
        router.push("/");
    };
    return (
        <div className={styles.cart}>
            <h1>Tu carrito</h1>
            {cart.length === 0 ? (
                <h3>Tu carrito esta vacío</h3>
            ) : (
                <>
                    {cart.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))}
                    <div>
                        <h2 className={styles.total}>
                            Total: {calculateTotal().toFixed(2)} €
                        </h2>
                    </div>
                    <Link
                        href="/"
                        onClick={handleSubmit}
                        className={styles.ConfirmButton}
                    >
                        Confirmar pedido
                    </Link>
                </>
            )}
        </div>
    );
};

export default CartPage;
