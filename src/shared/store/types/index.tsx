export interface IProduct {
  id: string;
  colour: string;
  name: string;
  price: number;
  img: string;
}

export interface ShoppingCartState {
  items: IProduct[];
}
