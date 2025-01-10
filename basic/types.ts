interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;

interface Drink {
  id: number;
  title: string;
  image: string;
  volume: number;
  price: number;
}

//Create a new type NewDrink that is the same as Drink but without the id field
type NewDrink = Omit<Drink, "id">;


export type { Pizza, NewPizza, PizzaToUpdate, Drink, NewDrink };
