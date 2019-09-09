# virtual-swiper-slides-angular8
Basic example of creating virtual slides with Swiper within an Angular 8 Application

Notice that:
<ul>
  <li>there is no need of a function to handle clicks on the .swiper-button-prev and .swiper-button-next divs within <a href="src/app/app.component.ts">src/app/app.component.ts</a></li>
  <li>no .swiper-slide div is specified within <a href="src/app/app.component.html">src/app/app.component.html</a></li>
  <li>the renderSlide() method in <a href="src/app/app.component.ts">src/app/app.component.ts</a> sets the swiper-slide class on the div it returns
  <li>the .swiper-slide styles are specified in <a href="src/styles.scss">src/styles.scss</a> (not <a href="src/app/app.component.scss">src/app/app.component.scss</a>)</li>
</ul>
