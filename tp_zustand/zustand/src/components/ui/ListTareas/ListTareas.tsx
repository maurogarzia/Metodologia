import { useEffect, useState } from 'react'
import { tareaStore } from '../../../store/tareaStore'
import styles from './ListTareas.module.css'

import CardList from '../CardList/CardList'
import Modal from '../Modal/Modal'
import { ITarea } from '../../../types/iTarea'
import useTareas from '../../../hooks/useTareas'

const ListTareas = () => {

    
    
    const setTareaActiva = tareaStore((state) => state.setTareaActiva)

    const {getAllTareas, tareas} = useTareas()

    useEffect(() => {
        getAllTareas()
    },[])

    const [openModal, setOpenModal] = useState(false)

    const handleOpenModalEdit = (tarea : ITarea) => {
        setTareaActiva(tarea)
        setOpenModal(true)
        
    }

    const handleCloseModalEdit = () => {
        setOpenModal(false)
    }

    return(
        <div className={styles.containerPrincipal}>
            <div className={styles.titleAndButton}>
                <h2>Lista de tareas</h2>
                <button onClick={() => setOpenModal(true)}>Agregar Tarea</button>
            </div>
            <div className={styles.containerTask}>
                {
                    tareas.length > 0 ?
                        tareas.map((task) =>(
                            <p>{<CardList handleOpenModalEdit={handleOpenModalEdit} tarea={task}/>}</p>
                        ))
                    :   <h2>No hay tareas cargadas</h2>
                }
            </div>
            {openModal && <Modal handleCloseModal = {handleCloseModalEdit}/>}
        </div>
    )
}

export default ListTareas