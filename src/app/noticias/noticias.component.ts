import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SwiperModule, SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

import { NoticiasService } from '../noticias.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  public noticias = []; 
  
constructor( private noticiasServices: NoticiasService, private router: Router ) {}
  
  ngOnInit() {
    this.getNews();
  }

  ngAfterViewInit () {}

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    speed: 2000,
    keyboard: true,
    observer: true,
    navigation: true,
    pagination: true,
    breakpoints : {
        1120: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 1
        }
    }
  };
  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  afterChange(e) {
    console.log('afterChange', e);
  }

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
