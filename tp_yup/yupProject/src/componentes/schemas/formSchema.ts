import { object, ref, string } from "yup";

export const schema = object({
    name : string().min(3, "El nombre no puede tener menos de 3 caracteres").required('Campo Obligatorio'),
    email : string().required("Campo obligatorio").email("Formato incorrecto"),
    password : string().required('Campo obligatorio').min(6, "La contraseña debe tener minimo 6 caracteres"),
    repeatPassword :string().oneOf([ref('password')], "Las contraseñas no coinciden").required("Campo obligatorio")
})

