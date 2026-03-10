import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasEdicion } from './notas-edicion';

describe('NotasEdicion', () => {
  let component: NotasEdicion;
  let fixture: ComponentFixture<NotasEdicion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotasEdicion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasEdicion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
