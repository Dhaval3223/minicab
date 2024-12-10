import axios from "axios";
import { toastError } from "./Notifycustom";

export const getDataWithToken = async (url) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`, // Use token directly as a string
                "Content-Type": "application/json",
            },
        });
        return response;
    } catch (error) {
        console.log("Error", error);  
        toastError(error?.response?.data?.message)
    }
};
export const getmethodDataWithToken = async (url,default_token) => {
    const token = localStorage.getItem('token')||default_token;
    try {
        const response = await axios(url, {
            method: "get",
            headers: {
                Authorization: `Bearer ${token}`, // Use token directly as a string
                "Content-Type": "application/json",
            },
        });
        return response;
    } catch (error) {
        toastError(error?.response?.data?.message)
        console.log("Error", error);  
    }
};

export const getmethodData = async (url) => {

    try {
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response.data; // Return only the data property for use in useQuery
    } catch (error) {
        console.error("Error fetching data", error);
        toastError(error?.response?.data?.message || "An error occurred while fetching data");
        throw error; // Rethrow the error so that useQuery can handle it
    }
};
