# virtual-swiper-slides-angular8-renderExternal
Basic example of creating virtual slides with Swiper within an Angular 8 Application

This is like the repo at <a href="https://github.com/Jumble123/virtual-swiper-slides-angular8">https://github.com/Jumble123/virtual-swiper-slides-angular8</a> but uses Swiper's <code>renderExternal()</code> function instead of <code>renderSlide()</code>. A couple of other difference to note:

<ul>
  <li><code>this.swiper</code> is initialized in <code>ngOnInit</code> (instead of <code>ngAfterViewInit</code>)</li>
  <li>the <code>.swiper-slide</code> styles work within <a href="src/app/app.component.scss">src/app/app.component.scss</a> (so have been moved from <a href="src/styles.scss">src/styles.scss</a>).
</ul>

See the commit at <a href="commit/a5a99e6251245bf4556ec61dd8b2b92d88efffdc">commit/a5a99e6251245bf4556ec61dd8b2b92d88efffdc</a> for the differences.
