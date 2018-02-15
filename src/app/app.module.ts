import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { AppComponent } from './app.component';
import { NoticiaDetalleComponent } from './noticia-detalle/noticia-detalle.component';
import { NoticiasService } from './noticias.service';
import { NoticiasComponent } from './noticias/noticias.component';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    NoticiaDetalleComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SwiperModule,
    AppRoutingModule
  ],
  providers: [NoticiasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
