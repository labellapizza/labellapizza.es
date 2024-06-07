import { FaSquareWhatsapp } from "react-icons/fa6";
import styles from "./index.module.css";
import { useCart } from "@/hooks/useCart";

export default function WhatsAppButton() {
    const { cart } = useCart();
    return (
        <div className={styles.waContainer}>
            <FaSquareWhatsapp className={styles.whatsappButton} />
        </div>
    );
}
