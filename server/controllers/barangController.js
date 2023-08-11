const Barang = require("../models/barang");

const createBarang = async (req, res) => {
  const foto = req.body.foto;
  const nama = req.body.nama;
  const hargaBeli = req.body.hargaBeli;
  const hargaJual = req.body.hargaJual;
  const stok = req.body.stok;
  const barang = await Barang.create({
    foto: foto,
    nama: nama,
    hargaBeli: hargaBeli,
    hargaJual: hargaJual,
    stok: stok,
  });
  res.json({ barang: barang });
};

const readBarangs = async (req, res) => {
  const barang = await Barang.find();
  res.json({ barang: barang });
};

const readBarang = async (req, res) => {
  const barangId = req.params.id;

  const barang = await Barang.findById(barangId);

  res.json({ barang: barang });
};

const updateBarang = async (req, res) => {
  const barangId = req.params.id;

  const foto = req.body.foto;
  const nama = req.body.nama;
  const hargaBeli = req.body.hargaBeli;
  const hargaJual = req.body.hargaJual;
  const stok = req.body.stok;

  await Barang.findByIdAndUpdate(barangId, {
    foto: foto,
    nama: nama,
    hargaBeli: hargaBeli,
    hargaJual: hargaJual,
    stok: stok,
  });

  const barang = await Barang.findById(barangId);

  res.json({ barang: barang });
};

const deleteBarang = async (req, res) => {
  const barangId = req.params.id;

  await Barang.findByIdAndDelete(barangId);

  res.json({ success: "Barang deleted" });
};

module.exports = {
  createBarang: createBarang,
  readBarangs: readBarangs,
  readBarang: readBarang,
  updateBarang: updateBarang,
  deleteBarang: deleteBarang,
};
