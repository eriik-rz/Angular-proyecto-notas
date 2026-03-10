import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasConsultaPorNota } from './notas-consulta-por-nota';

describe('NotasConsultaPorNota', () => {
  let component: NotasConsultaPorNota;
  let fixture: ComponentFixture<NotasConsultaPorNota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotasConsultaPorNota]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasConsultaPorNota);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
