import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatGridList } from '@angular/material/grid-list';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit, AfterContentInit {
  // @ViewChild('сategoryGrid') сategoryGrid: MatGridList;

  gridByBreakpoint = {
    xl: 4,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1
  }

  categoryItems: CategoryItem[] = [];

  public category: string;
  constructor(
    private route: ActivatedRoute,
    private mediaObserver: MediaObserver,
    private router: Router
  ) {
    this.route.params.subscribe(params => this.getCategoryDetails());
  }

  ngOnInit(): void {
    this.getCategoryDetails();
    this.getCategoryItems();
  }

  ngAfterContentInit() {
    // this.mediaObserver.media$.subscribe((change: MediaChange) => {
    //   this.сategoryGrid.cols = this.gridByBreakpoint[change.mqAlias];
    // });
  }

  getCategoryDetails() {
    const categoryName = this.route.snapshot.paramMap.get('category');
    this.category = categoryName;
  }

  getCategoryItems() {
    this.categoryItems = [
      {
        id: 1,
        title: 'A natural view',
        img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
      },
      {
        id: 2,
        title: 'Newspaper',
        img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'
      },
      {
        id: 3,
        title: 'Favourite pizza',
        img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'
      },
      {
        id: 4,
        title: 'Abstract design',
        img: 'https://placekitten.com/300/200'
      },
      {
        id: 5,
        title: 'Tech',
        img: 'https://placekitten.com/300/200'
      },
      {
        id: 6,
        title: 'Nightlife',
        img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
      },
      {
        id: 7,
        title: 'Nightlife',
        img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
      },
      {
        id: 8,
        title: 'Nightlife',
        img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
      },
      {
        id: 9,
        title: 'Nightlife',
        img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
      }
    ]
  }

  backToCategories() {
    this.router.navigate(['categories']);
  }

}

export interface CategoryItem {
  id: number,
  title: string,
  img: string
}
