import { Routes } from '@angular/router';
import { NotasNueva } from './features/notas/components/notas-nueva/notas-nueva';
import { NotasLista } from './features/notas/components/notas-lista/notas-lista';
import { NotasConsultaPorNota } from './features/notas/components/notas-consulta-por-nota/notas-consulta-por-nota';
import { EtiquetasNueva } from './features/etiquetas/components/etiquetas-nueva/etiquetas-nueva';
import { EtiquetasLista } from './features/etiquetas/components/etiquetas-lista/etiquetas-lista';
import { NotasEdicion } from './features/notas/components/notas-edicion/notas-edicion';



export const routes: Routes = [
    {path: 'notas-nueva', component: NotasNueva},
    {path: 'notas-lista', component: NotasLista},
    { path: 'notas-edicion/:id', component: NotasEdicion },
    {path: 'notas-consulta-por-nota', component: NotasConsultaPorNota},
    {path: 'etiquetas-nueva', component: EtiquetasNueva},
    {path: 'etiquetas-lista', component: EtiquetasLista},
    



    // rutas especiales, siempre al final por que se lee de arriba abajo
    {path: '', redirectTo: 'notas-nueva', pathMatch: "full"}, // muestra por defecto
    {path: '**', redirectTo: 'notas-nueva', pathMatch: "full"} // muestra si no esixte
];
