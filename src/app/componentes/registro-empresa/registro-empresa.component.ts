import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajeriaService } from 'src/app/servicios/mensajeria.service';
import { PeticionService } from 'src/app/servicios/peticion.service';


declare var swal:any
@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})

export class RegistroEmpresaComponent implements OnInit {
 
  nit: string = ""
  razonSocial:string = ""
  sucursal:string = "" 
  nombreEmpleado:string = ""
  apellidoEmpleado:string = ""  
  telefono:string = ""
  email:string = ""  
  password:string = ""
  cpassword:string = ""

  failNit:string = ""
  failRazonSocial:string = ""
  failSucursal:string = ""
  failnombreEmpleado:string = ""
  failApellidoEmpleado:string = ""
  failTelefono:string =""  
  failEmail:string = ""  
  failPassword:string = ""
  failCPassword:string = ""


  constructor(private peticion:PeticionService, private mensaje:MensajeriaService, private router:Router) { }

  ngOnInit(): void {
  }

  validar(){

    this.failNit = ""
    if(this.nit == "" || this.nit == null || this.nit == undefined){
      this.failNit = "*"
    }   
    this.failRazonSocial = ""
    if(this.razonSocial == "" || this.razonSocial == null || this.razonSocial == undefined){
      this.failRazonSocial = "*"
    }
    this.failSucursal = ""
    if(this.sucursal == "" || this.sucursal == null || this.sucursal == undefined){
      this.failSucursal = "*"
    }
    this.failnombreEmpleado = ""
    if(this.nombreEmpleado == "" || this.nombreEmpleado == null || this.nombreEmpleado == undefined){
      this.failnombreEmpleado 
    }
    this.failApellidoEmpleado = ""
    if(this.apellidoEmpleado == "" || this.apellidoEmpleado == null || this.apellidoEmpleado == undefined){
      this.failApellidoEmpleado = "*"
    }
    this.failTelefono = ""
    if(this.telefono == "" || this.telefono == null || this.telefono == undefined){
      this.failTelefono = "*"
    }
    this.failEmail = ""
    if(this.email == "" || this.email == null || this.email == undefined){
      this.failEmail = "*"
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
      path:'  ',
      payload:{
        nit:this.nit,
        razonSocial:this.razonSocial,
        sucursal:this.sucursal,
        nombreEmpleado:this.nombreEmpleado,
        apellidoEmpleado:this.apellidoEmpleado,
        telefono:this.telefono,
        email:this.email,               
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
          this.router.navigate(['/login2'])
        }, 2000);
      }else{
        this.mensaje.agregarMsg('danger',res.mensaje,5000)
      }
      
    })
    
  }

}



