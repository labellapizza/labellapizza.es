"use client";
import React, { useState } from "react";
import { useCart } from "@/hooks/useCart";
import CartItem from "@/components/CartItem";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";

const CartPage = () => {
    const router = useRouter();
    const { cart, clearCart } = useCart();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState({ name: "", address: "" });

    const calculateTotal = () => {
        return cart.reduce(
            (total, item) => total + item.price * item.amount,
            0
        );
    };

    const validate = () => {
        const newErrors = { name: "", address: "" };

        if (!name) {
            newErrors.name = "El nombre es obligatorio";
        }

        if (!address) {
            newErrors.address = "La dirección es obligatoria";
        }

        setErrors(newErrors);
        return newErrors.name === "" && newErrors.address === "";
    };

    const sendOrderToWhatsApp = async (orderDetails) => {
        console.log("orderDetails", orderDetails);
        console.log("sendOrderToWhatsApp");
        try {
            const response = await axios.post("/api/send-order", {
                orderDetails,
            });
            if (response.data.success) {
                console.log("Order sent successfully");
                alert(
                    "Pedido enviado exitosamente! El restaurante confirmara tu pedido por WhatsApp pronto."
                );
            } else {
                console.error("Failed to send order");
                alert(
                    "Error al enviar el pedido. Por favor intenta de nuevo mas tarde."
                );
            }
        } catch (error) {
            console.error("Error sending order", error);
            alert(
                "Error al enviar el pedido. Por favor intenta de nuevo mas tarde."
            );
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) {
            alert("Por favor completa todos los campos requeridos.");
            return;
        }
        const orderDetails = {
            name: name,
            address: address,
            items: cart.map((item) => ({
                name: item.name,
                quantity: item.amount,
                price: item.price,
            })),
            total: calculateTotal().toFixed(2),
        };

        await sendOrderToWhatsApp(orderDetails);

        clearCart();
        router.push("/");
    };

    return (
        <div className={styles.cart}>
            <h1>Tu carrito</h1>
            {cart.length === 0 ? (
                <h3>Tu carrito está vacío</h3>
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
                    <div className={styles.inputContainer}>
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        {errors.name && (
                            <span className={styles.error}>{errors.name}</span>
                        )}
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="address">Dirección:</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        {errors.address && (
                            <span className={styles.error}>
                                {errors.address}
                            </span>
                        )}
                    </div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className={styles.ConfirmButton}
                    >
                        Confirmar pedido
                    </button>
                </>
            )}
        </div>
    );
};

export default CartPage;
