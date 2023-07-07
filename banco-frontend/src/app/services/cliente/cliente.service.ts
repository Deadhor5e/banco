import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  urlApi: string = "http://localhost:8080/cliente"

  constructor(private http: HttpClient) { }

  obtenerClientes(){
    return this.http.get(this.urlApi);
  }

//hacemos peticion al endpoint de login ->http://localhost:8080/cliente/login?correo=alonso@gmail.com&password=1234
  login(mail: string, passw: string){
    const url = `${this.urlApi}/login?correo=${mail}&password=${passw}`;
    return this.http.get(url); //return cliente o null

  }

  //RECOGEMOS EL CLIENTE LOGEADO
  crearSesion(clienteLogueado: any){
    const clienteJSON = JSON.stringify(clienteLogueado)
    sessionStorage.setItem("sesion", clienteJSON);
  }

  leerSession(){
    const clienteJSON = sessionStorage.getItem("sesion");
    if(clienteJSON) {
    const clienteLogueado = JSON.parse(clienteJSON);
    return clienteLogueado;
    }
    return null;
  
  }

  //CERRAR SESION
  cerrarSesion(){
    sessionStorage.removeItem("sesion");
  }

  //addCliente 
  guardarCliente(cliente: any) {
    return this.http.post(this.urlApi, cliente);
  }
}
