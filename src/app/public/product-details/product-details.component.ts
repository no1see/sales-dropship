import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

const categoryItems = [
  {
    id: 1,
    title: 'A natural view',
    description: 'A natural view item',
    img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
    category: {
      id: 1,
      description: 'desctiption cat1',
      title: 'A natural view',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      route: 'category1'
    }
  },
  {
    id: 2,
    title: 'Newspaper',
    description: 'Newspaper item',
    img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg',
    category: {
      id: 2,
      description: 'desctiption cat2',
      title: 'Newspaper',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg',
      route: 'category2'
    }
  },
  {
    id: 3,
    title: 'Favourite pizza',
    description: 'Favourite pizza item',
    img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg',
    category: {
      id: 3,
      description: 'desctiption cat3',
      title: 'Favourite pizza',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg',
      route: 'category3'
    }
  },
  {
    id: 4,
    title: 'Abstract design',
    description: 'Abstract design item',
    img: 'https://placekitten.com/300/200',
    category: {
      id: 4,
      description: 'desctiption cat4',
      title: 'Abstract design',
      img: 'https://placekitten.com/300/200',
      route: 'category4'
    }
  },
  {
    id: 5,
    title: 'Tech',
    description: 'Tech item',
    img: 'https://placekitten.com/300/200',
    category: {
      id: 5,
      description: 'desctiption cat5',
      title: 'Tech',
      img: 'https://placekitten.com/300/200',
      route: 'category5'
    }
  },
  {
    id: 6,
    title: 'Nightlife',
    description: 'Nightlife category item1',
    img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
    category: {
      id: 7,
      title: 'Nightlife',
      description: 'desctiption cat7',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
      route: 'category7'
    }
  },
  {
    id: 7,
    title: 'Nightlife',
    description: 'Nightlife category item1',
    img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
    category: {
      id: 7,
      title: 'Nightlife',
      description: 'desctiption cat7',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
      route: 'category7'
    }
  },
  {
    id: 8,
    title: 'Nightlife',
    description: 'Nightlife category item1',
    img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
    category: {
      id: 7,
        title: 'Nightlife',
        description: 'desctiption cat7',
        img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
        route: 'category7'
    }
  },
  {
    id: 9,
    title: 'Nightlife',
    description: 'Nightlife category item1',
    img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
    category: {
      id: 7,
        title: 'Nightlife',
        description: 'desctiption cat7',
        img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
        route: 'category7'
    }
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
    private route: ActivatedRoute,
    private router: Router
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

  routeToCategory(category: Category) {
    this.router.navigate(['categories', category.route]);
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