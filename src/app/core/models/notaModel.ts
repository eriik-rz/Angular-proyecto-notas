export interface Nota {
    id?: number;      // El '?' hace que no sea obligatorio al crear notas nuevas
    titulo: string;
    contenido: string;
    etiqueta_id: number;
}