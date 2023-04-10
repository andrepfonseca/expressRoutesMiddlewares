import { Router } from "express";
const router = Router();

const items = [
  { id: 1, name: "Headset Razer Kraken Kitty", price: 899.99, stock: 20 },
  { id: 2, name: "Teclado Deepcool Kg722", price: 699.9, stock: 15 },
  { id: 3, name: "Redragon Mousepad Aquarius", price: 110.0, stock: 10 },
  { id: 4, name: "Mouse Razer Lancehead Tournament", price: 415.45, stock: 30 },
  { id: 5, name: "Controle Dualsense Nova Pink", price: 431.99, stock: 5 },
];

let id = 6;

router.get("/", (req, res) => {
  res.send(items);
});

router.post("/", (req, res) => {
  const item = {
    id,
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
  };
  console.log(item);
  items.push(item);
  id += 1;
  res.send(item);
});

router.get("/:id", (req, res) => {
  const item = items.find((item) => item.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("The item does not exist.");
  res.send(item);
});

router.put("/:id", (req, res) => {
  const item = items.find((item) => item.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("The item does not exist.");
  if (req.body.name) item.name = req.body.name;
  if (req.body.price) item.price = req.body.price;
  if (req.body.stock) item.name = req.body.stock;
  res.send(item);
});

router.delete("/:id", (req, res) => {
  const item = items.find((item) => item.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("The item does not exist.");

  const index = items.indexOf(item);
  items.splice(index, 1);

  res.send(item);
});

export default router;
