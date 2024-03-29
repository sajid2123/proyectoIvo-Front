import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtenderPacienteComponent } from './atender-paciente.component';

describe('AtenderPacienteComponent', () => {
  let component: AtenderPacienteComponent;
  let fixture: ComponentFixture<AtenderPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtenderPacienteComponent]
    });
    fixture = TestBed.createComponent(AtenderPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
