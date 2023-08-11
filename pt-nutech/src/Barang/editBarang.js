import React from "react";

function EditBarang({
  onCloseEdit,
  updateForm,
  handleUpdateFieldChange,
  updateBarang,
}) {
  return (
    <div className="flex items-center justify-center min-h-screen backdrop-blur-sm bg-black/30 z-10 fixed inset-0  h-full w-full">
      <div className="bg-white p-8 rounded shadow-md w-1/2">
        <label
          onClick={onCloseEdit}
          class="float-right bg-blue-50 px-2 rounded-full"
        >
          X
        </label>
        <h2 className="text-2xl font-semibold mb-4">Edit Barang</h2>
        <form onSubmit={updateBarang}>
          <div className="mb-4">
            <label
              htmlFor="foto"
              className="block text-sm font-medium text-gray-700"
            >
              Foto Barang
            </label>
            <input
              onChange={handleUpdateFieldChange}
              value={updateForm.foto}
              type="text"
              id="foto"
              name="foto"
              className="mt-1 p-2 border w-full rounded-md"
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
              onChange={handleUpdateFieldChange}
              value={updateForm.nama}
              type="text"
              id="nama"
              name="nama"
              className="mt-1 p-2 border w-full rounded-md"
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
              onChange={handleUpdateFieldChange}
              value={updateForm.hargaBeli}
              type="number"
              id="hargaBeli"
              name="hargaBeli"
              className="mt-1 p-2 border w-full rounded-md"
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
              onChange={handleUpdateFieldChange}
              value={updateForm.hargaJual}
              type="number"
              id="hargaJual"
              name="hargaJual"
              className="mt-1 p-2 border w-full rounded-md"
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
              onChange={handleUpdateFieldChange}
              value={updateForm.stok}
              type="number"
              id="stok"
              name="stok"
              className="mt-1 p-2 border w-full rounded-md"
            />
          </div>
          <div className="text-center">
            <button
              // onClick={() => toggleUpdate(barang._id)}
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

export default EditBarang;
