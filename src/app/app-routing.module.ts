import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './componentes/contact/contact.component';
import { AboutComponent } from './componentes/about/about.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { Page404Component } from './componentes/page404/page404.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { RegistroEmpresaComponent } from './componentes/registro-empresa/registro-empresa.component';
import { RegistroTipoComponent } from './componentes/registro-tipo/registro-tipo.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { MenuAdminComponent } from './componentes/menu-admin/menu-admin.component';
import { MenuAdmin2Component } from './componentes/menu-admin2/menu-admin2.component';
import { MenuAdmin1Component } from './componentes/menu-admin1/menu-admin1.component';
import { Login2Component } from './componentes/login2/login2.component';
import { TarjetasAdminComponent } from './componentes/tarjetas-admin/tarjetas-admin.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'registro-tipo', component: RegistroTipoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registro-empresa', component: RegistroEmpresaComponent },
  { path: 'pago', component: PagoComponent },
  { path: 'administrador', component: AdministradorComponent }, 
  { path: 'tarjetas', component: TarjetasComponent },
  { path: 'tarjetas-admin', component: TarjetasAdminComponent },
  { path: 'menu-admin', component: MenuAdminComponent },
  { path: 'menu-admin1', component: MenuAdmin1Component }, 
  { path: 'menu-admin2', component: MenuAdmin2Component },
  { path: 'login2', component: Login2Component },
  { path: '**', component: Page404Component, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
