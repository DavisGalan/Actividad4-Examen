import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { Page404Component } from './componentes/page404/page404.component';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { RegistroEmpresaComponent } from './componentes/registro-empresa/registro-empresa.component';
import { RegistroTipoComponent } from './componentes/registro-tipo/registro-tipo.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { MenuAdminComponent } from './componentes/menu-admin/menu-admin.component';
import { MenuAdmin2Component } from './componentes/menu-admin2/menu-admin2.component';
import { MenuAdmin1Component } from './componentes/menu-admin1/menu-admin1.component';
import { Login2Component } from './componentes/login2/login2.component';
import { TarjetasAdminComponent } from './componentes/tarjetas-admin/tarjetas-admin.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { CookieService } from 'ngx-cookie-service';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    RegistroComponent,
    PagoComponent,
    Page404Component,
    MensajesComponent,   
    AdministradorComponent,
    RegistroEmpresaComponent,
    RegistroTipoComponent,    
    TarjetasComponent,
    MenuAdminComponent,
    MenuAdmin2Component,
    MenuAdmin1Component,
    Login2Component,
    TarjetasAdminComponent,
    PerfilComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
   
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
