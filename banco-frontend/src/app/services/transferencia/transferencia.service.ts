import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(private http: HttpClient) { }

  urlApi : string = "http://localhost:8080/transferencia"

  //traer todas las transferencias
  obtenerTransferencias(){
    return this.http.get(this.urlApi);
  }

  //obtener transferencia por id
  obtenerTransferenciaPorId(id: number){
    return this.http.get(`${this.urlApi}/${id}`);
  }

  //obtener transferencias enviadas   http://localhost:8080/transferencia/transferencia-ordenante/4
  obtenerTransferenciasPorIdOrdenante(idOrdenante: number){
    return this.http.get(`${this.urlApi}/ordenante/${idOrdenante}`);
   
  }
  
  //obtener transferencias recibidas
  obtenerTransferenciasPorIdBeneficiario(idBeneficiario: number){
    return this.http.get(`${this.urlApi}/beneficiario/${idBeneficiario}`);

  }

  //guardar una transferencia
  guardar(transferencia: any){
    return this.http.post(this.urlApi, transferencia);
  }
}
