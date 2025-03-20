import { useShallow } from "zustand/shallow"
import { tareaStore } from "../store/tareaStore"
import { editarTarea, eliminarTarea, mostrarTodasLasTareas, postNuevaTarea } from "../http/tarea"
import { ITarea } from "../types/iTarea"
import Swal from "sweetalert2"

const useTareas = () => {
    const {tareas, setArrayTareas, agregarNuevaTarea, eliminarUnaTarea, editarUnaTarea} = tareaStore(useShallow((state) => ({
        tareas : state.tareas,
        setArrayTareas : state.setArrayTareas,
        agregarNuevaTarea : state.agregarNuevaTarea,
        eliminarUnaTarea : state.eliminarUnaTarea,
        editarUnaTarea : state.editarUnaTarea
    })))

    const getAllTareas = async () =>{
            const data = await mostrarTodasLasTareas()
            if (data) setArrayTareas(data)
        }

        const crearTarea = async(nuevaTarea: ITarea) =>{
            agregarNuevaTarea(nuevaTarea)
            try{
                await postNuevaTarea(nuevaTarea)
                Swal.fire("Exito", "Tarea agreagadad correctamente", "success")
            }catch(error){
                eliminarUnaTarea(nuevaTarea.id!)
                console.log("Algo salio mal al crear la tarea")
            }
        }

        const putEditarTarea = async(tareaEditada: ITarea) =>{
            const estadoPrevio = tareas.find((el)=>el.id === tareaEditada.id)
            editarUnaTarea(tareaEditada)
            try {
                await editarTarea(tareaEditada)
                Swal.fire("Exito", "Tarea actualizada correctamente", "success")
            } catch (error) {
                if (estadoPrevio) editarUnaTarea(estadoPrevio)
                    console.log("Algo salio mal al editar");
                    
            }
        }

        const deleteTask = async(idTarea: string) =>{
            const estadoPrevio = tareas.find((el)=>el.id === idTarea)
            eliminarUnaTarea(idTarea)
            try {
                await eliminarTarea(idTarea)
                const confirm = await Swal.fire({
                    title: "Estas seguro?",
                    text: "Esta accion no se puede deshacer",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Si, eliminar",
                    cancelButtonText: "Cancelar",
                })
                if(!confirm.isConfirmed){
                    return
                } 
            } catch (error) {
                if (estadoPrevio) agregarNuevaTarea(estadoPrevio)
                console.log("Algo salio mal al eliminar una tarea");
                
            }
        }


    return {
        getAllTareas,
        crearTarea,
        putEditarTarea,
        deleteTask,
        tareas
    }
}

export default useTareas