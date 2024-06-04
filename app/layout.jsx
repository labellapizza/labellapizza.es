import Navbar from "@/components/Navbar";
import styles from "./layout.module.css";
import HamburgerMenu from "@/components/HamburgerMenu";
import { CartProvider } from "@/hooks/useCart";

import "./globals.css";

export const metadata = {
    title: "La Bella Pizza",
    description: "La mejor pizza de la ciudad",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <CartProvider>
                <body>
                    <div className={styles.header}>
                        <img src="/Logo.jpeg" alt="logo" />
                        <h1>La Bella Pizza</h1>
                        <div className={styles.hamburgerMenu}>
                            <HamburgerMenu />
                        </div>
                    </div>
                    <div className={styles.navbar}>
                        <Navbar />
                    </div>
                    {children}
                </body>
            </CartProvider>
        </html>
    );
}
