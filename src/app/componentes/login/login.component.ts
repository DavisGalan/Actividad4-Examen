import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';


declare var swal:any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private peticion:PeticionService, private router:Router) { }
  // email:string = ""
  // password:string = ""
  // datos:any[] = []
  respuestaLogin:any
 
  ngOnInit(): void {
  console.log(this.misdatos)
 
   
  }

  misdatos:any[] = [];
  //datos:any[] = [];
  // cedula: string = "" 
  nombre:string = ""
  apellido:string = "" 
  email:string = "" 
  //telefono:string = ""   
  password:string = ""
  //cpassword:string = ""

  // failCedula:string = ""
  failNombre:string = ""
  failApellido:string = ""  
  failEmail:string = ""
  //failTelefono:string = ""  
  failPassword:string = ""
  //failCPassword:string = ""

  iniciar(){
    localStorage.setItem  ('inicio', '1')

    this.misdatos.push(this.email)   

    var post = {
      host:this.peticion.urlLocal,
      path:'/usuario/iniciarSesion',
      payload:{
        email:this.email,
        password:this.password
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any) => {     
      if(res.state == true){    
        this.misdatos = res
        console.log(this.misdatos)    
        swal("Bienvenido Conductor!", "Se logueó correctamente!", "success");
        setTimeout(() => {
          
          this.router.navigate(['/home'])
        }, 2000); 
        
      }else{
        swal("Ocurrió un error!", "Revise los datos ingresados!", "error");
      }
    })
  
  }


  
//   UsuarioLogueado(){   
//     var post = {
//       host:this.peticion.urlLocal,
//       path:'/usuario/listar',
//       payload:{
        
//       }
//     }
//     this.peticion.Post(post.host + post.path, post.payload).then((res:any) => {
//       console.log(res)
//       this.misdatos = res.usuario      
//     })
// }


}
