import React from "react";

function TambahBarang({ onClose, createBarang, onSubmit, onChange }) {
  return (
    <div className="flex items-center justify-center min-h-screen backdrop-blur-sm bg-black/30 z-10 fixed inset-0  h-full w-full">
      <div className="bg-white p-8 rounded shadow-md w-1/2">
        <label
          onClick={onClose}
          class="float-right bg-blue-50 px-2 rounded-full"
        >
          X
        </label>
        <h2 className="text-2xl font-semibold mb-4">Tambah Barang</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              htmlFor="foto"
              className="block text-sm font-medium text-gray-700"
            >
              Foto Barang
            </label>
            <input
              onChange={onChange}
              value={createBarang.foto}
              type="text"
              id="foto"
              name="foto"
              className="mt-1 p-2 border w-full rounded-md"
              placeholder="URL Foto Barang"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="nama"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Barang
            </label>
            <input
              onChange={onChange}
              value={createBarang.nama}
              type="text"
              id="nama"
              name="nama"
              className="mt-1 p-2 border w-full rounded-md"
              placeholder="Nama Barang"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="hargaBeli"
              className="block text-sm font-medium text-gray-700"
            >
              Harga Beli
            </label>
            <input
              onChange={onChange}
              value={createBarang.hargaBeli}
              type="number"
              id="hargaBeli"
              name="hargaBeli"
              className="mt-1 p-2 border w-full rounded-md"
              placeholder="10000"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="hargaJual"
              className="block text-sm font-medium text-gray-700"
            >
              Harga Jual
            </label>
            <input
              onChange={onChange}
              value={createBarang.hargaJual}
              type="number"
              id="hargaJual"
              name="hargaJual"
              className="mt-1 p-2 border w-full rounded-md"
              placeholder="10000"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="stok"
              className="block text-sm font-medium text-gray-700"
            >
              Stok
            </label>
            <input
              onChange={onChange}
              value={createBarang.stok}
              type="number"
              id="stok"
              name="stok"
              className="mt-1 p-2 border w-full rounded-md"
              placeholder="15"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TambahBarang;
