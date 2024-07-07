"use client";
import { useEffect, useState } from "react";
import Item from "@/components/Item";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartSummary from "../components/CartSummary";
import { useCart } from "@/hooks/useCart";
import styles from "./page.module.css";

const items = [
    {
        name: "Margarita",
        description: "Salsa de tomate, mozzarella, albahaca, aceite de oliva.",
        price: 8,
        src: "/margarita.jpg",
        type: "Pizzas",
    },
    {
        name: "Marinara",
        description:
            "Salsa de tomate con ajo, albahaca, orégano, aceite de oliva.",
        price: 8,
        src: "/marinara.jpg",
        type: "Pizzas",
    },
    {
        name: "Calzone",
        description:
            "Mozzarella, carne picada, jamón York, aceite de oliva, oregano.",
        price: 8,
        src: "/calzone.jpg",
        type: "Pizzas",
    },
    {
        name: "Jamón y Queso",
        description: "Salsa de tomate, mozzarella, jamón York, champiñones.",
        price: 10,
        src: "/jyq.jpg",
        type: "Pizzas",
    },
    {
        name: "Cuatro Quesos",
        description:
            "Salsa de tomate, mozzarella Gorgonzola, parmesano, queso azul.",
        price: 10,
        src: "/4q.jpg",
        type: "Pizzas",
    },
    {
        name: "Carbonara",
        description:
            "Salsa bacon, mozzarella, champiñones, huevo, aceite de oliva.",
        price: 10,
        src: "/carbonara.jpg",
        type: "Pizzas",
    },
    {
        name: "Pepperoni",
        description:
            "Salsa de tomate, mozzarella, pepperoni, orégano, albahaca.",
        price: 10,
        src: "/pepperoni.jpg",
        type: "Pizzas",
    },
    {
        name: "Diavola",
        description:
            "Salsa de tomate, mozzarella, chorizo picante, aceite de oliva.",
        price: 10,
        src: "/diavola.jpg",
        type: "Pizzas",
    },
    {
        name: "Vegetariana",
        description:
            "Salsa de tomate, mozzarella, pimiento rojo y verde, champiñones, cebolla, aceitunas.",
        price: 10,
        src: "/vegetariana.jpg",
        type: "Pizzas",
    },
    {
        name: "Boscaiola",
        description: "Mozzarella, salchichas, champiñones, aceite de oliva.",
        price: 10,
        src: "/boscaiola.jpg",
        type: "Pizzas",
    },
    {
        name: "Barbacoa",
        description:
            "Salsa de tomate, muzzarella, carne picada, pimiento rojo y verde, cebolla, salsa barbacoa.",
        price: 11,
        src: "/barbacoa.jpg",
        type: "Pizzas",
    },
    {
        name: "Caprichosa",
        description:
            "Salsa de tomate, mozzarella, jamón York, alcachofas, champiñones y aceitunas.",
        price: 11,
        src: "/caprichosa.jpg",
        type: "Pizzas",
    },
    {
        name: "Hawaiana",
        description: "Salsa de tomate, mozzarella, jamón York, piña.",
        price: 11,
        src: "/hawaiana.jpg",
        type: "Pizzas",
    },
    {
        name: "Pollo",
        description:
            "Salsa de tomate, mozzarella, pollo, pimientos rojos y verdes, champiñones.",
        price: 11,
        src: "/pollo.jpg",
        type: "Pizzas",
    },
    {
        name: "Mariscos",
        description:
            "Salsa de tomate, mozzarella, calamar en su tinta, mejillones.",
        price: 12,
        src: "/mariscos.jpg",
        type: "Pizzas",
    },
    {
        name: "Mexicana",
        description:
            "Salsa de tomate, mozzarella, cebolla, carne picada, jalapeño, aguacate.",
        price: 12,
        src: "/mexicana.jpg",
        type: "Pizzas",
    },
    {
        name: "Ibérica",
        description:
            "Salsa de tomate, mozzarella, jamón crudo, tomate Cherry, aceite de oliva.",
        price: 12,
        src: "/iberica.jpg",
        type: "Pizzas",
    },
    {
        name: "Cerveza Amstel (33cl)",
        description: "Bebidas",
        price: 1.5,
        src: "/drinks/amstel-33cl.jpg",
        type: "Drinks",
    },
    {
        name: "Coca Cola (330ml)",
        description: "Bebidas",
        price: 1.5,
        src: "/drinks/coca-cola-33-cl.jpg",
        type: "Drinks",
    },
    {
        name: "Fanta (33cl)",
        description: "Bebidas",
        price: 1.5,
        src: "/drinks/fanta.jpg",
        type: "Drinks",
    },
    {
        name: "Aquarius Limon (330ml)",
        description: "Bebidas",
        price: 1.5,
        src: "/drinks/aquarius-limon-330ml.jpg",
        type: "Drinks",
    },
    {
        name: "Sprite Lima-limon (330ml)",
        description: "Bebidas",
        price: 1.5,
        src: "/drinks/sprite-330.jpg",
        type: "Drinks",
    },
    {
        name: "Coca-cola zero-azucar (330ml)",
        description: "Bebidas",
        price: 1.5,
        src: "/drinks/coca-zero-330.jpg",
        type: "Drinks",
    },
    {
        name: "Aquarius Naranja (330ml)",
        description: "Bebidas",
        price: 1.5,
        src: "/drinks/aq-nar-330.jpg",
        type: "Drinks",
    },
    {
        name: "Te negro Nestea con Limon (330ml)",
        description: "Bebidas",
        price: 1.5,
        src: "/drinks/te-negro-330.jpg",
        type: "Drinks",
    },
    {
        name: "Agua mineral La Serreta (1,5L)",
        description: "Bebidas",
        price: 1.5,
        src: "/drinks/aguaLS15L.jpg",
        type: "Drinks",
    },
    {
        name: "Cerveza Amstel (1L)",
        description: "Bebidas",
        price: 3,
        src: "/drinks/cerveza-amstel1L.jpg",
        type: "Drinks",
    },
    {
        name: "Coca-cola original (2L)",
        description: "Bebidas",
        price: 3,
        src: "/drinks/coca-cola-original-2L.jpg",
        type: "Drinks",
    },
    {
        name: "Coca-cola Zero (2L)",
        description: "Bebidas",
        price: 3,
        src: "/drinks/coca-zero2L.png",
        type: "Drinks",
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
                <h1 id="Nuestas-pizzas">Nuestras pizzas</h1>
                {items.map((pizza) => (
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
