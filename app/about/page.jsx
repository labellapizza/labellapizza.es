"use client";
import styles from "./page.module.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function About() {
    function createWhatsAppLink() {
        const message = "Hola, quiero hacer un pedido.";
        return `https://wa.me/${
            process.env.NEXT_PUBLIC_RECEIVER_WHATSAPP_NUMBER || "+34601611862"
        }?text=${encodeURIComponent(message)}`;
    }
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <img
                    src="/Pizza-hero.png"
                    alt="Hero Image of the Pizzeria"
                    className={styles.heroImage}
                />
            </div>
            <div className={styles.content}>
                <h1 className={styles.heading}>Sobre nosotros</h1>
                <p className={styles.text}>
                    Somos una pizzería que se dedica a hacer{" "}
                    <span className={styles.enfasis}>pizzas de calidad</span> y
                    con{" "}
                    <span className={styles.fresh}>ingredientes frescos.</span>{" "}
                </p>
                <p className={styles.text}>
                    Nuestro objetivo es que disfrutes de una pizza deliciosa en
                    la comodidad de tu hogar.
                </p>
            </div>
            <div className={styles.background}>
                {/* <img
                    src="/background-pizza.jpg"
                    alt="Playful Background"
                    className={styles.backgroundImage}
                /> */}
                <p>
                    Podes pedir a traves de WhatsApp o desde el carrito. El
                    repartidor te cobrara al entregar tu pedido.
                </p>
            </div>
            <a href={createWhatsAppLink()} className={styles.waWrapper}>
                <WhatsAppButton />
            </a>
        </div>
    );
}
