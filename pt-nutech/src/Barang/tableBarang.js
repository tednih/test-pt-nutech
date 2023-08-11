import React from "react";

const BarangTable = ({
  // tampilNotifHapus,
  editBarang,
  showBarang,
  deleteBarang,
}) => {
  const handleHapus = (_id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus barang ini?")) {
      deleteBarang(_id);
    }
  };

  return (
    <div className="py-4 overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-center whitespace-nowrap">
              Foto Barang
            </th>
            <th className="py-3 px-6 text-center whitespace-nowrap">
              Nama Barang
            </th>
            <th className="py-3 px-6 text-center whitespace-nowrap">
              Harga Beli
            </th>
            <th className="py-3 px-6 text-center whitespace-nowrap">
              Harga Jual
            </th>
            <th className="py-3 px-6 text-center whitespace-nowrap">Stok</th>
            <th className="py-3 px-6 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {showBarang &&
            showBarang.map((barang) => (
              <tr key={barang._id} className="bg-white text-gray-700">
                <td className="py-3 px-6 text-center whitespace-nowrap">
                  <img
                    src={barang.foto}
                    alt={barang.nama}
                    className="w-16 h-16 object-cover rounded md:w-24 md:h-24"
                  />
                </td>
                <td className="py-3 px-6 text-center whitespace-nowrap">
                  {barang.nama}
                </td>
                <td className="py-3 px-6 text-center whitespace-nowrap">
                  {barang.hargaBeli}
                </td>
                <td className="py-3 px-6 text-center whitespace-nowrap">
                  {barang.hargaJual}
                </td>
                <td className="py-3 px-6 text-center whitespace-nowrap">
                  {barang.stok}
                </td>
                <td className="py-3 px-6 text-center whitespace-nowrap">
                  <button
                    onClick={() => handleHapus(barang._id)}
                    className="bg-red-500 hover:bg-red-700 mr-2 text-white font-bold py-2 px-4 rounded"
                  >
                    Hapus
                  </button>
                  <button
                    onClick={() => editBarang(barang)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BarangTable;
