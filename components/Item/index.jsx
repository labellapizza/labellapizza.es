"use client";
import { useState } from "react";
import styles from "./index.module.css";
import useCart from "@/hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";

export default function Item({ name, description, price, src }) {
    const { addToCart, removeFromCart, getItemCount } = useCart();
    const [isEditing, setIsEditing] = useState(false);

    const itemCount = getItemCount(name);

    const handleAddToCart = () => {
        setIsEditing(true);
        addToCart(name);
    };

    const handleRemoveFromCart = () => {
        if (itemCount === 1) {
            removeFromCart(name);
            setIsEditing(false);
        } else {
            removeFromCart(name);
        }
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className={styles.item}>
            <h2 className={styles.itemTitle}>{name}</h2>
            <p className={styles.itemDescription}>{description}</p>
            <p className={styles.itemPrice}>€{price}</p>
            <img src={src} alt={name} className={styles.itemImage} />
            <div>
                {itemCount === 0 ? (
                    <button
                        onClick={handleAddToCart}
                        className={styles.itemButton}
                    >
                        +
                    </button>
                ) : (
                    <div className={styles.itemCountContainer}>
                        {isEditing ? (
                            <div className={styles.editContainer}>
                                <button
                                    onClick={handleRemoveFromCart}
                                    className={styles.editButton}
                                >
                                    {itemCount === 1 ? <FaTrashAlt /> : "-"}
                                </button>
                                <span>{itemCount}</span>
                                <button
                                    onClick={handleAddToCart}
                                    className={styles.editButton}
                                >
                                    +
                                </button>
                            </div>
                        ) : (
                            <div
                                onClick={handleEditToggle}
                                className={styles.itemCount}
                            >
                                {itemCount}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
