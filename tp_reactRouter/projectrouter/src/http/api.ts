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
        return response.data
    } catch (error) {
        console.log("Ocurrio un error en la llamada a la api", error);
    }
}

// Funcion que muestra los estudiantes de un curso
export const getAllStudentsByCourse = async (id : number) => {
    try {
        const response = await axios.get(`${URL_VITE}?id=${id}`)
        return response.data[0].estudiantes
    } catch (error) {
        console.log("Ocurrio un error en la llamada a los estudiantes", error)
    }
}