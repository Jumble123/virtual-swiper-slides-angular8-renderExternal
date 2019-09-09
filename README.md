# virtual-swiper-slides-angular8
Basic example of creating virtual slides with Swiper within an Angular 8 Application

Notice that:
<ul>
  <li><a href="src/app/app.component.ts">src/app/app.component.ts</a> includes <code>declare var Swiper: any;</code> (and <strong>not</strong> <code>import { Swiper } from 'swiper';</code>)</li>
  <li>there is no need of a function to handle clicks on the <code>.swiper-button-prev</code> and <code>.swiper-button-next</code> divs within <a href="src/app/app.component.ts">src/app/app.component.ts</a></li>
  <li>no <code>.swiper-slide</code> div is specified within <a href="src/app/app.component.html">src/app/app.component.html</a></li>
  <li>the <code>renderSlide()</code> method in <a href="src/app/app.component.ts">src/app/app.component.ts</a> sets the swiper-slide class on the div it returns
  <li>the <code>.swiper-slide</code> styles are specified in <a href="src/styles.scss">src/styles.scss</a> (not <a href="src/app/app.component.scss">src/app/app.component.scss</a>)</li>
</ul>
