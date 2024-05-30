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
    //q: Change the code so that the user is redirected to the AboutPage when they click on the "Sobre nosotros" button.

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
                        <Link className={styles.button} href={"/"}>
                            Nuestras pizzas
                        </Link>
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
