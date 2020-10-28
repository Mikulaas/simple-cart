import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Topbar } from "./components/topbar";
import Item from "./components/item";
import { Grid } from "@material-ui/core";

export enum ItemTypeEnum {
  TYPE_1,
  TYPE_2,
  TYPE_3,
}

export interface ItemToAdd {
  type?: ItemTypeEnum;
  price: number;
}

const itemsToAdd: ItemToAdd[] = [
  {
    type: ItemTypeEnum.TYPE_1,
    price: 10,
  },
  {
    type: ItemTypeEnum.TYPE_2,
    price: 20,
  },
  {
    type: ItemTypeEnum.TYPE_3,
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
        <Topbar count={itemsInCart} handleClearCart={handleClearCart} />

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
