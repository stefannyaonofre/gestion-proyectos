import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detalleProyecto.scss";
import { getProject } from "../../services/projectsServices";
import { getTareas } from "../../services/tareasServices";
import CrearTarea from "../../components/crearTarea/CrearTarea";

const DetalleProyecto = () => {
  const { idProyecto } = useParams();
  const [proyecto, setProyecto] = useState();
  const [tareas, setTareas] = useState();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    project();
    filterTareas();
    console.log(idProyecto)
  }, []);

  const project = async () => {
    try {
      const response = await getProject(idProyecto);
      setProyecto(response);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  const filterTareas = async () => {
    try {
      const response = await getTareas();
      const filter = response.filter((tarea) => tarea.projectId == idProyecto);
      setTareas(filter);
      console.log(filter)
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    setOpened(true);
  };
  const handleCloseForm = () => {
    setOpened(false);
  };

  return (
    <>
      <section className="container-detalle">
        <div className="card cards">
          <div className="card-body d-flex flex-column justify-content-center">
            {proyecto?.map((proyect) => (
              <h3 className="card-title text-center" key={proyect.id}>
                {proyect?.name}
              </h3>
            ))}
            {proyecto?.map((proyect) => (
              <p className="card-text" key={proyect.id}>
                {proyect?.description}
              </p>
            ))}
          </div>
        </div>
        <div className="container-list">
          {
            opened ? (
              <CrearTarea onClose={handleCloseForm}/>
            ) : (
              <button type="button" 
              className="btn btn-light"
              onClick={handleClick}
              >
            Agregar Tarea +
          </button>
            )
          }
          
          <ul className="list-group cards">
            {tareas?.map((tarea) => (
              <li className="list-group-item" key={tarea.id}>
                <h6>{tarea.tareaName}</h6>
                <p>{tarea.descriptionTarea}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default DetalleProyecto;
