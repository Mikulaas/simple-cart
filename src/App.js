import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Topbar } from "./components/topbar";
import { Item } from "./components/item";
import { Grid } from "@material-ui/core";

const itemsToAdd = [
  {
    type: "1",
    price: 10,
  },
  {
    type: "2",
    price: 20,
  },
  {
    type: "3",
    price: 30,
  },
];

export function App() {
  const [itemsInCart, setItemsToCart] = useState(0);

  const handleAddItemToCart = () => setItemsToCart(itemsInCart + 1);

  const handleClearCart = () => setItemsToCart(0);

  return (
    <div className="App">
      <header className="App-header">
        <Topbar
          shoppingCartCount={itemsInCart}
          handleClearCart={handleClearCart}
        />

        <Grid container justify="center" spacing={4}>
          {itemsToAdd.map(({ type, price }) => (
            <Grid item>
              <Item
                key={type}
                type={type}
                price={price}
                addItemToShoppingCart={handleAddItemToCart}
              />
            </Grid>
          ))}
        </Grid>
      </header>
    </div>
  );
}
