const mongoose = require("mongoose");

const barangSchema = new mongoose.Schema({
  foto: String,
  nama: String,
  hargaBeli: Number,
  hargaJual: Number,
  stok: Number,
});

const Barang = mongoose.model("Barang", barangSchema);

module.exports = Barang;
