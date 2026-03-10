import { Component, inject, signal } from '@angular/core';
import { EtiquetasService } from '../../../../core/services/etiquetas-service';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-etiquetas-nueva',
  standalone: true,
  imports: [FormField],
  templateUrl: './etiquetas-nueva.html'
})

export class EtiquetasNueva {
  private etiquetasServicio = inject(EtiquetasService);
  
  botonGuardarPulsado = false;
  mostrarAlerta = false;

  // Modelo para la etiqueta
  etiquetaModel = signal({ nombre: '' });
  etiquetaForm = form(this.etiquetaModel);

  // ... dentro de la clase
cargando = signal(false); // Nuevo semáforo

guardar() {
    // Si ya estamos guardando, ignoramos cualquier otro clic
    if (this.cargando()) return;

    const nombreActual = this.etiquetaModel().nombre.trim();
    
    // Validación de contenido
    if (nombreActual === '') {
        this.botonGuardarPulsado = true;
        return;
    }

    // Bloqueamos el proceso
    this.cargando.set(true);

    this.etiquetasServicio.alta({ nombre: nombreActual }).subscribe({
        next: (res: any) => {
            if (res.resultado === 'OK') {
                this.mostrarAlerta = true;
                this.etiquetaModel.set({ nombre: '' });
                this.botonGuardarPulsado = false;
                setTimeout(() => this.mostrarAlerta = false, 3000);
            }
        },
        error: (err) => console.error(err),
        complete: () => {
            // Desbloqueamos después de que termine la petición
            this.cargando.set(false);
        }
    });
}
}