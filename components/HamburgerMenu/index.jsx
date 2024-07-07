"use client";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import styles from "./index.module.css";
import Link from "next/link";

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.Hamburger} onClick={toggleMenu}>
            <IoIosMenu />
            {isOpen && (
                <ul className={styles.Menu}>
                    <li>
                        <Link className={styles.button} href={"/about"}>
                            Sobre nosotros
                        </Link>
                    </li>
                    <li>
                        <ul className={styles.subMenu}>
                            <li className={styles.subMenuItem}>
                                <Link
                                    className={styles.button}
                                    href={"/#nuestras-pizzas"}
                                >
                                    Nuestras pizzas
                                </Link>
                            </li>
                            <li className={styles.subMenuItem}>
                                <Link
                                    className={styles.button}
                                    href={"/#bebidas"}
                                >
                                    Bebidas
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className={styles.button} href={"/cart"}>
                            Carrito
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
}
