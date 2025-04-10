import axios from "axios"

const URL_VITE = 'http://localhost:3000/cursos'


// Funcion que muestra todos los cursos
export const getAllCourses = async () => {
    try {
        const response = await axios.get(URL_VITE)
        return response.data
    } catch (error) {
        console.log("Ocurrio un error en la llamada a la api", error);
        
    }
}

// Funcion que muestra un curso por id
export const getCourseById = async (id : number) => {
    try {
        const response = await axios.get(`${URL_VITE}/${id}`)

        if(!response.data || Object.keys(response.data).length === 0){
            return null
        }

        return response.data
    } catch (error) {
        console.log("Ocurrio un error en la llamada a la api", error);
        return null
    }
}


