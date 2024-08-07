"use client";
import React, { useState } from "react";
import { useCart } from "@/hooks/useCart";
import CartItem from "@/components/CartItem";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import axios from "axios";

const CartPage = () => {
    const router = useRouter();
    const { cart, clearCart } = useCart();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState({ name: "", address: "" });

    function createWhatsAppLink(cart) {
        const baseUrl = `https://wa.me/${
            process.env.NEXT_PUBLIC_RECEIVER_WHATSAPP_NUMBER || "+34601611862"
        }`;
        if (!cart) return baseUrl;
        const items =
            cart.map(
                (item) =>
                    `${item.amount}x ${item.name} - ${item.price.toFixed(2)}€`
            ) || [];
        const message = `Hola, me gustaría pedir:\n${items.join(
            "\n"
        )}\nTotal: ${calculateTotal().toFixed(2)}€\n
        Nombre: ${name}\n
        Direccion: ${address}`;
        return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }

    const calculateTotal = () => {
        return cart.reduce(
            (total, item) => total + item.price * item.amount,
            0
        );
    };

    const validate = () => {
        const newErrors = { name: "", address: "", phone: "" };

        if (!name) {
            newErrors.name = "El nombre es obligatorio";
        }

        if (!address) {
            newErrors.address = "La dirección es obligatoria";
        }

        // if (!phone) {
        //     newErrors.phone =
        //         "El telefono es obligatorio, por si el repartidor tiene problemas para encontrar tu dirección, o para informar cualquier otro problema con tu pedido.";
        // }

        setErrors(newErrors);
        return (
            newErrors.name === "" &&
            newErrors.address === "" &&
            newErrors.phone === ""
        );
    };

    const sendOrderToWhatsApp = async (orderDetails) => {
        console.log("orderDetails", orderDetails);
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
            // alert("Por favor completa todos los campos requeridos.");
            return;
        }

        // const orderDetails = {
        //     name,
        //     address,
        //     phone,
        //     items: cart.map((item) => ({
        //         name: item.name,
        //         quantity: item.amount,
        //         price: item.price,
        //     })),
        //     total: calculateTotal().toFixed(2),
        // };

        // Optionally, send the order details to the server
        // await sendOrderToWhatsApp(orderDetails);

        // Generate the WhatsApp link and redirect
        const whatsappLink = createWhatsAppLink(cart);
        window.location.href = whatsappLink;

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
                    {/* <div className={styles.inputContainer}>
                        <label htmlFor="phone">Telefono:</label>
                        <input
                            type="number"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        {errors.phone && (
                            <span className={styles.error}>{errors.phone}</span>
                        )}
                    </div> */}
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className={styles.ConfirmButton}
                    >
                        Confirmar pedido por WhatsApp
                    </button>
                </>
            )}
        </div>
    );
};

export default CartPage;
