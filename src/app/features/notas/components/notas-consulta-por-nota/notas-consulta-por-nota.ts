import { Component, inject, signal, OnInit } from '@angular/core';
import { NotasService } from '../../../../core/services/notas-service';
import { EtiquetasService } from '../../../../core/services/etiquetas-service';
import { Etiqueta } from '../../../../core/models/etiquetaModel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notas-consulta-por-nota',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notas-consulta-por-nota.html'
})
export class NotasConsultaPorNota implements OnInit {
  private notasServicio = inject(NotasService);
  private etiquetasServicio = inject(EtiquetasService);

  // Signals para manejar los datos
  etiquetas = signal<Etiqueta[]>([]);
  notasFiltradas = signal<any[]>([]);
  etiquetaSeleccionada = signal<number>(0);

  ngOnInit() {
    // Cargamos las etiquetas disponibles al iniciar
    this.etiquetasServicio.recuperarTodas().subscribe(datos => {
      this.etiquetas.set(datos);
    });
  }

  filtrarPorEtiqueta() {
    const idBusqueda = this.etiquetaSeleccionada();
    // Recuperamos todas las notas y filtramos por la relación 
    this.notasServicio.recuperarTodas().subscribe(todas => {
      const filtradas = todas.filter(n => n.etiqueta_id == idBusqueda);
      this.notasFiltradas.set(filtradas);
    });
  }
}