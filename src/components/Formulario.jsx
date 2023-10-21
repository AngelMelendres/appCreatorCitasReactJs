import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ addCita, citaUpdate, updateCitas }) => {
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    email: "",
    sintomas: "",
    alta: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //valida datos vacios
    if (
      [
        cita.mascota,
        cita.alta,
        cita.email,
        cita.propietario,
        cita.sintomas,
      ].includes("")
    ) {
      setError(true);
      return;
    }
    setError(false);

    //guardar la cita_

    if (cita.id) {
      cita.id = citaUpdate.id;
      updateCitas(cita);
    } else {
      cita.id = uuidv4();
      addCita(cita);
    }

    //reiniciar formaulario

    setCita({
      id: "",
      mascota: "",
      propietario: "",
      email: "",
      sintomas: "",
      alta: "",
    });
  };

  //mostrar los datos que se actualizaran
  useEffect(() => {
    if (Object.keys(citaUpdate).length > 0) {
      setCita(citaUpdate);
    }
  }, [citaUpdate]);

  return (
    <>
      <div className="md:w-1/2 ">
        <h1 className="text-center text-2xl font-bold">
          Seguimiento Pacientes
        </h1>

        <p className="font-bold text-center mt-5 text-lg">
          Agrega pacientes y{" "}
          <span className="text-violet-600">Administralos</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="px-4 py-4 bg-slate-50 rounded-xl shadow-md mt-5"
        >
          {error && (
            <div className="text-white bg-red-700 p-3 mb-3 rounded-sm text-center">
              Todos los campos son obligatorios
            </div>
          )}
          <div className="mb-5">
            <label htmlFor="mascota" className="block mb-2 uppercase font-bold">
              Nombre de la mascota
            </label>
            <input
              id="mascota"
              type="text"
              className="w-full p-2 border border-gray-400 rounded-lg"
              placeholder="Pepito..."
              name="mascota"
              onChange={handleChange}
              value={cita.mascota}
            ></input>
          </div>

          <div className="mb-5">
            <label
              htmlFor="propietario"
              className="block mb-2 uppercase font-bold"
            >
              Nombre Propietario
            </label>
            <input
              id="propietario"
              type="text"
              className="w-full p-2 border border-gray-400 rounded-lg"
              placeholder="Carlos..."
              name="propietario"
              onChange={handleChange}
              value={cita.propietario}
            ></input>
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 uppercase font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-gray-400 rounded-lg"
              placeholder="pepito@gmail.com"
              name="email"
              onChange={handleChange}
              value={cita.email}
            ></input>
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block mb-2 uppercase font-bold">
              Alta
            </label>
            <input
              id="alta"
              type="date"
              className="w-full p-2 border border-gray-400 rounded-lg"
              name="alta"
              value={cita.alta}
              onChange={handleChange}
            ></input>
          </div>

          <div className="mb-5">
            <label
              htmlFor="sintomas"
              className="block mb-2 uppercase font-bold"
            >
              Nombre de la sintomas
            </label>
            <textarea
              id="sintomas"
              type="text"
              className="w-full p-2 border border-gray-400 rounded-lg"
              name="sintomas"
              value={cita.sintomas}
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="bg-violet-600 text-white font-bold px-5 py-3 w-full rounded-xl ">
            {cita.id ? "Actualizar" : "Guardar"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Formulario;
