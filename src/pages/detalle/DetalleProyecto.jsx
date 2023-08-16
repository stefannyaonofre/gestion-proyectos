import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detalleProyecto.scss";
import { getProject } from "../../services/projectsServices";

const DetalleProyecto = () => {
  
  const { idProyecto } = useParams();

  useEffect(() => {
    project()
    console.log(idProyecto)
  }, [])

  const project = async () => {
    try {
      const response = await getProject(idProyecto);
      console.log(response)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <section className="container-detalle">
    <div className="card cards">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <ul className="list-group cards">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </section>
      
    </>
  );
};

export default DetalleProyecto;
