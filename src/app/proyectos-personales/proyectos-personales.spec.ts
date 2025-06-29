import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosPersonales } from './proyectos-personales';

describe('ProyectosPersonales', () => {
  let component: ProyectosPersonales;
  let fixture: ComponentFixture<ProyectosPersonales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosPersonales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosPersonales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
