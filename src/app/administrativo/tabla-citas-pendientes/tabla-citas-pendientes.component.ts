import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministrativoServiceService } from '../administrativo-service.service';

@Component({
  selector: 'app-tabla-citas-pendientes',
  templateUrl: './tabla-citas-pendientes.component.html',
  styleUrls: ['./tabla-citas-pendientes.component.css']
})
export class TablaCitasPendientesComponent implements OnInit {

  idPaciente: string = '';

  @Input() pendienteRealizada:string = '';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  citas: any[] = [];
  nombrePaciente: string = '';
  sipPaciente: string = '';
  apellido: string = '';
  servicio: string = '';
  hora: string = '';
  idCita: string ='';
  estado: string = ''; 
  medico: string = '';
  resultado:any;

  constructor(private route: ActivatedRoute, private router: Router, private administrativoService: AdministrativoServiceService) {}

  ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'numbers',
        searching: false,
        lengthChange: false,
        language: {
          url: "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json",
          emptyTable: '',
        },
        info: false,
      }
    

    this.route.params.subscribe((params) => {
      this.idPaciente = params['id_paciente'];
      this.obtenerDatosPaciente(this.idPaciente);
      this.obtenerDatosCita(this.idPaciente);
    });
  }

  obtenerDatosPaciente(idPaciente: string): void {
    this.administrativoService.obtenerPaciente(idPaciente).subscribe(
      (response) => {
        this.nombrePaciente = response.usuario.nombre;
        this.sipPaciente = response.sip;
        this.apellido = response.usuario.apellido1;
      },
      (error) => {
        console.error('Error al obtener los datos del paciente:', error);
      }
    );
  }

  obtenerDatosCita(idPaciente: string): void {
    this.administrativoService.obtenerCitas(idPaciente, this.estado).subscribe(
      (response) => {
       console.log(response);
       this.citas = response;
       console.log(this.citas);
       
        // this.citas = response.citas.filter((cita: any) => cita.estado === 'pendiente').map((cita: any) => ({
        //   ...cita,
        //   nombreMedico: cita.nombre_medico,
        //   nombreRadiologo: cita.nombre_radiologo,
          
        // }));

        
        // this.dtTrigger.next(null);
        this.resultado = response
      },
      (error) => {
        console.error('Error al obtener los datos de la cita:', error);
      }
      
    );
  }

  eliminarCita(idCita: string) {
    this.administrativoService.eliminarCita(idCita).subscribe(() => {
      // Si la eliminación fue exitosa, actualiza la lista de citas
      this.obtenerDatosCita(this.idPaciente);
    });
    console.log(idCita);
  }

  detallesCita(idMedico: string, idServicio: string, hora: string, fecha:string, idCita: string, idPaciente: string) {
    this.router.navigate(['app/administrativo/detalles-citas', idMedico, idServicio, hora,fecha, idCita, idPaciente]);
  }

  modificarCita(idCita: string, idPaciente:string): void {
    const url = `/app/administrativo/modificar-citas/${idCita}?id_usuario_paciente=${idPaciente}`;
    this.router.navigateByUrl(url);
    console.log(`Click sobre`);
    console.log(url);
  }

}
