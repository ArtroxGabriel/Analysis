import { Routes, Route, Navigate } from "react-router-dom";
import { Analise } from "../pages/analise/Analise";
import { FonteDados } from "../pages/fonte-dados/FonteDados";

import { PageFormAnalise } from "../pages/analise/Forms/PageForm";
import { PageFormFonte } from "../pages/fonte-dados/Forms/PageForm";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/analises' element={<Analise />} />
            <Route path='/analises/:id?' element={<PageFormAnalise />} />

            <Route path='/fonte-dados' element={<FonteDados />} />
            <Route path='/fonte-dados/:id' element={<PageFormFonte />} />


            <Route path='*' element={<Navigate to='/analises' />} />
        </Routes>
    );
}