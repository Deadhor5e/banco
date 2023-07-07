import { Component,OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { ClienteService } from 'src/app/services/cliente/cliente.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cliente: any =null;
  constructor(private clienteService:ClienteService, private snackBar: MatSnackBar){}

  

  ngOnInit(): void {
    this.cliente = this.clienteService.leerSession();
  }

  openSnackBar(message: string, action: string){
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

clienteIn():Boolean{
  //si returna cliente es true
  if(this.clienteService.leerSession()!=null){ //returna cliente o null 
    return true;
  }else{
    return false;
  }
}
  
  cerrarSesion(){
    sessionStorage.removeItem("sesion")
    this.openSnackBar("Se ha cerrado sesión", "OK")
    
    }
}
