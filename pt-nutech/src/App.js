import "./App.css";
import HapusBarang from "./Barang/hapusBarang";
import TableBarang from "./Barang/tableBarang";
import TambahBarang from "./Barang/tambahBarang";
import EditBarang from "./Barang/editBarang";
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {

  //API
  //state
  const [barangs, setBarangs] = useState(null);
  const [create, setCreate] = useState({
    foto: "",
    nama: "",
    hargaBeli: "",
    hargaJual: "",
    stok: "",
  });
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    foto: "",
    nama: "",
    hargaBeli: "",
    hargaJual: "",
    stok: "",
  });

  //use effect
  useEffect(() => {
    readBarangs();
  }, []);

  //function
  const readBarangs = async () => {
    const res = await axios.get("https://test-pt-nutech.vercel.app/read-barang");
    setBarangs(res.data.barang);
  };

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;
    setCreate({
      ...create,
      [name]: value,
    });
  };

  const createBarang = async (e) => {
    e.preventDefault();

    const res = await axios.post("https://test-pt-nutech.vercel.app/create-barang", create);

    setBarangs([...barangs, res.data.barang]);

    setCreate({
      foto: "",
      nama: "",
      hargaBeli: "",
      hargaJual: "",
      stok: "",
    });
  };

  const deleteBarang = async (_id) => {
    await axios.delete(`https://test-pt-nutech.vercel.app/delete-barang/${_id}`);

    const newBarang = [...barangs].filter((barang) => {
      return barang._id !== _id;
    });

    setBarangs(newBarang);
  };

  const handleUpdateFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const updateBarang = async (e) => {
    e.preventDefault();

    const { foto, nama, hargaBeli, hargaJual, stok } = updateForm;

    const res = await axios.put(
      `https://test-pt-nutech.vercel.app/update-barang/${updateForm._id}`,
      {
        foto,
        nama,
        hargaBeli,
        hargaJual,
        stok,
      }
    );

    const updatedBarang = res.data.barang;

    const updatedBarangs = barangs.map((barang) =>
      barang._id === updatedBarang._id ? updatedBarang : barang
    );

    setBarangs(updatedBarangs);

    setUpdateForm({
      _id: null,
      foto: "",
      nama: "",
      hargaBeli: "",
      hargaJual: "",
      stok: "",
    });

    setIsEditBarangOpen(false);
  };

  //API

  //tambah barang
  const [isTambahBarangOpen, setIsTambahBarangOpen] = useState(false);
  const toggleTambahBarang = () => {
    setIsTambahBarangOpen(!isTambahBarangOpen);
  };
  //tambah barang

  //alert delete
  const [isDeleteBarangOpen, setIsDeleteBarangOpen] = useState(false);
  const toggleDeleteBarang = () => {
    setIsDeleteBarangOpen(!isDeleteBarangOpen);
  };
  //alert delete

  //alert edit
  const [isEditBarangOpen, setIsEditBarangOpen] = useState(false);

  const toggleEditBarang = (barang) => {
    setUpdateForm({
      foto: barang.foto,
      nama: barang.nama,
      hargaBeli: barang.hargaBeli,
      hargaJual: barang.hargaJual,
      stok: barang.stok,
      _id: barang._id,
    });
    setIsEditBarangOpen(true);
  };
  //alert edit

  return (
    <>
      {isTambahBarangOpen && (
        <TambahBarang
          onClose={toggleTambahBarang}
          createBarang={create}
          onSubmit={createBarang}
          onChange={updateCreateFormField}
        />
      )}
      {isDeleteBarangOpen && (
        <HapusBarang onClose={toggleDeleteBarang} deleteBarang={deleteBarang} />
      )}
      {isEditBarangOpen && (
        <EditBarang
          onCloseEdit={() => setIsEditBarangOpen(false)}
          updateForm={updateForm}
          handleUpdateFieldChange={handleUpdateFieldChange}
          updateBarang={updateBarang}
        />
      )}

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-4">Daftar Barang</h1>
        <button
          onClick={toggleTambahBarang}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Tambah Barang
        </button>
        <TableBarang
          tampilNotifHapus={toggleDeleteBarang}
          deleteBarang={deleteBarang}
          editBarang={toggleEditBarang}
          showBarang={barangs}
        />
      </div>
    </>
  );
};

export default App;
