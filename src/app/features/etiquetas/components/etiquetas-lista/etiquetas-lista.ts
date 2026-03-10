import { Component, inject, signal, OnInit } from '@angular/core';
import { EtiquetasService } from '../../../../core/services/etiquetas-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etiquetas-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etiquetas-lista.html'
})
export class EtiquetasLista implements OnInit {
  private etiquetasServicio = inject(EtiquetasService);
  etiquetas = signal<any[]>([]);

  ngOnInit() { this.cargar(); }

  cargar() {
    this.etiquetasServicio.recuperarTodas().subscribe(data => this.etiquetas.set(data));
  }

  borrar(id: number) {
    if(confirm('¿Borrar esta etiqueta?')) {
      this.etiquetasServicio.baja(id).subscribe(() => this.cargar());
    }
  }
}