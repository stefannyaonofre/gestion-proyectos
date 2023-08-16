import React from "react";
import { useForm } from "react-hook-form";
import { saveUser } from "../../services/getUsers";
import Swal from "sweetalert2";
import './registro.scss';

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await saveUser(data);
    if(response){
      Swal.fire(
        "Usuario Registrad",
        "El Usuario fue registrado con exito",
        "success"
      );
    }else{
      Swal.fire(
        'Usuario no registrado',
        'Hubo un problema al registrar el usuario',
        'error'
      );
    }
  };

  return (
    <main className="d-flex justify-content-center align-items-center vw-100 vh-150 fondo-color">
      <form className="formular card p-5 fondo-color" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">
            <span>Nombre</span>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Escriba su nombre"
              {...register("name", { required: true })}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>Email</span>
            <input
              type="email"
              className="form-control mt-2"
              placeholder="Escriba su email"
              {...register("email", { required: true })}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>Contraseña</span>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Escriba su contraseña"
              {...register("password", { required: true })}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>Imagen</span>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Escriba el enlace de su imagen"
              {...register("image", { required: true })}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-success">
          Registrar
        </button>
      </form>
    </main>
  );
};

export default Registro;
