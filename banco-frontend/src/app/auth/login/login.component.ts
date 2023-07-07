import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mail: string = "";
  password: string = "";
  
  constructor(private clienteService:ClienteService, private router:Router,private  snackBar: MatSnackBar){
  }

  
  openSnackBar(message: string, action: string){
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  logearse(){
    //recoger los inputs
    console.log(this.mail);
    console.log(this.password);

    
    this.clienteService.login(this.mail, this.password).subscribe(
      (cliente) => {
        console.log({cliente});
        if(cliente){
          // si te devuelve objeto cliente -> login correcto
          this.clienteService.crearSesion(cliente)

          this.router.navigateByUrl("/pages/micuenta")
        } else {
          
          this.openSnackBar("Login Incorrecto", "vale")
         
        }
      },
      (error) => {
        console.log({error})
      }
      );

  }

}
