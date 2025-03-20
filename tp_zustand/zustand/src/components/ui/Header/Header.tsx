import ListTareas from "../ListTareas/ListTareas"
import styles from "./Header.module.css"

const Header = () => {
    return(
        <div>
            <div className={styles.containerHeader}>
                <h1>Aplicacion de tareas</h1>
            </div>
            <ListTareas/>
        </div>
    )
}

export default Header