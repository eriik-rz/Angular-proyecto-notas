import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetasNueva } from './etiquetas-nueva';

describe('EtiquetasNueva', () => {
  let component: EtiquetasNueva;
  let fixture: ComponentFixture<EtiquetasNueva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtiquetasNueva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtiquetasNueva);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
