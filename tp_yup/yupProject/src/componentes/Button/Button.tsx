import { FC } from "react"
import styles from './Button.module.css'

interface IButton {
    name : string,
    type? : "button" | "submit" | "reset"
    disabled : boolean
} 

export const Button:FC<IButton> = ({name, type, disabled}) => {
    return (
        <button type={type} disabled = {disabled} className={styles.containerButton}>{name}</button>
    )
}