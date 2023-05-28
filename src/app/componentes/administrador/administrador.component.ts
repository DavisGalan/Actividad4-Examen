import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from 'src/app/servicios/mensajeria.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

interface SidenavToggle{
  screenWidth: number;
  collapsed: boolean;
}

declare var $:any
@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  // @Input() tarjeta: Tarjeta;
  // @Input() listaTarjetas: Tarjeta[];

  isSideNavCollapsed = false;
  ScreenWidth = 0;

  onToggleSidenav(data: SidenavToggle): void{
    this.ScreenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;

  }


  constructor(private peticion:PeticionService, private msg:MensajeriaService) { }

  ngOnInit(): void {
  }

  datos:any[] = [];
  id:string = ""
  cedula:string = ""
  nombre:string = ""
  apellido:string = ""
  email:string = ""
  telefono:string = ""  
  password:string = ""
  cpassword:string = ""
  idselecionado : string = ""

  configCedula = ""
  configNombre = ""
  configApellido = ""
  configEmail = ""
  configTelefono = ""
  

 listar(){   
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuario/listar',
      payload:{
        
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any) => {
      console.log(res)
      this.datos = res.usuario     
      
    })
    
  }

  registro(){
    
    
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuario/registro',
      payload:{
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
        this.listar()
        this.nuevo()
        this.msg.agregarMsg('primary',res.Mensaje,5000)
      }else{
        this.msg.agregarMsg('danger',res.mensaje,5000)
      }
      
    })
    
  }
  
  eliminar(myid:string){
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuario/eliminarUsuario',
      payload:{
       id: myid
        
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any) => {
      console.log(res)
      if(res.state == true){
        this.msg.agregarMsg('success', res.mensaje, 5000)
        this.listar()
      }
      else{
        this.msg.agregarMsg('danger', res.mensaje, 5000)
        this.listar()
      }      
    })    
  }

  editar(id:string){

    $('#editarDatos').modal('show')

    this.idselecionado = id
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuario/actualizado',
      payload:{
       id:id
        
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any) => {
      console.log(res)
      if(res.state == true){
       this.configCedula = res.data[0].cedula
       this.configNombre = res.data[0].nombre
       this.configApellido = res.data[0].apellido
       this.configEmail = res.data[0].email
       this.configTelefono= res.data[0].telefono       

      }      
    })
  }

  nuevo(){
    this.cedula = ""
    this.nombre = ""
    this.apellido = ""
    this.email = ""
    this.telefono = ""    
    
    this.password = ""
    this.cpassword = ""
    this.idselecionado = ""

    this.configCedula = ""
    this.configNombre = ""
    this.configApellido = ""
    this.configEmail = ""
    this.configTelefono = ""    
  }

  editarDatos(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuario/actualizar',
      payload:{
        id: this.idselecionado,
        cedula: this.configCedula,
        nombre: this.configNombre,
        apellido: this.configApellido,
        email: this.configEmail,
        telefono: this.configTelefono,
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any) => {
      console.log(res)
      if(res.state == true){
        
        this.msg.agregarMsg('success', res.mensaje, 5000)
        this.listar()
        this.nuevo()
        $('#editarDatos').modal('hide')
        
      }
      else{
        this.msg.agregarMsg('danger', res.mensaje, 5000)
      }  
          
    })
  }

}
