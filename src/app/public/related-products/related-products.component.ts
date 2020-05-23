import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit {
  @Input() relatedProducts: CategoryItem;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['Prev', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true,
    center: true,
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  showGood(item) {
    this.router.navigate(['products', item.id]);
  }

}

export interface CategoryItem {
  id: number,
  title: string,
  description: string,
  img: string,
  category: Category
}

export interface Category {
  id: number,
  title: string,
  description: string,
  img: string,
  route: string
}