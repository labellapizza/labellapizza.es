import styles from "./page.module.css";

export default function About() {
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
                    Podes pedir a travez de WhatsApp o desde el carrito. El
                    repartidor te cobrara al entregar tu pedido.
                </p>
            </div>
        </div>
    );
}
