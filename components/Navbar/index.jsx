import styles from "./index.module.css";
export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/menu">Menu</a>
            </div>
        </nav>
    );
}
