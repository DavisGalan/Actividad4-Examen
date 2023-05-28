import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from 'src/app/servicios/mensajeria.service';
import { PeticionService } from 'src/app/servicios/peticion.service';
import { Router } from '@angular/router';
import { Tarjeta } from '../models/Tarjeta';

declare var $: any
declare var swal:any
@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  tarjetaElegida: Tarjeta;  

  failTipoVehiculo:string = ""
  failTipoEjes:string = ""
  failLugarCargue:string = ""
  failLugarDestino:string = "" 
  

  constructor(private peticion:PeticionService, private mensaje:MensajeriaService, private router:Router) { }

  ngOnInit(): void {
    this.CargarTodas()
  }

  misdatos: any[] = [];

  tipoVehiculo: string = ""
  tipoEjes: string = ""
  lugarCargue: string = ""
  lugarDestino: string = ""
  peso: number = 1
  idseleccionado: string = ''

  CargarTodas() {
    var post = {
      host: this.peticion.urlLocal,
      path: '/tarjetas/CargarTodas',
      payload: {
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res: any) => {
      console.log(res)
      this.misdatos = res.documentos
    })
  }

  validar(){
    this.failTipoVehiculo = ""
    if(this.tipoVehiculo == "" || this.tipoVehiculo == null || this.tipoVehiculo == undefined){
      this.failTipoVehiculo = "*" 
    }
    this.failTipoEjes = ""
    if(this.tipoEjes == "" || this.tipoEjes == null || this.tipoEjes == undefined){
      this.failTipoEjes = "*" 
    }
    this.failLugarCargue = ""
    if(this.lugarCargue == "" || this.lugarCargue == null || this.lugarCargue == undefined){
      this.failLugarCargue = "*"
    }
    this.failLugarDestino = ""
    if(this.lugarDestino == "" || this.lugarDestino == null || this.lugarDestino == undefined){
      this.failLugarDestino = "*"
    }    
    if( this.peso == null || this.peso == undefined){
     
    }    
  }

  Guardar() {
    var post = {
      host: this.peticion.urlLocal,
      path: '/tarjetas/Guardar',
      payload: {
        tipoVehiculo: this.tipoVehiculo,
        tipoEjes: this.tipoEjes,
        lugarCargue: this.lugarCargue,
        lugarDestino: this.lugarDestino,
        peso: this.peso
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any) => {
      console.log(res)
      if(res.state == true){
        this.mensaje.agregarMsg('primary',res.Mensaje,5000)
        swal("Good job!", "Viaje enviado correctamente!", "success");
        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 2000);
      }else{
        this.mensaje.agregarMsg('danger',res.mensaje,5000)
      }
      
    })

  }
  // Eliminar(myid: string) {
  //   var post = {
  //     host: this.peticion.urlLocal,
  //     path: '/tarjetas/Eliminar',
  //     payload: {
  //       id: myid
  //     }
  //   }    
  //   this.peticion.Post(post.host + post.path, post.payload).then((res: any) => {
  //     console.log(res)
  //     if (res.state == true) {
  //       this.mensaje.agregarMsg('primary',res.Mensaje,5000)
  //       swal("Good job!", "Viaje eliminado correctamente!", "success");
  //       this.CargarTodas()
  //     }
  //     else {
  //       this.mensaje.agregarMsg('danger',res.mensaje,5000)
  //     }
  //   })
  // }
  // Editar(myId: string) {

  //   this.idseleccionado = myId
  //   var post = {
  //     host: this.peticion.urlLocal,
  //     path: '/tarjetas/CargarId',
  //     payload: {
  //       id: myId
  //     }
  //   }
  //   this.peticion.Post(post.host + post.path, post.payload).then((res: any) => {
  //     console.log(res)
  //     if (res.state == true) {
  //       this.tipoVehiculo = res.documentos[0].tipoVehiculo
  //       this.tipoEjes = res.documentos[0].tipoEjes
  //       this.lugarCargue = res.documentos[0].lugarCargue
  //       this.lugarDestino = res.documentos[0].lugarDestino
  //       this.peso = res.documentos[0].peso
  //       $('#modaltarjetas').modal('show')
  //     }
  //   })
  // }
  // Nuevo() {
  //   $('#modaltarjetas').modal('show')
  //   this.Limpiar()
  // }
  // Limpiar() {

  //   this.tipoVehiculo = ""
  //   this.tipoEjes = ""
  //   this.lugarCargue = ""
  //   this.lugarDestino = ""
  //   this.peso = 1
  //   this.idseleccionado = ""
  // }
  // Actualizar() {
  //   var post = {
  //     host: this.peticion.urlLocal,
  //     path: '/tarjetas/Actualizar',
  //     payload: {
  //       id: this.idseleccionado,
  //       tipoVehiculo: this.tipoVehiculo,
  //       tipoEjes: this.tipoEjes,
  //       lugarCargue: this.lugarCargue,
  //       lugarDestino: this.lugarDestino,
  //       peso: this.peso
  //     }
  //   }
  //   this.peticion.Post(post.host + post.path, post.payload).then((res: any) => {
  //     console.log(res)
  //     if (res.state == true) {
  //       this.mensaje.agregarMsg('primary',res.Mensaje,5000)
  //       swal("Good job!", "Registro Actualizado!", "success");
  //       this.CargarTodas()
  //       this.Limpiar()
  //       $('#modaltarjetas').modal('hide')
  //     }
  //     else {
  //       this.mensaje.agregarMsg('danger',res.mensaje,5000)
  //     }
  //   })
  // }
  elegirViaje(tarjeta: Tarjeta): void {
    this.tarjetaElegida = tarjeta;
    console.log(this.tarjetaElegida);
  }
  
}
