"use client";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import styles from "./index.module.css";

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.Hamburger} onClick={toggleMenu}>
            <CiMenuKebab />
            {isOpen && (
                <ul className={styles.Menu}>
                    <li>
                        <button>Sobre nosotros</button>
                    </li>
                    <li>
                        <button>Nuestras pizzas</button>
                    </li>
                    <li>
                        <button>Carrito</button>
                    </li>
                </ul>
            )}
        </div>
    );
}
