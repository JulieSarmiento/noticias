import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaDetalleComponent } from './noticia-detalle/noticia-detalle.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/noticias', pathMatch: 'full' },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'detail', component: NoticiaDetalleComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}