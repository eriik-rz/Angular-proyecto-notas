import { Component, inject, signal, OnInit } from '@angular/core';
import { NotasService } from '../../../../core/services/notas-service';
import { EtiquetasService } from '../../../../core/services/etiquetas-service';
import { Etiqueta } from '../../../../core/models/etiquetaModel';
import { form, FormField } from '@angular/forms/signals';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notas-nueva',
  standalone: true,
  imports: [FormField, CommonModule],
  templateUrl: './notas-nueva.html'
})
export class NotasNueva implements OnInit {
  private notasServicio = inject(NotasService);
  private etiquetasServicio = inject(EtiquetasService);

  etiquetas = signal<Etiqueta[]>([]);
  botonGuardarPulsado = false;
  mostrarAlerta = false;
  cargando = signal(false);

  // Definimos el modelo inicial
  notaModel = signal({ titulo: '', contenido: '', etiqueta_id: 0 });
  // Vinculamos al formulario de la librería signals-forms
  notasForm = form(this.notaModel);

  ngOnInit() {
    this.etiquetasServicio.recuperarTodas().subscribe(datos => {
      this.etiquetas.set(datos);
    });
  }

  // Método para actualizar el ID de etiqueta correctamente en el Signal
  actualizarEtiqueta(event: Event) {
    const elemento = event.target as HTMLSelectElement;
    const nuevoId = Number(elemento.value);
    
    this.notaModel.update(modelo => ({
      ...modelo,
      etiqueta_id: nuevoId
    }));
  }

  alta(event: Event) {
    event.preventDefault();
    
    if (this.cargando()) return;

    this.botonGuardarPulsado = true;

    // Validación manual antes de enviar
    const datosActuales = this.notaModel();
    if (datosActuales.titulo.trim() === '' || datosActuales.etiqueta_id === 0) {
      return;
    }

    this.cargando.set(true);

    this.notasServicio.alta(datosActuales).subscribe({
      next: (datos: any) => {
        if (datos.resultado === 'OK') {
          this.mostrarAlerta = true;
          this.botonGuardarPulsado = false;
          // Reseteamos el signal a su estado inicial
          this.notaModel.set({ titulo: '', contenido: '', etiqueta_id: 0 });
          setTimeout(() => this.mostrarAlerta = false, 3000);
        } else {
          alert("Error: " + datos.mensaje);
        }
      },
      error: (err) => {
        console.error(err);
        this.cargando.set(false);
      },
      complete: () => this.cargando.set(false)
    });
  }
}