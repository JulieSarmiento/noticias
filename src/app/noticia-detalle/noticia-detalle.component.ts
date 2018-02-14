import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.scss']
})
export class NoticiaDetalleComponent implements OnInit {
public noticiaOnly = this.noticiasServices.noticiaToSend;

  constructor(private route: ActivatedRoute, private location: Location, private noticiasServices: NoticiasService ) { }

  ngOnInit() {
    console.log(this.noticiasServices.noticiaToSend);
    if(!this.noticiasServices.noticiaToSend ){
      this.location.back()
    }
  }

  goBack(): void {
    this.location.back();
  }
}
