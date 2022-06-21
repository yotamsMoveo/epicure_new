import { SingleOrder } from "../../assets/interfaces/SingleOrder";
import "./Order.scss";
import { Checkbox } from "@material-ui/core";
import { useState } from "react";
import { SingleDish } from "../../assets/interfaces/SingleDish";
import PopUpComp, { PopupProps, PopupType } from "../../components/PopUp/PopUp";
import { Orders } from "../../assets/interfaces/Orders";
import { useSelector } from "react-redux";

const OrdersPage: React.FC<PopupProps> = ({
  popupType,
  onClickAction,
  isOpen,
  popup,
}) => {
  const dishes_page_data = useSelector((state: any) => state.dishesPageData);
  const [quantity, setQuantity] = useState(0);
  const [white_bread, setWhite_bread] = useState(false);
  const [sticky_rice, setSticky_rice] = useState(false);
  const [whithout_peanuts, setWhithout_peanuts] = useState(false);
  const [sticky_less_spicy, setSticky_less_spicy] = useState(false);

  let allDishes = dishes_page_data;
  const currentUrl = window.location.pathname;
  const temp = currentUrl.split("/");
  let currentDishId = temp[temp.length - 1];
  let base_dish: SingleDish = {
    image: "",
    name: "",
    description: "",
    type: "",
    price: 0,
    restaurant_id: "",
    dish_id: 0,
    dish_time: "",
  };
  let order_dish: SingleOrder = {
    dish: base_dish,
    white_bread: false,
    sticky_rice: false,
    whithout_peanuts: false,
    sticky_less_spicy: false,
    quantity: 0,
    total_price: 0,
  };
  let orders_to_show: Orders = {
    orders_to_show: [],
  };
  let currentDish: SingleDish = {
    image: "",
    name: "",
    description: "",
    type: "",
    price: 0,
    restaurant_id: "",
    dish_id: 0,
    dish_time: "",
  };

  let beforeUrl = "";
  for (let i = 0; i < temp.length - 1; i++) {
    if (i < temp.length - 2) {
      beforeUrl += temp[i] + "/";
    } else {
      beforeUrl += temp[i];
    }
  }
  allDishes.forEach((dish: SingleDish) => {
    if (dish.dish_id.toString() == currentDishId.toString()) {
      currentDish = dish;
    }
  });

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

  const addToBag = () => {
    if (quantity > 0) {
      order_dish.dish = currentDish;
      order_dish.quantity = quantity;
      order_dish.sticky_less_spicy = sticky_less_spicy;
      order_dish.sticky_rice = sticky_rice;
      order_dish.white_bread = white_bread;
      order_dish.whithout_peanuts = whithout_peanuts;
      order_dish.total_price += currentDish.price * quantity;
      orders_to_show.orders_to_show.push(order_dish);
      onClickAction("new_order");
    }
  };

  return (
    <div className="orders-body">
      <img src={currentDish.image} />
      <div className="content">
        <p className="content-title">{currentDish.name}</p>
        <p className="content-description">{currentDish.description}</p>
      </div>
      <div className="adding">
        <p className="adding-title">Choose a side</p>
        <div className="checkbox-warpper">
          <Checkbox
            checked={white_bread}
            onChange={() => handleChange(1)}
            inputProps={{ "aria-label": "controlled" }}
          />
          <p className="boolean">{"White bread"}</p>
        </div>
        <div className="checkbox-warpper">
          <Checkbox
            checked={sticky_rice}
            onChange={() => handleChange(2)}
            inputProps={{ "aria-label": "controlled" }}
          />
          <p className="boolean">{"Sticky rice"}</p>
        </div>
        <p className="adding-title">Changes</p>
        <div className="checkbox-warpper">
          <Checkbox
            checked={whithout_peanuts}
            onChange={() => handleChange(3)}
            inputProps={{ "aria-label": "controlled" }}
          />
          <p className="boolean">{"Whithout peanuts"}</p>
        </div>
        <div className="checkbox-warpper">
          <Checkbox
            checked={sticky_less_spicy}
            onChange={() => handleChange(4)}
            inputProps={{ "aria-label": "controlled" }}
          />
          <p className="boolean"> {"Sticky less spicy "}</p>
        </div>
      </div>

      <div className="quantity">
        <p className="quantity-title">Quantity</p>
        <div className="quantity-content">
          <p onClick={() => changeQuantity("-")} className="symbol">-</p>
          <p className="symbol">{quantity}</p>
          <p onClick={() => changeQuantity("+")} className="symbol">+</p>
        </div>
      </div>
      <button className="add-to-bag" onClick={addToBag}>
        add to bag
      </button>
      {{ isOpen } && (
        <PopUpComp
          popupType={PopupType.NewOrder}
          onClickAction={onClickAction}
        />
      )}
    </div>
  );
};

export default OrdersPage;
