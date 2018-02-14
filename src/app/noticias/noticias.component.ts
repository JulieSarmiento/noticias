import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { NoticiasService } from '../noticias.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  public noticias = []; 
  @ViewChild('test') test;
  
constructor( private noticiasServices: NoticiasService, private router: Router ) {}
  
  ngOnInit() {
    this.getNews();
  }

  ngAfterViewInit () {}
  
  verNoticia(noticia): void {
    this.noticiasServices.noticiaToSend = noticia;
    this.router.navigate(['/detail'])
  };

  getNews(): void {
    this.noticiasServices.getNews().subscribe(data => {
        this.noticias = data['articles'];
        console.log(this.noticias);
    });
  }

}
