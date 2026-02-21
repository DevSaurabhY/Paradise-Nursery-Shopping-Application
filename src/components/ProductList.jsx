import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const plants = [
    // Indoor Plants
    { id: 1, name: "Snake Plant", price: 20, category: "Indoor", image: "https://images.unsplash.com/photo-1598887142487-6a5f7f32f5b2" },
    { id: 2, name: "Peace Lily", price: 25, category: "Indoor", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb" },
    { id: 3, name: "Aloe Vera", price: 15, category: "Indoor", image: "https://images.unsplash.com/photo-1509420316987-d27c6d4f7b6b" },
    { id: 4, name: "Spider Plant", price: 18, category: "Indoor", image: "https://images.unsplash.com/photo-1614594852990-1f2e2b9c2a5d" },
    { id: 5, name: "Pothos", price: 22, category: "Indoor", image: "https://images.unsplash.com/photo-1601987077225-7c2e9d8bca9e" },
    { id: 6, name: "ZZ Plant", price: 30, category: "Indoor", image: "https://images.unsplash.com/photo-1616628182501-4b2c8c1d1c0a" },

    // Succulents
    { id: 7, name: "Echeveria", price: 10, category: "Succulent", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42" },
    { id: 8, name: "Jade Plant", price: 12, category: "Succulent", image: "https://images.unsplash.com/photo-1616627455290-7d2c8c1e9b4b" },
    { id: 9, name: "Haworthia", price: 14, category: "Succulent", image: "https://images.unsplash.com/photo-1524593119773-61c4c2fba6dc" },
    { id: 10, name: "Cactus", price: 8, category: "Succulent", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
    { id: 11, name: "Sedum", price: 9, category: "Succulent", image: "https://images.unsplash.com/photo-1523419409543-a6a1e4dcd9f4" },
    { id: 12, name: "Agave", price: 16, category: "Succulent", image: "https://images.unsplash.com/photo-1603354350317-6f7aaa6e99b0" },

    // Flowering Plants
    { id: 13, name: "Orchid", price: 35, category: "Flowering", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
    { id: 14, name: "Anthurium", price: 28, category: "Flowering", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb" },
    { id: 15, name: "Begonia", price: 24, category: "Flowering", image: "https://images.unsplash.com/photo-1524593119773-61c4c2fba6dc" },
    { id: 16, name: "Geranium", price: 19, category: "Flowering", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42" },
    { id: 17, name: "Hibiscus", price: 32, category: "Flowering", image: "https://images.unsplash.com/photo-1603354350317-6f7aaa6e99b0" },
    { id: 18, name: "Lavender", price: 21, category: "Flowering", image: "https://images.unsplash.com/photo-1523419409543-a6a1e4dcd9f4" },
  ];

  const categories = ["Indoor", "Succulent", "Flowering"];

  const getCartCount = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  const isInCart = (id) =>
    cartItems.some((item) => item.id === id);

  return (
    <div>
      {/* Navbar */}
      <nav style={styles.nav}>
        <h2>Paradise Nursery</h2>
        <div>
          <a href="/">Home</a> | <a href="/plants">Plants</a> |{" "}
          <a href="/cart">Cart 🛒 ({getCartCount()})</a>
        </div>
      </nav>

      {/* Products */}
      {categories.map((category) => (
        <div key={category}>
          <h2>{category} Plants</h2>
          <div style={styles.grid}>
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} style={styles.card}>
                  <img src={plant.image} alt={plant.name} style={styles.image} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button
                    onClick={() => dispatch(addItem(plant))}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    backgroundColor: "#4CAF50",
    color: "white",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    width: "200px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
};

export default ProductList;
