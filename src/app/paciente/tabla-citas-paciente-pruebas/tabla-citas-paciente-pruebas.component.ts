import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


interface Paciente {
    fecha: number;
    medico: string;
    servicio: number;
    hora: string;
  }

@Component({
  selector: 'app-tabla-citas-paciente-pruebas',
  templateUrl: './tabla-citas-paciente-pruebas.component.html',
  styleUrls: ['./tabla-citas-paciente-pruebas.component.css']
})
export class TablaCitasPacientePruebasComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  citaPacientes: Paciente[] = [
    { fecha: 20, medico: 'Juan', servicio: 25, hora: '9:00' },
    { fecha: 20, medico: 'Pere', servicio: 25, hora: '9:00' },
    { fecha: 20, medico: 'Pepe', servicio: 25, hora: '9:00' },
    // Puedes agregar más objetos según tus necesidades
  ];

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      searching: false,
      pagingType: 'full_numbers',
    };

    this.dtTrigger.next(null);
  }
}
