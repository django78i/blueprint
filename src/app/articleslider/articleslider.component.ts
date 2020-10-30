import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from 'ngx-useful-swiper';
import { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-articleslider',
  templateUrl: './articleslider.component.html',
  styleUrls: ['./articleslider.component.scss']
})
export class ArticlesliderComponent implements OnInit {
  @ViewChild('usefulSwiper',{static: false }) usefulSwiper: SwiperComponent;

  config: SwiperOptions = {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 20
  };

      //articles
      articles = [
        {
            auteur:'G.Moustaki',
            titre: "Qu'est ce qu'une expérience?"
        },
        {
            auteur:'G.Moustaki',
            titre: "Qu'est ce qu'une expérience?"
        },
        {
            auteur:'G.Moustaki',
            titre: "Qu'est ce qu'une expérience?"
        }

    ]



  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.usefulSwiper.swiper.slideNext();
  }

  prev() {
    this.usefulSwiper.swiper.slidePrev();
  }

}
