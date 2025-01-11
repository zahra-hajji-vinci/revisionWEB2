import { Router } from "express";
import { Film, NewFilm} from "../types";


const router = Router();

const films: Film[] = [
    {
      id: 1,
      title: "Shang-Chi and the Legend of the Ten Rings",
      director: "Destin Daniel Cretton",
      duration: 132,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
      description:
        "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
      budget: 150,
    },
    {
      id: 2,
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      duration: 136,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      budget: 63,
    },
    {
      id: 3,
      title: "Summer Wars",
      director: "Mamoru Hosoda",
      duration: 114,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/7/7d/Summer_Wars_poster.jpg",
      description:
        "A young math genius solves a complex equation and inadvertently puts a virtual world's artificial intelligence in a position to destroy Earth.",
      budget: 18.7,
    },
    {
      id: 4,
      title: "The Meyerowitz Stories",
      director: "Noah Baumbach",
      duration: 112,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/a/af/The_Meyerowitz_Stories.png",
      description:
        "An estranged family gathers together in New York City for an event celebrating the artistic work of their father.",
    },
    {
      id: 5,
      title: "her",
      director: "Spike Jonze",
      duration: 126,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
      description:
        "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
      budget: 23,
    },
  ];




// Read all films films?minimum-duration=value
router.get("/", (req, res) => {
  if (req.query["minimum-duration"] === undefined) {
    return res.send(films);
  }

  const minDuration = Number(req.query["minimum-duration"]);

  if (isNaN(minDuration) || minDuration <= 0) {
    return res.sendStatus(400);
  }

  const filteredFilms = films.filter((film) => film.duration >= minDuration);

  return res.send(filteredFilms);

});


//Filtrer les films par id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const film = films.find((film) => film.id === id);

  if (film === undefined) {
    return res.sendStatus(404);
  }

  return res.send(film);
});


//Créer une nouveau film
router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||

    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0

  ) {
    return res.sendStatus(400);
  }

  const { title, director, duration, budget, description, imageUrl } = body as NewFilm;

  const nextId =
    films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
    1;

  const newFilm: Film = {
    id: nextId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  };

  films.push(newFilm);
  return res.json(newFilm);
});


// Delete a film by id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const index = films.findIndex((film) => film.id === id);

  if (index === -1) {
    return res.sendStatus(404);
  }

  const deletedFilm = films[index];

  films.splice(index, 1);

  return res.send(deletedFilm);
});



// Update on or multiple props of a film
router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const filmToUpdate = films.find((film) => film.id === id);

  if (filmToUpdate === undefined) {
    return res.sendStatus(404);
  }

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    Object.keys(body).length === 0 ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const updatedFilm = { ...filmToUpdate, ...body };

  films[films.indexOf(filmToUpdate)] = updatedFilm;

  return res.send(updatedFilm);
});



// Update a film only if all properties are given or create it if it does not exist and the id is not existant
router.put("/:id", (req, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const indexOfFilmToUpdate = films.findIndex((film) => film.id === id);
  // Deal with the film creation if it does not exist
  if (indexOfFilmToUpdate < 0) {
    const newFilm = body as NewFilm;

    const nextId =
      films.reduce((acc, film) => (film.id > acc ? film.id : acc), 0) + 1;

    const addedFilm = { id: nextId, ...newFilm };

    films.push(addedFilm);

    return res.json(addedFilm);
  }

  // Update the film
  const updatedFilm = { ...films[indexOfFilmToUpdate], ...body } as Film;

  films[indexOfFilmToUpdate] = updatedFilm;

  return res.send(updatedFilm);
});


export default router;
