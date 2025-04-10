import { useEffect, useState } from "react"
import { ICourses } from "../../../types/typeCourses"
import { getAllCourses } from "../../../http/api"
import { CursoCard } from "../../ui/CursoCard/CursoCard"
import styles from './CursosScreen.module.css'


export const CursosScreen = () => {

    const [courses, setCourses] = useState<ICourses[]>([])
    
    useEffect(() => {
        // Obtengo los cursos
        const obtainData = async () => {
            const response = await getAllCourses()
            console.log(response);
            setCourses(response)
        }
        obtainData()
    },[])

    return(
        <div className={styles.containerPrincipal}>
            <div className={styles.containerTitle}>
                <h1>Cursos</h1>
            </div>
            <div className={styles.containerCards}>
                {courses.map((course) => (
                <CursoCard key={course.id} curso={course}/>
                ))}
            </div>
        </div>
    )
}