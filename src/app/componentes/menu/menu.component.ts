import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajeriaService } from 'src/app/servicios/mensajeria.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private peticion:PeticionService) { }

  ngOnInit(): void {  
   this.status()
    if (this.ocultar == '1'){
      this.ocultar = '1'
    }else
    if (this.ocultar == '2'){
      this.ocultar = '2'
    }else
    if (this.ocultar == '3'){
      this.ocultar = '3'    
    }else{
      this.ocultar = '0'
    }
   
   
  //  if(localStorage.getItem('inicio') == '1'){
  //   this.ocultar = '1'
  //  }else
  //  if(localStorage.getItem('inicio') == '2'){
  //   this.ocultar = '2'
  //  }   
  //  else {
  //   this.ocultar = '0'
  //  }
 
  }

  ocultar:string = ''
  status(){    
  
      var post = {
        host:this.peticion.urlLocal,
        path:'/status',
        payload:{         
        }
      }
      this.peticion.Post(post.host + post.path, post.payload).then((res:any) => { 
         console.log(res.perfil.perfi)
        this.ocultar =  res.perfil.perfil
      })
    
    }

    // logout(){
    //   localStorage.setItem('inicio','0')
    //   this.ocultar = '0'
    // }

    logout(){
      localStorage.setItem('inicio','0')
      this.ocultar = '0'
    }
  

  }

//   misdatos:any[] = [];
//   datos:any[] = [];
      
//   apellido:string = "" 
//   email:string = "" 

//   failNombre:string = ""
//   failApellido:string = ""  
//   failEmail:string = ""

//  respuestaLogin(){   
//     var post = {
//       host:this.peticion.urlLocal,
//       path:'/usuario/listar',
//       payload:{
        
//       }
//     }
//     this.peticion.Post(post.host + post.path, post.payload).then((res:any) => {
//       console.log(res)
//       this.datos = res.usuario      
//     })
// }




