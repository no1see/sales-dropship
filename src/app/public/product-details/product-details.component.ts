import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const categoryItems = [
  {
    id: 1,
    title: 'A natural view',
    description: 'A natural view item',
    img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
  },
  {
    id: 2,
    title: 'Newspaper',
    description: 'Newspaper item',
    img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'
  },
  {
    id: 3,
    title: 'Favourite pizza',
    description: 'Favourite pizza item',
    img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'
  },
  {
    id: 4,
    title: 'Abstract design',
    description: 'Abstract design item',
    img: 'https://placekitten.com/300/200'
  },
  {
    id: 5,
    title: 'Tech',
    description: 'Tech item',
    img: 'https://placekitten.com/300/200'
  },
  {
    id: 6,
    title: 'Nightlife',
    description: 'Nightlife category item1',
    img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
  },
  {
    id: 7,
    title: 'Nightlife',
    description: 'Nightlife category item1',
    img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
  },
  {
    id: 8,
    title: 'Nightlife',
    description: 'Nightlife category item1',
    img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
  },
  {
    id: 9,
    title: 'Nightlife',
    description: 'Nightlife category item1',
    img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
  }
];

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: CategoryItem;
  relatedProducts: CategoryItem[];
  constructor(
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => this.getProduct());
  }

  ngOnInit(): void {
    console.log(this.product);
  }

  getProduct() {
    const productId = +this.route.snapshot.paramMap.get('id');
    this.product = categoryItems.find(item => item.id === productId);
    this.relatedProducts = categoryItems.filter(item => item.title === this.product.title);
    console.log(this.relatedProducts);
  }

}

export interface CategoryItem {
  id: number,
  title: string,
  description: string,
  img: string
}