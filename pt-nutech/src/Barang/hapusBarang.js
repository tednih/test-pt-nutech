import React from "react";

function HapusBarang({ onClose, _id, deleteBarang }) {
  return (
    <div className="flex items-center justify-center min-h-screen backdrop-blur-sm bg-black/30 z-10 fixed inset-0 h-full w-full">
      <div className="bg-white p-8 rounded shadow-md">
        <div className="text-right">
          <label onClick={onClose} class=" bg-blue-50 px-2 rounded-full">
            X
          </label>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center text-red-600 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          <p className="text-gray-700 mb-4">Yakin ingin menghapus?</p>
          <button
            onClick={() => deleteBarang(_id)}
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default HapusBarang;
