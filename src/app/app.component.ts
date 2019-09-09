import { Component, AfterViewInit } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'swiper-test';
  swiper;
  slides = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map(x => 'Slide ' + x);

  ngAfterViewInit() {

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
        renderSlide: (slide, index) => '<div class="swiper-slide"><div>' + slide + '</div><div>No. ' + (index + 1) + '</div></div>'
      }
    });

  }
}
