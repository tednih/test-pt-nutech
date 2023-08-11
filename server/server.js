if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const DB = require("./config/DB");
const barangController = require("./controllers/barangController");
const app = express();
const cors = require("cors");
DB();
app.use(express.json());
app.use(
  cors({
    origin: ["https://test-pt-nutech.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json("Backend for PT Nutech CRUD");
});

app.post("/create-barang", barangController.createBarang);

app.get("/read-barang", barangController.readBarangs);

app.get("/read-barang/:id", barangController.readBarang);

app.put("/update-barang/:id", barangController.updateBarang);

app.delete("/delete-barang/:id", barangController.deleteBarang);

app.listen(process.env.PORT);
