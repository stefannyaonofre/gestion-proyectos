import axios from "axios";
import { endpoints } from "./data";

export const getTareas = async () => {
    try {
        const { data } = await axios.get(endpoints.urlTareas);
        return data;
    } catch (error) {
        console.log(error);
        return []
    }
}

export const saveTarea = async (tarea) => {
    try {
        const { data } = await axios.post(endpoints.urlTareas, tarea)
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}