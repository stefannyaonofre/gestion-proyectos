import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./cardProyects.scss"
import { AppContext } from '../../router/Router'
import { createProject, deleteProject, getAllProjects } from '../../services/projectsServices'
import close from "/images/close.svg"
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

const CardProyects = () => {
  const [openForm, setOpenForm] = useState(false)
  const {projects, setProjects} = useContext(AppContext)
  const navigate = useNavigate()

  const {register, handleSubmit, formState: {errors}} = useForm()

const onSubmit = async (data) => {
  const newProject = {
    name: data.name,
    description: data.description,
  };
  const response = await createProject(newProject)
    if (response) {
        Swal.fire('Proyecto creado', `Proyecto fue creado con exito`, 'success')
        getProjects()
    }else {
        Swal.fire('Error', `Hubo un problema al crear el proyecto`, 'error')
}
}

    const details = (id) => {
        navigate(`${id}`)
    }

    useEffect(() => {
      getProjects()
    }, [projects])

    const getProjects = async () => {
      const resp = await getAllProjects()
      setProjects(resp)
    }

    const handleDelete = (id) => {
      Swal.fire({
        title: "Eliminar un proyecto",
        text: "¿Estás segure de que quieres eliminar el proyecto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteOneProject(id)
          getProjects()
        }
      });
    }
    const deleteOneProject = async (id) => {
      const response = await deleteProject(id)
    }

  return (
    <main className='home'>
      <div className='home-title'>
        <h1>Mis proyectos</h1>
        <button className='add' onClick={() => setOpenForm(true)}>Añadir un proyecto<span>+</span></button>
        {openForm && 
        <div className='new-form--container'>
          <form className='new-form' onSubmit={handleSubmit(onSubmit)}>
            <figure className='form-close' onClick={() => setOpenForm(false)}>
                <img src={close} alt="Icon for close" />
            </figure>
            <h2>Crear proyecto nuevo</h2>
            <label>Nombre del proyecto</label>
            <input {...register('name', {required: true})} type="text" name='name' placeholder='Escribe el nombre del proyecto'/>
            <label>Descripción del proyecto</label>
            <input {...register('description', {required: true})} type="text" name='description' placeholder='Escribe la descripción del proyecto'/>
            <button type="submit">Enviar</button>
          </form>
        </div>
        }
        
      </div>
      
      <article className='cards-container' >
        {
          projects && projects.map((project) => (
            <div key={project.id} className='card' >
              <h3 onClick={() => details(project.id)}>{project.name}</h3>
              <button className='delete' onClick={() => handleDelete(project.id)}>-</button>
            </div>
          ))
        }
      </article>
    </main>
   
  )
}

export default CardProyects