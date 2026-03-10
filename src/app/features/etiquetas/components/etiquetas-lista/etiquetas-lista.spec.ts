import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetasLista } from './etiquetas-lista';

describe('EtiquetasLista', () => {
  let component: EtiquetasLista;
  let fixture: ComponentFixture<EtiquetasLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtiquetasLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtiquetasLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
