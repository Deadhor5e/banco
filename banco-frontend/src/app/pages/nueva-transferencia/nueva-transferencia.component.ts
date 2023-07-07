import { Component , OnInit} from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: './nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.css']
})
export class NuevaTransferenciaComponent implements OnInit{

  nuevaTransferencia: any ={
    ordenante: {
      id: null,
    },
    beneficiario: { 
      id: null,
    },
    concepto: '',
    importe: 0,
  };

  ordenante: any = null;

  feedback: string = "";

  constructor(private transferenciaService: TransferenciaService, private clienteService: ClienteService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.ordenante = this.clienteService.leerSession();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, // Duración en milisegundos
    });
  }

  transferenciaAdd() {
    if (this.ordenante) {
      this.nuevaTransferencia.ordenante.id = this.ordenante.id;
      this.transferenciaService.
      guardar(this.nuevaTransferencia)
      .subscribe((transferenciaGuardada) => {
          console.log(transferenciaGuardada);
          //implementar Snackbar transferencia enviada
          this.openSnackBar("Se ha enviado la transferencia","OK");
        },
        (error)=>{
          //implementar SnackBar transferencia no enviada
          this.openSnackBar("No se ha podido enviar la transferencia","OK");
          console.log(error);
        }
        );
    }
  }
}
