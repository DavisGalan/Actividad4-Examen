import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  // @ViewChild('asTitle') title: ElementRef;
  // @ViewChild('asImage') image: ElementRef;
  // public user: RoleUser;
  // public data: Array<DataModel> = [];

  //   public user1 = {
  //     scopes: ['write'],
  //     name: 'Soy Escritor'
  //   };

  //   public user2 = {
  //     scopes: ['read'],
  //     name: 'Soy Lector'
  //   };

  //   public user3 = {
  //     scopes: ['write', 'read'],
  //     name: 'Soy Admin'
  //   };

  constructor() { }

  ngOnInit(): void {
    // this.user = {
    //   scopes: [],
    //   name: 'Sin role'
    // };

    // this.data = [
    //   {
    //     text: '',
    //     role: ['write'],
    //     url: 'https://www.google.com/'
    //   },
    //   {
    //     text: '',
    //     role: ['read'],
    //     url: 'https://www.facebook.com/'
    //   },   
    // ];
  }
}
