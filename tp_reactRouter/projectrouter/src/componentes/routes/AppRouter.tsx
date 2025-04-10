import { Route, Routes } from "react-router-dom"
import { CursosScreen } from "../screen/CursosScreen/CursosScreen"
import { EstudiantesScreen } from "../screen/EstudiantesScreen/EstudiantesScreen"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<CursosScreen/>}></Route>
            <Route path="/estudiantes" element={<EstudiantesScreen/>}></Route>
        </Routes>
    )
}