import styles from "./index.module.css";

export default function Item({ name, description, price, src }) {
    return (
        <div className={styles.item}>
            <h2 className={styles.itemTitle}>{name}</h2>
            <p className={styles.itemDescription}>{description}</p>
            <p className={styles.itemPrice}>€{price}</p>
            <img src={src} alt={name} className={styles.itemImage} />
        </div>
    );
}
