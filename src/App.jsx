import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import Titulo from "./components/Titulo";

function App() {
  const [citas, setCitas] = useState([]);
  const [citaUpdate, setCitaUpdate] = useState({});

  useEffect(() => {
    const storedCitas = localStorage.getItem("citas");
    if (storedCitas) {
      setCitas(JSON.parse(storedCitas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  const addCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  const updateCitas = (nuevaCita) => {
    setCitas(
      citas.map((cita) => (cita.id === nuevaCita.id ? nuevaCita : cita))
    );
  };

  const deleteCita = (idCita) => {
    setCitas(citas.filter((cita) => cita.id !== idCita));
  };

  return (
    <>
      <div className="container mx-auto">
        <Titulo />

        <div className="md:flex mt-10">
          <Formulario
            addCita={addCita}
            citaUpdate={citaUpdate}
            updateCitas={updateCitas}
          />
          <Lista
            citas={citas}
            deleteCita={deleteCita}
            setCitaUpdate={setCitaUpdate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
