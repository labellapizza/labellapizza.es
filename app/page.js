import Item from '../components/Item';
import styles from './page.module.css'
import HamburgerMenu from "@/components/HamburgerMenu";

const pizzas = [
  { name: "Margarita", description: "Salsa tomate, mozzarella, albahaca, aceite de oliva.", price: 8, src: "/pizza-pie.jpg" },
  { name: "Marinara", description: "Salsa de tomate con ajo, albahaca, orégano, aceite de oliva.", price: 8, src: "/pizza-pie.jpg" },
  { name: "Calzone", description: "Mozzarella, carne picada, jamón York, aceite de oliva, oregano.", price: 8, src: "/pizza-pie.jpg" },
  { name: "Jamón y Queso", description: "Salsa de tomate, mozzarella, jamón York, champiñones.", price: 10, src: "/pizza-pie.jpg" },
  { name: "Cuatro Quesos", description: "Salsa de tomate, mozzarella Gorgonzola, parmesano, queso azul.", price: 10, src: "/pizza-pie.jpg" },
  { name: "Carbonara", description: "Salsa bacon, mozzarella, champiñones, huevo, aceite de oliva.", price: 10, src: "/pizza-pie.jpg" },
  { name: "Pepperoni", description: "Salsa de tomate, mozzarella, pepperoni, orégano, albahaca.", price: 10, src: "/pizza-pie.jpg" },
  { name: "Diavola", description: "Salsa de tomate, mozzarella, chorizo picante, aceite de oliva.", price: 10, src: "/pizza-pie.jpg" },
  { name: "Vegetariana", description: "Salsa de tomate, mozzarella, pimiento rojo y verde, champiñones, cebolla, aceitunas.", price: 10, src: "/pizza-pie.jpg" },
  { name: "Boscaiola", description: "Mozzarella, salchichas, champiñones, aceite de oliva.", price: 10, src: "/pizza-pie.jpg" },
  { name: "Barbacoa", description: "Salsa de tomate, muzzarella, carne picada, pimiento rojo y verde, cebolla, salsa barbacoa.", price: 11, src: "/pizza-pie.jpg" },
  { name: "Caprichosa", description: "Salsa de tomate, mozzarella, jamón York, alcachofas, champiñones y aceitunas.", price: 11, src: "/pizza-pie.jpg" },
  { name: "Hawaiana", description: "Salsa de tomate, mozzarella, jamón York, piña.", price: 11, src: "/pizza-pie.jpg" },
  { name: "Pollo", description: "Salsa de tomate, mozzarella, pollo, pimientos rojos y verdes, champiñones.", price: 11, src: "/pizza-pie.jpg" },
  { name: "Mariscos", description: "Salsa de tomate, mozzarella, calamar en su tinta, mejillones.", price: 12, src: "/pizza-pie.jpg" },
  { name: "Mexicana", description: "Salsa de tomate, mozzarella, cebolla, carne picada, jalapeño, aguacate.", price: 12, src: "/pizza-pie.jpg" },
  { name: "Ibérica", description: "Salsa de tomate, mozzarella, jamón crudo, tomate Cherry, aceite de oliva.", price: 12, src: "/pizza-pie.jpg" }
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
      <main className={styles.menu}>
				{pizzas.map(pizza => (
					<Item key={pizza.name} name={pizza.name} description={pizza.description} price={pizza.price} src={pizza.src} />
				))}
      </main>
		</div>
  );
}