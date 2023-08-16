import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { saveTarea } from "../../services/tareasServices";
import Swal from "sweetalert2";

const CrearTarea = ({onClose}) => {

  const [isFormOpen, setIsFormOpen] = useState(true);
  const { idProyecto } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newTarea = {
      projectId: Number(idProyecto),
      tareaName: data.tareaName,
      descriptionTarea: data.descriptionTarea
    }
    const response = await saveTarea(newTarea);
    if(response){
      Swal.fire(
        "Tarea Registrada",
        "La Tarea fue registrada con exito",
        "success"
      );
    }else{
      Swal.fire(
        'Tarea no registrada',
        'Hubo un problema al registrar la tarea',
        'error'
      );
    }
  }

  return (
    <main className="d-flex justify-content-center align-items-center vw-50 vh-50">
      {isFormOpen && (
        <form
          className="formular card p-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-3">
            <label className="form-label">
              <span>Nombre Tarea</span>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Escriba el nombre de la tarea"
                {...register("tareaName", { required: true })}
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              <span>Descripción de la tarea</span>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Escriba la descripción de la tarea"
                {...register("descriptionTarea", { required: true })}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-success">
            Agregar Tarea
          </button>
        </form>
      )}
    </main>
  );
};

export default CrearTarea;
