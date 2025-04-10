import { IStudents } from "./typeStudents";


export interface ICourses  {
    id : number,
    nombre : string,
    estudiantes : IStudents[]
}