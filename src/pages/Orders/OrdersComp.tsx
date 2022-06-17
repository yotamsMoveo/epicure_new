import ResturantsMock from "../../mock-data/mock-restaurants.json";
import DishesMock from "../../mock-data/mock-dishes.json";
import { order } from "../../assets/interfaces/order";
import "../Orders/Order.scss";
import { Checkbox } from "@material-ui/core";
import { useState } from "react";
import { dish } from "../../assets/interfaces/dish";

const Orders = () => {
  const [quantity, setQuantity] = useState(0);
  const [white_bread, setWhite_bread] = useState(false);
  const [sticky_rice, setSticky_rice] = useState(false);
  const [whithout_peanuts, setWhithout_peanuts] = useState(false);
  const [sticky_less_spicy, setSticky_less_spicy] = useState(false);

  let order_dish: order=new order();

  let allDishes = DishesMock;

  const handleChange = (setBool: number) => {
    if (setBool == 1) {
      setWhite_bread(!white_bread);
    }
    if (setBool == 2) {
      setSticky_rice(!sticky_rice);
    }
    if (setBool == 3) {
      setWhithout_peanuts(!whithout_peanuts);
    }
    if (setBool == 4) {
      setSticky_less_spicy(!sticky_less_spicy);
    }
  };
  const currentUrl = window.location.pathname;
  const temp = currentUrl.split("/");
  let currentDishId = temp[temp.length - 1];
  let currentDish: any;
  allDishes.forEach((dish) => {
    if (dish.dish_id.toString() == currentDishId.toString()) {
      currentDish = dish;
    }
  });

  const changeQuantity = (symbol: string) => {
    if (symbol.localeCompare("-") == 0) {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    } else if (symbol.localeCompare("+") == 0) {
      setQuantity(quantity + 1);
    }
  };

  const addToBag = () => {
    if (quantity > 0) {
      debugger;
      const temp = currentDish as dish;
      order_dish.setOrderDish(currentDish as dish);
      order_dish.quantity = quantity;
      order_dish.sticky_less_spicy = sticky_less_spicy;
      order_dish.sticky_rice = sticky_rice;
      order_dish.white_bread = white_bread;
      order_dish.whithout_peanuts = whithout_peanuts;
    }
    debugger;
  };

  return (
    <div className="orders-body">
      <img src={currentDish.image} />
      <div className="order-dish-content">
        <p className="order-dish-content-title">{currentDish.name}</p>
        <p className="order-dish-contentidescription">
          {currentDish.description}
        </p>
      </div>
      <div className="order-dish-adding">
        <p className="order-dish-adding">Choose a side</p>
        <Checkbox
          checked={white_bread}
          onChange={() => handleChange(1)}
          inputProps={{ "aria-label": "controlled" }}
        />{" "}
        {"White bread"}
        <Checkbox
          checked={sticky_rice}
          onChange={() => handleChange(2)}
          inputProps={{ "aria-label": "controlled" }}
        />
        {"Sticky rice"}
        <p className="order-dish-adding">Changes</p>
        <Checkbox
          checked={whithout_peanuts}
          onChange={() => handleChange(3)}
          inputProps={{ "aria-label": "controlled" }}
        />{" "}
        {"Whithout peanuts"}
        <Checkbox
          checked={sticky_less_spicy}
          onChange={() => handleChange(4)}
          inputProps={{ "aria-label": "controlled" }}
        />
        {"Sticky less spicy "}
      </div>

      <div className="order-dish-quantity">
        <p>Quantity</p>
        <div className="order-dish-quantity-content">
          <p onClick={() => changeQuantity("-")}>-</p>
          <p>{quantity}</p>
          <p onClick={() => changeQuantity("+")}>+</p>
        </div>
      </div>
      <button className="add-to-bag" onClick={addToBag}>
        add to bag
      </button>
    </div>
  );
};

export default Orders;
