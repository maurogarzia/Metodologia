import { useEffect, useState } from "react"
import { IStudents } from "../../../types/typeStudents"
import { getCourseById } from "../../../http/api"
import { Link, useParams } from "react-router-dom"
import { ICourses } from "../../../types/typeCourses"
import { EstudiantesCard } from "../../ui/EstudiantesCard/EstudiantesCard"
import styles from './EstudiantesScreen.module.css'


export const EstudiantesScreen = () => {

    const [students, setStudents] = useState<IStudents[]>([])
    const [error, setError] = useState(false)
    const [courseActive, setCourseActive] = useState<ICourses>()

    const { courseId } = useParams()
    

    useEffect(()=>{

        // Si el curso no existe el estado de error pasa a true
        if(!courseId) {
            setError(true)
            return
        }
        const id = Number(courseId)

        if (isNaN(id)) {
            setError(true)
            return
        }

        // Obtengo el curso para usar el nombre
        const obtainData = async() => {
            const response = await getCourseById(id)
            setCourseActive(response)
            setStudents(response.estudiantes)
        }

        obtainData()
        
    },[courseId])

    if(error) return <h1>No se encontro el curso !!!</h1> // Si el id no existe retorna el error

    return(
        <div className={styles.containerPrincipal}>
            <div className={styles.containerButton}>
                <Link to={'/'}>
                    <button>Volver</button>
                </Link>
            </div>
            <div className={styles.containerTitle}>
                <h1>Estudiantes del curso de {courseActive?.nombre} </h1>
            </div>
            <div className={styles.containerCards}>
                {students.map(student => (
                    <EstudiantesCard key={student.id} student={student}/>
                ))}
            </div>
                
        </div>
    )
}