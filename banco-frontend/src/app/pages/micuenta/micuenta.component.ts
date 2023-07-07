import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.component.html',
  styleUrls: ['./micuenta.component.css']
})
export class MicuentaComponent {
  cliente: any = null; //objeto nulo
  passw: any
  mensajes: any[] = [];
  constructor(private clienteService: ClienteService, private snackBar: MatSnackBar){
  }

  ngOnInit():void {
//inicializamos el objeto cliente 
    this.cliente=this.clienteService.leerSession(); //contenia un cliente con atributos
    

  }
    openSnackBar(message: string, action: string){
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

   

    

}
