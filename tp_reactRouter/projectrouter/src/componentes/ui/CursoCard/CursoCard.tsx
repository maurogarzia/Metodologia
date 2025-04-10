import { FC } from "react"
import { ICourses } from "../../../types/typeCourses"
import styles from './CursoCard.module.css'
import { Link } from "react-router-dom"

interface ICursoCard {
    curso : ICourses
}

export const CursoCard: FC<ICursoCard> = ({curso}) => {

    return(
        <div className={styles.containnerPrincipal}>
            <div className={styles.containnerTitle}>
                <h3>{curso.nombre}</h3>
            </div>
            <p>Cantidad de alumnos: {curso.estudiantes.length}</p>
            <div className={styles.containnerButton}>
                <Link to={`/estudiantes?curso=${curso.id}`}>
                    <button >Ver estudiantes</button>
                </Link>
                
            </div>
        </div>
    )
}