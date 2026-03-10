import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nota } from '../models/notaModel';

@Injectable({
  providedIn: 'root',
})
export class NotasService {
  // Inyectamos HttpClient usando la función inject (estilo moderno de Angular)
  private http = inject(HttpClient);
  
  // URL base donde se encuentran mis scripts PHP en XAMPP
  private url = 'http://localhost/proyectoAngularNotas/';

  /**
   * Recupera todas las notas. 
   * Se usa "recuperarTodas" para solucionar el error de coincidencia en el componente.
   * El PHP correspondiente debe realizar un JOIN para incluir el nombre de la etiqueta.
   */
  recuperarTodas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}recuperartodos.php`);
  }

  /**
   * Obtiene una sola nota por su ID.
   * Útil para el proceso de edición.
   */
  seleccionar(id: number): Observable<Nota[]> {
    return this.http.get<Nota[]>(`${this.url}seleccionar.php?id=${id}`);
  }

  /**
   * Inserta una nueva nota en la base de datos.
   * Este método se llama desde el componente "notas-nueva"[cite: 11, 33].
   */
  alta(nota: Nota): Observable<any> {
    return this.http.post<any>(`${this.url}alta.php`, nota);
  }

  /**
   * Elimina una nota mediante su ID.
   * Se utiliza en el listado de notas para la operación de borrado[cite: 34, 41].
   */
  baja(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}baja.php?id=${id}`);
  }

  /**
   * Actualiza los datos de una nota existente.
   * Completa la operación de Editar del CRUD[cite: 4, 46].
   */
  modificacion(nota: Nota): Observable<any> {
    return this.http.post<any>(`${this.url}modificacion.php`, nota);
  }
}