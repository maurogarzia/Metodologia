import { FC } from "react"
import { ITarea } from "../../../types/iTarea"
import styles from "./CardList.module.css"
import useTareas from "../../../hooks/useTareas"

type ICardList = {
    tarea : ITarea
    handleOpenModalEdit : (tarea : ITarea) => void
}

const CardList:FC<ICardList> = ({tarea, handleOpenModalEdit}) => {

    const {deleteTask} = useTareas()
    const eliminarTareaById = () => {
        deleteTask(tarea.id!);
        
    }

    const editarTarea = () =>{
        handleOpenModalEdit(tarea)
        
    }

    return(
        <div className={styles.containerCardPrincipal}>
            <div className={styles.cardTitle}>
                <h3>{tarea.titulo}</h3>
                <p>Descripcion: {tarea.descripcion}</p>
                <p>Fecha Limite: <b>{tarea.fechaLimite}</b></p>
            </div>
            <div className={styles.containerCardButtons}>
                <button onClick={eliminarTareaById}>Eliminar</button>
                <button onClick={editarTarea}>Editar</button>
            </div>
        </div>
    )
}

export default CardList
