import { FC } from "react"
import { IStudents } from "../../../types/typeStudents"
import styles from './EstudiantesCard.module.css'

interface IEstudiantesCard {
    student : IStudents
}

export const EstudiantesCard:FC<IEstudiantesCard> = ({student}) => {
    return (
        <div className={styles.containerPrincipal}>
            <div className={styles.containerData}>
                <p>Nombre: {student.nombre}</p>
                <p>Edad: {student.edad}</p>
            </div>
        </div>
    )
}