import {Component} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent {

  constructor(private meta: Meta) {
      this.meta.removeTag('description');
      this.meta.removeTag('og:title');
      this.meta.removeTag('og:description');
      this.meta.removeTag('og:image');
      this.meta.addTags([
          {name: 'description', content: 'Thỏa thích mua deal hot và khám phá hàng ngàn sản phẩm ' +
          'giảm giá trên Beecow. Mua và bán nhanh chóng chỉ sau vài cú click chuột'},
          {property: 'og:title', content: 'Beecow - Săn deal hot và mua nhiều sản phẩm giảm giá tốt nhất'},
          {property: 'og:description', content: 'Thỏa thích mua deal hot và khám phá hàng ' +
          'ngàn sản phẩm giảm giá trên Beecow. Mua và bán nhanh chóng chỉ sau vài cú click chuột'},
          {property: 'og:image', content: 'https://www.beecow.com/cow.7c9971e851e0c6864e4b.png'},
      ], true);
  }
}
