"use client";
import { useState, useEffect } from "react";
import styles from "./index.module.css";
import {
    IoIosAddCircleOutline,
    IoIosRemoveCircleOutline,
} from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { useCart } from "@/hooks/useCart";

export default function Item({ name, description, price, src }) {
    const { addToCart, removeFromCart, getItemCount } = useCart();
    const [isEditing, setIsEditing] = useState(false);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        const count = getItemCount(name);
        setItemCount(count);
        setIsEditing(count > 0);
    }, [name, getItemCount]);

    const handleAddToCart = () => {
        setIsEditing(true);
        addToCart({ name, description, price, src });
        setItemCount((prevCount) => prevCount + 1);
    };

    const handleRemoveFromCart = () => {
        removeFromCart(name);
        setItemCount((prevCount) => {
            const newCount = prevCount - 1;
            if (newCount <= 0) {
                setIsEditing(false);
                return 0;
            }
            return newCount;
        });
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className={styles.item}>
            <div className={styles.itemLeftPortion}>
                <div className={styles.itemHeader}>
                    <h2 className={styles.itemTitle}>{name}</h2>
                </div>
                <p className={styles.itemDescription}>{description}</p>
                <div className={styles.priceAndButtons}>
                    <p className={styles.itemPrice}>{price} €</p>
                    {itemCount === 0 ? (
                        <div className={styles.buttonsBox}>
                            <button
                                onClick={handleAddToCart}
                                className={styles.editButton}
                            >
                                <IoIosAddCircleOutline />
                            </button>
                        </div>
                    ) : (
                        <div className={styles.buttonsBox}>
                            <div className={styles.itemCountContainer}>
                                {isEditing ? (
                                    <div className={styles.priceAndButtons}>
                                        <button
                                            onClick={handleRemoveFromCart}
                                            className={styles.editButton}
                                        >
                                            {itemCount === 1 ? (
                                                <FaRegTrashAlt />
                                            ) : (
                                                <IoIosRemoveCircleOutline />
                                            )}
                                        </button>
                                        <span>{itemCount}</span>
                                        <button
                                            onClick={handleAddToCart}
                                            className={styles.editButton}
                                        >
                                            <IoIosAddCircleOutline />
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
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.itemRightPortion}>
                <img src={src} alt={name} className={styles.itemImage} />
            </div>
        </div>
    );
}
