import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Total number of plants
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total cost of cart
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      {/* Navbar */}
      <nav style={styles.nav}>
        <h2>Paradise Nursery</h2>
        <div>
          <a href="/">Home</a> | <a href="/plants">Plants</a> |{" "}
          <a href="/cart">Cart 🛒 ({totalItems})</a>
        </div>
      </nav>

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.card}>
              <img
                src={item.image}
                alt={item.name}
                style={styles.image}
              />

              <div>
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price}</p>
                <p>Total: ${item.price * item.quantity}</p>

                {/* Quantity Buttons */}
                <div>
                  <button
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                  >
                    -
                  </button>

                  <span style={{ margin: "0 10px" }}>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      dispatch(increaseQuantity(item.id))
                    }
                  >
                    +
                  </button>
                </div>

                {/* Delete Button */}
                <button
                  style={{ marginTop: "10px", backgroundColor: "red", color: "white" }}
                  onClick={() =>
                    dispatch(removeItem(item.id))
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2>Total Items: {totalItems}</h2>
          <h2>Total Cost: ${totalCost}</h2>

          {/* Buttons */}
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={() => alert("Checkout Coming Soon!")}
              style={styles.checkout}
            >
              Checkout
            </button>

            <a href="/plants">
              <button style={styles.continue}>
                Continue Shopping
              </button>
            </a>
          </div>
        </div>
      )}
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
  card: {
    display: "flex",
    gap: "20px",
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "15px",
  },
  image: {
    width: "120px",
    height: "120px",
    objectFit: "cover",
  },
  checkout: {
    padding: "10px 20px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    marginRight: "10px",
  },
  continue: {
    padding: "10px 20px",
  },
};

export default CartItem;
