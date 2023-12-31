import React, { useState } from "react";
import useForm from "../../components/hooks/useForm";
import useSessionStorage from "../../components/hooks/useSesionStorage";
import { getUser } from "../../services/getUsers";
import eye from "/eye.svg";
import eyeShow from "/eye-show.svg";
import Swal from "sweetalert2";
import "./loguin.scss";
import { Link, useNavigate } from "react-router-dom";

const Loguin = ({ signIn }) => {
  const key = "user";
  const [dataForm, handleChange, resetForm] = useForm();
  const [showPassword, setShowPassword] = useState(false); //estado para mostrar o no la contraseña
  const { saveInfo } = useSessionStorage(key);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(dataForm);
    const loggedUser = await getUser(dataForm);
    console.log(loggedUser);
    if (loggedUser) {
      Swal.fire(
        `¡Excelente ${loggedUser.name}!`,
        "Has iniciado sesión exitosamente",
        "success"
      ).then(() => {
        signIn(true);
        saveInfo(key, loggedUser);
      });
    } else {
      Swal.fire(
        "Oopps!",
        "Las credenciales ingresadas son incorrectas",
        "error"
      );
    }
    console.log(loggedUser);
    resetForm();
  };
  return (
    <div className="loguin">
      <form onSubmit={handleSubmit}>
        <label>Correo electrónico:</label>
        <input
          onChange={handleChange}
          name="email"
          value={dataForm?.email || ""}
          type="text"
          placeholder="Ingresa tu correo"
        />
        <label>Contraseña:</label>
        <input
          className="inpass"
          onChange={handleChange}
          name="password"
          value={dataForm?.password || ""}
          type={showPassword ? "text" : "password"}
          placeholder="Ingresa tu contraseña"
        />
        <img
          src={showPassword ? eyeShow : eye}
          onClick={() => setShowPassword(!showPassword)}
          className="img-icon"
        />
        <button type="submit">Iniciar sesión</button>
        <span className="pt-3">
          <Link to='/registro'>Registrar usuario</Link>
        </span>
      </form>
    </div>
  );
};

export default Loguin;
