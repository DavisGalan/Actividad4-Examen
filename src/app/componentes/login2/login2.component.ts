import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';


declare var swal:any
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  constructor(private peticion:PeticionService, private router:Router) { }

  email:string = ""
  password:string = ""
  datos:any[] = []
  respuestaLogin:any

  ngOnInit(): void {
  }

  iniciar(){

    var post = {
      host:this.peticion.urlLocal,
      path:'/login2',
      payload:{
        email:this.email,
        password:this.password
      }
    }
    this.peticion.Post(post.host + post.path, post.payload).then((res:any) => {
      console.log(res)
      this.respuestaLogin = res
      if(res.state == true){
        swal("Bienvenido Transportador!", "Se logueó correctamente!", "success");
        setTimeout(() => {
          this.router.navigate(['/administrador'])
        }, 2000);
        
      }else{
        swal("Ocurrio un error!", "Revise los datos ingresados!", "error");
      }

    })
  }

}
