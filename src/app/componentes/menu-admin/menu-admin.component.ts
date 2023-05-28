import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';


interface sidebarToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})

export class MenuAdminComponent implements OnInit {

 @Output() onToggleSideNav: EventEmitter<sidebarToggle> = new EventEmitter();
collapsed = false;
screenWidth = 0;
navData = navbarData; 
 

toggleCollapse():void{
  this.collapsed = !this.collapsed;
  this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
}
closeSidebar():void{
  this.collapsed = false;
  this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
}

  constructor() { }
  
  
  ngOnInit(): void {
    
  }
  mostrar(){
  document.getElementById('boton1').style.display = 'block';
  
 }
  

}
