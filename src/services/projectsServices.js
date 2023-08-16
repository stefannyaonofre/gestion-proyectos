import axios from "axios"
import { endpoints } from "./data"

export const getProject = async (idProject) => {
    try {
        const { data } = await axios.get(`${endpoints.urlProjects}?id=${idProject}`);
        return data
        
    } catch (error) {
        console.log(error)
        return {}
    }
}

export const getAllProjects = async () => {
    try {
        const { data } = await axios.get(`${endpoints.urlProjects}`);
        return data
        
    } catch (error) {
        console.log(error)
        return {}
    }
}

export const deleteProject = async (id) => {
    try {
        const response = await axios.delete(`${endpoints.urlProjects}/${id}`);
        return response
        
    } catch (error) {
        console.log(error)
        return error
    }
}

export const createProject = async (newProject) => {
    try {
        const response = await axios.post(`${endpoints.urlProjects}`, newProject);
        return response
        
    } catch (error) {
        console.log(error)
        return error
    }
}