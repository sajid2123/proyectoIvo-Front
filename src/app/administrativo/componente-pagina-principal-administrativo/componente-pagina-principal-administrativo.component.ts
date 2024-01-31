import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-pagina-principal-administrativo',
  templateUrl: './componente-pagina-principal-administrativo.component.html',
  styleUrls: ['./componente-pagina-principal-administrativo.component.css']
})
export class ComponentePaginaPrincipalAdministrativoComponent {
    citas:string = 'citas-pendientes'; 
    ventana:string = 'Citas';
}
