import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {


  clienteAdd: any = {
    usuario: "",
    correo: "",
    password: "",
    saldo: 0,
    gestor: {
      id: 1,
    }
  }
  saldo: any = null;
  id: any = null;
  feedback: string = "";



  constructor(private clienteService: ClienteService, private router: Router, private snackBar: MatSnackBar) {
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  registrarse() {


    this.clienteService
      .guardarCliente(this.clienteAdd)
      .subscribe((registroGuardado) => {
        //aquí ya tendremos guardad la transferencia
        console.log({ registroGuardado })
        this.openSnackBar("Cliente creado :" + this.clienteAdd.usuario, "OK");
        this.router.navigateByUrl("/auth/login")
      },
        (error) => {
          console.log(error);
          this.openSnackBar("ha ocurrido un problema", "OK");


        });

  }
}




