import Item from '../components/Item';
import styles from './page.module.css'
import HamburgerMenu from "@/components/HamburgerMenu";

const pizzas = [
	{ name: 'Margherita', description: 'Clasica delicia con queso muzzarella real', price: 12, src: '/pizza-pie.jpg' },
	{ name: 'Pepperoni', description: 'Pepperoni y mozzarella en una base de tomate', price: 14, src: '/pizza-pie.jpg' },
	{ name: 'Vegetarian', description: 'Rellena de vegetales! zapallo, zukkini, cebolla y Berenjenas ', price: 13, src: '/pizza-pie.jpg' },
];

export default function Home() {
	return (
		<div>
			<div className={styles.header}>
				<img src="/Logo.jpeg" alt="logo" />
			<h1>La Bella Pizza</h1>
				<div className={styles.hamburgerMenu}>
					<HamburgerMenu />
				</div>
			</div>
			<section>
				{pizzas.map(pizza => (
					<Item key={pizza.name} name={pizza.name} description={pizza.description} price={pizza.price} src={pizza.src} />
				))}
			</section>
		</div>
  );
}