"use client";
import { useEffect, useState } from "react";
import Item from "@/components/Item";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartSummary from "../components/CartSummary";
import { useCart } from "@/hooks/useCart";
import styles from "./page.module.css";

const pizzas = [
    {
        name: "Margarita",
        description: "Salsa de tomate, mozzarella, albahaca, aceite de oliva.",
        price: 8,
        src: "/margarita.jpg",
    },
    {
        name: "Marinara",
        description:
            "Salsa de tomate con ajo, albahaca, orégano, aceite de oliva.",
        price: 8,
        src: "/marinara.jpg",
    },
    {
        name: "Calzone",
        description:
            "Mozzarella, carne picada, jamón York, aceite de oliva, oregano.",
        price: 8,
        src: "/calzone.jpg",
    },
    {
        name: "Jamón y Queso",
        description: "Salsa de tomate, mozzarella, jamón York, champiñones.",
        price: 10,
        src: "/jyq.jpg",
    },
    {
        name: "Cuatro Quesos",
        description:
            "Salsa de tomate, mozzarella Gorgonzola, parmesano, queso azul.",
        price: 10,
        src: "/4q.jpg",
    },
    {
        name: "Carbonara",
        description:
            "Salsa bacon, mozzarella, champiñones, huevo, aceite de oliva.",
        price: 10,
        src: "/carbonara.jpg",
    },
    {
        name: "Pepperoni",
        description:
            "Salsa de tomate, mozzarella, pepperoni, orégano, albahaca.",
        price: 10,
        src: "/pepperoni.jpg",
    },
    {
        name: "Diavola",
        description:
            "Salsa de tomate, mozzarella, chorizo picante, aceite de oliva.",
        price: 10,
        src: "/diavola.jpg",
    },
    {
        name: "Vegetariana",
        description:
            "Salsa de tomate, mozzarella, pimiento rojo y verde, champiñones, cebolla, aceitunas.",
        price: 10,
        src: "/vegetariana.jpg",
    },
    {
        name: "Boscaiola",
        description: "Mozzarella, salchichas, champiñones, aceite de oliva.",
        price: 10,
        src: "/boscaiola.jpg",
    },
    {
        name: "Barbacoa",
        description:
            "Salsa de tomate, muzzarella, carne picada, pimiento rojo y verde, cebolla, salsa barbacoa.",
        price: 11,
        src: "/barbacoa.jpg",
    },
    {
        name: "Caprichosa",
        description:
            "Salsa de tomate, mozzarella, jamón York, alcachofas, champiñones y aceitunas.",
        price: 11,
        src: "/caprichosa.jpg",
    },
    {
        name: "Hawaiana",
        description: "Salsa de tomate, mozzarella, jamón York, piña.",
        price: 11,
        src: "/hawaiana.jpg",
    },
    {
        name: "Pollo",
        description:
            "Salsa de tomate, mozzarella, pollo, pimientos rojos y verdes, champiñones.",
        price: 11,
        src: "/pollo.jpg",
    },
    {
        name: "Mariscos",
        description:
            "Salsa de tomate, mozzarella, calamar en su tinta, mejillones.",
        price: 12,
        src: "/pizza-pie.jpg",
    },
    {
        name: "Mexicana",
        description:
            "Salsa de tomate, mozzarella, cebolla, carne picada, jalapeño, aguacate.",
        price: 12,
        src: "/pizza-pie.jpg",
    },
    {
        name: "Ibérica",
        description:
            "Salsa de tomate, mozzarella, jamón crudo, tomate Cherry, aceite de oliva.",
        price: 12,
        src: "/pizza-pie.jpg",
    },
];

export default function Home() {
    const { cart } = useCart();
    const [isCartVisible, setIsCartVisible] = useState(false);

    useEffect(() => {
        setIsCartVisible(cart.length > 0);
    }, [cart]);

    const createWhatsAppLink = () => {
        const baseUrl = `https://wa.me/${
            process.env.NEXT_PUBLIC_RECEIVER_WHATSAPP_NUMBER || "+34601611862"
        }`;
        if (cart.length < 1) {
            return baseUrl;
        }
        const items =
            cart.map(
                (item) =>
                    `${item.amount}x ${item.name} - ${item.price.toFixed(2)}€`
            ) || [];
        const message = `Hola, me gustaría pedir:\n${items.join("\n")}`;
        console.log("cart", `${baseUrl}?text=${encodeURIComponent(message)}`);
        return `${baseUrl}?text=${encodeURIComponent(message)}`;
    };
    return (
        <div>
            <main className={styles.menu} style={{ marginBottom: "8rem" }}>
                {pizzas.map((pizza) => (
                    <Item
                        key={pizza.name}
                        name={pizza.name}
                        description={pizza.description}
                        price={pizza.price}
                        src={pizza.src}
                    />
                ))}
                {
                    <a
                        href={createWhatsAppLink()}
                        className={
                            isCartVisible
                                ? styles.waWithCartSummary
                                : styles.waWithoutCartSummary
                        }
                    >
                        <WhatsAppButton />
                    </a>
                }
            </main>
            {isCartVisible && <CartSummary />}
        </div>
    );
}
