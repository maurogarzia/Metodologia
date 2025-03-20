import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { tareaStore } from '../../../store/tareaStore'
import styles from './Modal.module.css'
import { ITarea } from '../../../types/iTarea'
import useTareas from '../../../hooks/useTareas'


type IModal = {
    handleCloseModal : VoidFunction
}

const Modal : FC<IModal>= ({handleCloseModal}) => {

    const initialState : ITarea = {
        titulo : '',
        descripcion : '',
        fechaLimite: ''
    }

    const tareaActiva = tareaStore((state) => state.tareaActiva)
    const setTareaActiva = tareaStore((state) => state.setTareaActiva)

    const {crearTarea, putEditarTarea} = useTareas()

    const [formValues, setFormValues] = useState<ITarea>(initialState)

    useEffect(()=>{
        if (tareaActiva){
            setFormValues(tareaActiva)
        }
    },[])

    const handleChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setFormValues((prev) => ({...prev, [`${name}`]: value}))
    }
    
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        if(tareaActiva){
            putEditarTarea(formValues)
        }else{
            crearTarea({...formValues,id: new Date().toDateString()})
        }
        setTareaActiva(null)
        handleCloseModal()
    }

    return (
        <div className={styles.containerModalPrincipal}>
            <div className={styles.containerPopUp}>

                <div className={styles.containerTitle}>
                    <h3>{tareaActiva ? "Editar Tarea" : "Crear Tarea"}</h3>
                </div>

                <form action="" className={styles.containerForm} onSubmit={handleSubmit}>
                    <div className={styles.camposForm}>
                        <input type="text" onChange={handleChange} required value={formValues.titulo}autoComplete='off' name='titulo' />
                        <textarea required onChange={handleChange} value={formValues.descripcion} name = 'descripcion'></textarea>
                        <input type="date" onChange={handleChange} value={formValues.fechaLimite} required autoComplete='off' name='fechaLimite' />
                    </div>
                    <div className={styles.containerFormButton}>
                        <button onClick={handleCloseModal}>Cancelar</button>
                        <button type='submit'>{tareaActiva ? "Editar Tarea" : "Crear Tarea"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal