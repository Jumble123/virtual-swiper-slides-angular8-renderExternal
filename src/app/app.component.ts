import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper/dist/js/swiper.esm.bundle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'swiper-test';
  swiper;
  slides = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map(x => 'Slide ' + x);
  slidesData = {
    offset: 0,
    from: 0,
    to: 0,
    slides: []
  };

  ngOnInit() {

    this.swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      speed: 400,
      spaceBetween: 100,
      on: {
        init: () => {
          console.log('Swiper has initialized!');
        },
      },
      virtual: {
        slides: this.slides,
        renderExternal: (data) => {
          // console.log(data);
          this.slidesData = data;
        }
      }
    });

  }
}
