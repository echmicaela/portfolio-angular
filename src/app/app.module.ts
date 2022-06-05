import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { EncabezadoComponent } from './components/miniComponents/encabezado/encabezado.component';
import { BotonComponent } from './components/miniComponents/boton/boton.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { PortfolioDataService } from './services/portfolio/portfolio-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    SobremiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    IdiomasComponent,
    PortfolioComponent,
    ContactoComponent,
    CopyrightComponent,
    EncabezadoComponent,
    BotonComponent,
    PortfolioItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PortfolioDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
