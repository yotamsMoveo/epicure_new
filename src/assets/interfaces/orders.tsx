import { order } from "./order";

export class orders {
  orders_to_show: Array<order> = [];
  public constructor() {
    this.orders_to_show = new Array<order>();
  }
  public addOrder(order: order) {
    this.orders_to_show.push(order);
  }
}
