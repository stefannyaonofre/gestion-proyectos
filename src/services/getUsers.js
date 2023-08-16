import axios from "axios";
import { endpoints } from "./data";

export const getUser = async({email, password}) => {
    try {
        const url = `${endpoints.users}?email=${email}&password=${password}`
        const {data} = await axios.get(url)
        return data[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}