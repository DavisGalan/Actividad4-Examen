import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-admin2',
  templateUrl: './menu-admin2.component.html',
  styleUrls: ['./menu-admin2.component.css']
})
export class MenuAdmin2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
mostrar(){
 document.getElementById('boton1').style.display = 'block';

 }

}
