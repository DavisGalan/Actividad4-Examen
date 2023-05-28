import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajeriaService } from 'src/app/servicios/mensajeria.service';
import { PeticionService } from 'src/app/servicios/peticion.service';


declare var swal:any
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  cedula: string = "" 
  nombre:string = ""
  apellido:string = "" 
  email:string = ""
  telefono:string = ""   
  password:string = ""
  cpassword:string = ""

  failCedula:string = ""
  failNombre:string = ""
  failApellido:string = "" 
  failEmail:string = "" 
  failTelefono:string = ""   
  failPassword:string = ""
  failCPassword:string = ""

  constructor(private peticion:PeticionService, private mensaje:MensajeriaService, private router:Router) { }

  ngOnInit(): void {
  }

  validar(){
    this.failCedula = ""
    if(this.cedula == "" || this.cedula == null || this.cedula == undefined){
      this.failCedula = "*" 
    }
    this.failNombre = ""
    if(this.nombre == "" || this.nombre == null || this.nombre == undefined){
      this.failNombre = "*"
    }
    this.failApellido = ""
    if(this.apellido == "" || this.apellido == null || this.apellido == undefined){
      this.failApellido = "*"
    }
    this.failEmail = ""
    if(this.email == "" || this.email == null || this.email == undefined){
      this.failEmail = "*"
    }
    this.failTelefono = ""
    if(this.telefono == "" || this.telefono == null || this.telefono == undefined){
      this.failTelefono = "*"
    }
        
    this.failPassword = ""
    if(this.password == "" || this.password == null || this.password == undefined){
      this.failPassword = "*"
    }
    this.failCPassword = ""
    if(this.cpassword == "" || this.cpassword == null || this.cpassword == undefined){
      this.failCPassword = "*"
    }
  }

  registrar(){
    
    this.validar()
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuario/registro',
      payload:{
        cedula:this.cedula,
        nombre:this.nombre,
        apellido:this.apellido,
        email:this.email,
        telefono:this.telefono,        
        password:this.password,
        cpassword:this.cpassword
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any) => {
      console.log(res)
      if(res.state == true){
        this.mensaje.agregarMsg('primary',res.Mensaje,5000)
        swal("Muy Bien!", "Registro creado correctamente!", "success");
        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 2000);
      }else{
        this.mensaje.agregarMsg('danger',res.mensaje,5000)
      }
      
    })
    
  }

  listar(){
    
    this.validar()
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuario/listar',
      payload:{
        cedula:this.cedula,
        nombre:this.nombre,
        apellido:this.apellido,
        email:this.email,
        telefono:this.telefono,        
        password:this.password,
        cpassword:this.cpassword
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any) => {
      console.log(res)
      if(res.state == true){
        this.mensaje.agregarMsg('primary',res.Mensaje,5000)
        swal("Muy Bien!", "Registro creado correctamente!", "success");
        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 2000);
      }else{
        this.mensaje.agregarMsg('danger',res.mensaje,5000)
      }
      
    })
    
  }
  

}
