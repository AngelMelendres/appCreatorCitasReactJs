import React from "react";
import Item from "./Item";
const Lista = ({ citas, deleteCita, setCitaUpdate }) => {
  return (
    <>
      <div className="mt-20 md:mt-0 md:w-2/3 h-screen overflow-y-scroll">
        <h1 className="text-center text-2xl font-bold">Listado Pacientes</h1>

        <p className="font-bold text-center mt-5 text-lg">
          Administra tus pacientes y{" "}
          <span className="text-violet-600">Citas</span>
        </p>
        {citas.length > 0 ? (
          <div>
            {citas.map((cita) => (
              <Item
                key={cita.id}
                cita={cita}
                deleteCita={deleteCita}
                setCitaUpdate={setCitaUpdate}
              />
            ))}
          </div>
        ) : (
          <div className="text-center mt-10">No Hay citas</div>
        )}
      </div>
    </>
  );
};

export default Lista;
