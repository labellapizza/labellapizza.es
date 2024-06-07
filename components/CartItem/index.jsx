// app/components/CartItem.tsx
import React from "react";
import styles from "./index.module.css";

const CartItem = ({ item }) => {
    return (
        <div className={styles.cartItem}>
            <img src={item.src} alt={item.name} className={styles.itemImage} />
            <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p>Precio: ${item.price.toFixed(2)}</p>
                <p>Cantidad: {item.amount}</p>
                {/* <div className={styles.itemActions}>
                    <button onClick={onRemove} className={styles.button}>
                        -
                    </button>
                    <button onClick={onAdd} className={styles.button}>
                        +
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default CartItem;
