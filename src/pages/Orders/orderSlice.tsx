
import ResturantsMock from "../../mock-data/mock-restaurants.json";
import DishesMock from "../../mock-data/mock-dishes.json";
import { order } from "../../assets/interfaces/order";
import "../Orders/Order.scss";
import { Checkbox } from "@material-ui/core";
import { useState } from "react";
import { dish } from "../../assets/interfaces/dish";
import PopUpComp, { PopupProps, PopupType } from "../../components/PopUp/PopUp";
import { orders } from "../../assets/interfaces/orders";

const orderSlice =()=>{
  const [quantity, setQuantity] = useState(0);
  const [white_bread, setWhite_bread] = useState(false);
  const [sticky_rice, setSticky_rice] = useState(false);
  const [whithout_peanuts, setWhithout_peanuts] = useState(false);
  const [sticky_less_spicy, setSticky_less_spicy] = useState(false);

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

  const changeQuantity = (symbol: string) => {
    if (symbol.localeCompare("-") == 0) {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    } else if (symbol.localeCompare("+") == 0) {
      setQuantity(quantity + 1);
    }
  };

  const addToBag = (currentDish:any,order_dish:order,orders_to_show:orders) => {
    if (quantity > 0) {
      const temp = currentDish as dish;
      order_dish.setOrderDish(currentDish as dish);
      order_dish.quantity = quantity;
      order_dish.sticky_less_spicy = sticky_less_spicy;
      order_dish.sticky_rice = sticky_rice;
      order_dish.white_bread = white_bread;
      order_dish.whithout_peanuts = whithout_peanuts;
      order_dish.total_price += currentDish.price * quantity;
      orders_to_show.addOrder(order_dish);
    //   onClickAction("new_order");

      // window.location.pathname=beforeUrl;
    }
  };
}
export default orderSlice;