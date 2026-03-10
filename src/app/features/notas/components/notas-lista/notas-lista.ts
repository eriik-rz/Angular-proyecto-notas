import { Component, inject, signal, OnInit } from '@angular/core';
import { NotasService } from '../../../../core/services/notas-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-notas-lista',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './notas-lista.html',
  styleUrl: './notas-lista.css',
})
export class NotasLista implements OnInit {
  private notasServicio = inject(NotasService);
  
  // Signal para almacenar la lista de notas
  notas = signal<any[]>([]); 
  mostrarBannerBorrado = signal(false);

  ngOnInit() {
    this.cargarNotas();
  }

  cargarNotas() {
    this.notasServicio.recuperarTodas().subscribe(datos => {
      this.notas.set(datos);
    });
  }

  borrarNota(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar esta nota?')) {
      this.notasServicio.baja(id).subscribe((res: any) => {
        if (res.resultado === 'OK') {
          this.mostrarBannerBorrado.set(true);
          this.cargarNotas(); // Recargamos la lista
          setTimeout(() => this.mostrarBannerBorrado.set(false), 3000);
        }
      });
    }
  }
}