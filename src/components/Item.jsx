import React from "react";
const Item = ({ cita, setCitaUpdate, deleteCita }) => {
  const handleDelete = () => {
    const confirmacion = confirm("Estas seguro de eliminar esta cita");
    if (confirmacion) {
      deleteCita(cita.id);
    }
  };

  const handleEdit = () => {
    setCitaUpdate(cita);
  };

  return (
    <>
      <div className="bg-slate-50 p-4 rounded-lg mx-10 mt-5">
        <p className="font-bold mb-2">
          NOMBRE: <span className="font-normal">{cita.mascota}</span>
        </p>
        <p className="font-bold mb-2">
          PROPIETARIO: <span className="font-normal">{cita.propietario}</span>
        </p>
        <p className="font-bold mb-2">
          EMAIL: <span className="font-normal">{cita.email}</span>
        </p>
        <p className="font-bold mb-2">
          FECHA ALTA: <span className="font-normal">{cita.alta}</span>
        </p>
        <p className="font-bold mb-2">
          SITOMAS: <span className="font-normal">{cita.sintomas}</span>
        </p>

        <div className="flex justify-between mt-5">
          <button
            onClick={handleEdit}
            className="bg-indigo-700 px-10 py-2 text-white rounded-sm font-bold hover:bg-indigo-800"
          >
            Editar
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 px-10 py-2 text-white rounded-sm font-bold hover:bg-red-700"
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
