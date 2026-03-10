import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotasService } from '../../../../core/services/notas-service';
import { EtiquetasService } from '../../../../core/services/etiquetas-service';
import { Nota } from '../../../../core/models/notaModel';
import { Etiqueta } from '../../../../core/models/etiquetaModel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notas-edicion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notas-edicion.html'
})
export class NotasEdicion implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private notasServicio = inject(NotasService);
  private etiquetasServicio = inject(EtiquetasService);

  etiquetas = signal<Etiqueta[]>([]);
  // Usamos una estructura de objeto normal para facilitar el ngModel
  nota: Nota = { id: 0, titulo: '', contenido: '', etiqueta_id: 0 };

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.etiquetasServicio.recuperarTodas().subscribe(data => this.etiquetas.set(data));

    this.notasServicio.seleccionar(id).subscribe(res => {
      if (res.length > 0) {
        this.nota = res[0]; // Cargamos los datos en el objeto
      }
    });
  }

  actualizar() {
    // Validamos antes de enviar
    if (!this.nota.titulo || this.nota.etiqueta_id === 0) {
      alert("El título y la etiqueta son obligatorios");
      return;
    }

    this.notasServicio.modificacion(this.nota).subscribe((res: any) => {
      if (res.resultado === 'OK') {
        alert('¡Nota actualizada!');
        this.router.navigate(['/notas-lista']); // Redirigir al listado
      } else {
        alert('Error al actualizar: ' + res.mensaje);
      }
    });
  }
}