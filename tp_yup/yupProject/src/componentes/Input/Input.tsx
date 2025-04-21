import { ChangeEvent, FC } from "react"
import styles from "./Input.module.css"


interface IInput {
    type : string,
    name : string,
    value : string,
    label : string,
    handleChange : (e : ChangeEvent<HTMLInputElement>) => void,
    handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    error? : string
}

export const Input : FC<IInput> = ({type, name, value, label, handleChange, handleBlur, error}) => {
    return (
        <div className={ styles.containerPrincipal}>
            <label htmlFor={name}>{label}</label>
            <div className={error ? styles.errorInput : styles.containerPrincipal}>
                <input id={name} type={`${type}`} name={`${name}`} value={value} onChange={handleChange} onBlur={handleBlur} />
                {error && <span>{error}</span>}
            </div>
        </div>
    )
}