import { Router } from "express";
import { Drink } from "../types";

const drinks: Drink[] = [
  {
    id: 1,
    title: "Coca-Cola",
    image:
      "https://media.istockphoto.com/id/1289738725/fr/photo/bouteille-en-plastique-de-coke-avec-la-conception-et-le-chapeau-rouges-d%C3%A9tiquette.jpg?s=1024x1024&w=is&k=20&c=HBWfROrGDTIgD6fuvTlUq6SrwWqIC35-gceDSJ8TTP8=",
    volume: 0.33,
    price: 2.5,
  },
  {
    id: 2,
    title: "Pepsi",
    image:
      "https://media.istockphoto.com/id/185268840/fr/photo/bouteille-de-cola-sur-un-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=xdsxwb4bLjzuQbkT_XvVLyBZyW36GD97T1PCW0MZ4vg=",
    volume: 0.33,
    price: 2.5,
  },
  {
    id: 3,
    title: "Eau Minérale",
    image:
      "https://media.istockphoto.com/id/1397515626/fr/photo/verre-deau-gazeuse-%C3%A0-boire-isol%C3%A9.jpg?s=1024x1024&w=is&k=20&c=iEjq6OL86Li4eDG5YGO59d1O3Ga1iMVc_Kj5oeIfAqk=",
    volume: 0.5,
    price: 1.5,
  },
  {
    id: 4,
    title: "Jus d'Orange",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    volume: 0.25,
    price: 4.5,
  },
  {
    id: 5,
    title: "Limonade",
    image:
      "https://images.unsplash.com/photo-1583064313642-a7c149480c7e?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    volume: 0.33,
    price: 5,
  },
];

const router = Router();

router.get("/", (req, res) => {
  console.log("Query params:", req.query); // Affiche les paramètres de la requête
  const budgetMax = req.query["budget-max"] ? Number(req.query["budget-max"]) : null;
  const volumeMax = req.query["volume-max"] ? Number(req.query["volume-max"]) : null;
  const idMax = req.query["id-max"] ? Number(req.query["id-max"]) : null;

  if (budgetMax !== null && isNaN(budgetMax)) {
    return res.status(400).json({ error: "Invalid budget-max value" });
  }

  if (volumeMax !== null && isNaN(volumeMax)) {
    return res.status(400).json({ error: "Invalid volume-max value" });
  }

  if (idMax !== null && isNaN(idMax)) {
    return res.status(400).json({ error: "Invalid id-max value" });
  }

  let filteredDrinks = drinks;

  if (budgetMax !== null) {
    filteredDrinks = filteredDrinks.filter((drink) => drink.price <= budgetMax);
  }

  if (volumeMax !== null) {
    filteredDrinks = filteredDrinks.filter((drink) => drink.volume <= volumeMax);
  }

  if (idMax !== null) {
    filteredDrinks = filteredDrinks.filter((drink) => drink.id <= idMax);
  }

  console.log("Filtered drinks:", filteredDrinks); // Affiche les boissons filtrées
  return res.json(filteredDrinks);
});


router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const drink = drinks.find((drink) => drink.id === id);
  if (!drink) {
    return res.status(404).json({ message: "Drink not found" });
  }
  return res.json(drink);
}
);    




export default router;
