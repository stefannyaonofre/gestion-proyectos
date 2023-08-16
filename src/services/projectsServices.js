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