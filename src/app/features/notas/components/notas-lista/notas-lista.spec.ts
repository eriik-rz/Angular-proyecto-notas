import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasLista } from './notas-lista';

describe('NotasLista', () => {
  let component: NotasLista;
  let fixture: ComponentFixture<NotasLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotasLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
