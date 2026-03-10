import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etiqueta } from '../models/etiquetaModel';

@Injectable({
  providedIn: 'root',
})
export class EtiquetasService {
  private http = inject(HttpClient);
  // Asegúrate de que esta URL sea la misma que en el servicio de notas
  private url = 'http://localhost/proyectoAngularNotas/';

  // Obtener todas las etiquetas (para el select de las notas)
  recuperarTodas(): Observable<Etiqueta[]> {
    return this.http.get<Etiqueta[]>(`${this.url}recuperartodos_etiquetas.php`);
  }

  // Alta de etiqueta
  alta(etiqueta: Etiqueta): Observable<any> {
    return this.http.post<any>(`${this.url}alta_etiqueta.php`, etiqueta);
  }

  // Baja de etiqueta
  baja(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}baja_etiqueta.php?id=${id}`);
  }
}