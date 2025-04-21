import styles from './FormData.module.css'
import { Formik, Form } from 'formik'
import { schema } from '../schemas/formSchema'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import Swal from 'sweetalert2'

export const FormData = () => {

    const initialValues = {
        name : '',
        email : '',
        password : '',
        repeatPassword : ''
    }

    

    return (
        <div className={styles.containerPrincipal}>
            <div className={styles.containerTitle}>
                <h1>Formulario</h1>
            </div>
            
            <Formik initialValues={initialValues} validationSchema={schema} 
            onSubmit={(values, {resetForm}) => {
                console.log('Datos enviados', values)
                resetForm() // Reinicio los valores
                Swal.fire({
                    title : 'Datos Enviados',
                    text : 'Los datos se muestran en consola',
                    icon : 'success'
                    })
                }}
                validateOnChange={true} // Valida mientras se escribe
                validateOnBlur={true} // Valida cuando sale del campo
                    >
                {({values, handleChange, handleSubmit, errors, touched, isValid, isSubmitting, handleBlur }) => (
                    <Form className={styles.containerForm} onSubmit={handleSubmit}>

                    <Input name='name' type='text' value={values.name} label='Nombre' handleBlur={handleBlur} handleChange={handleChange} error={touched.name && errors.name ? errors.name : ''} />
                    <Input name='email' type='email' value={values.email} label='Email' handleBlur={handleBlur} handleChange={handleChange}  error={touched.email && errors.email ? errors.email : ''} />
                    <Input name='password' type='text' value={values.password} label='Contraseña' handleBlur={handleBlur} handleChange={handleChange} error={touched.password && errors.password ? errors.password : ''} />
                    <Input name='repeatPassword' type='text' value={values.repeatPassword} label='Repetir Contraseña' handleBlur={handleBlur} handleChange={handleChange} error={touched.repeatPassword && errors.repeatPassword ? errors.repeatPassword : ''} />

                    <div className={styles.containerButtons}>
                        <Button name='Cancelar' type='reset'disabled={false} />
                        <Button name='Enviar' type='submit' disabled={isSubmitting || !isValid}/>
                    </div>

                </Form>
                )}
            </Formik>

        </div>
    )
}