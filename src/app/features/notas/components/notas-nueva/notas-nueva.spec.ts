import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasNueva } from './notas-nueva';

describe('NotasNueva', () => {
  let component: NotasNueva;
  let fixture: ComponentFixture<NotasNueva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotasNueva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasNueva);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
