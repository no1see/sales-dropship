import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { filter } from 'rxjs/operators';
import { MatGridList } from '@angular/material/grid-list';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, AfterContentInit {
  @ViewChild('mainCategoryGrid', {static: false}) mainCategoryGrid: MatGridList;

  gridByBreakpoint = {
    xl: 4,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1
  }

  categoryFilterText: string = '';
  categoryNavFilterText: string = '';
  public categorySelected: boolean = false;
  categoryList: Category[] = [];

  menu: NavItem [] = [
    {
      displayName: 'Держаки',
      iconName: 'desktop_windows',
      children: [
        {
          displayName: 'Од лопат',
          iconName: 'search',
          route: 'category5'
        },
        {
          displayName: 'Од грабліууу',
          iconName: 'search',
          route: 'category5'
        }
      ]
    },
    {
      displayName: 'Дуже довга назва категорії для тесту',
      iconName: 'desktop_windows',
      children: [
        {
          displayName: 'Тканина',
          iconName: 'search',
          route: 'category3'
        }
      ]
    },     
    {
      displayName: 'Посуд',
      iconName: 'ballot',
      children: [
        {
          displayName: 'Чашки',
          iconName: 'search',
          route: 'category2'
        },
        {
          displayName: 'Тарілки',
          iconName: 'search',
          route: 'category2'
        }
      ]
    },
    {
      displayName: 'Текстиль',
      iconName: 'group',
      children: [
          {
            displayName: 'Тканина',
            iconName: 'search',
            route: 'category3'
          }
        ]
      }
  ];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private mediaObserver: MediaObserver
  ) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(({url}: NavigationEnd) => {
      this.categorySelected = !(url == '/categories');
    });
  }

  ngOnInit(): void {
    this.getCategoryItems();
    // console.log(this.activatedRoute);
    // this.categorySelected = this.activatedRoute.children.length ? true : false;
  }

  ngAfterContentInit() {
    if (this.mainCategoryGrid) {
      this.mediaObserver.media$.subscribe((change: MediaChange) => {
        this.mainCategoryGrid.cols = this.gridByBreakpoint[change.mqAlias];
      });
    }
  }

  redirectToCategory = (item) => {
    this.categorySelected = true;
    this.router.navigate(['categories', item]);
  }
  

  getCategoryItems() {
    this.categoryList = [
      {
        id: 1,
        description: 'desctiption cat1',
        title: 'A natural view',
        img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
        route: 'category1'
      },
      {
        id: 2,
        description: 'desctiption cat2',
        title: 'Newspaper',
        img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg',
        route: 'category2'
      },
      {
        id: 3,
        description: 'desctiption cat3',
        title: 'Favourite pizza',
        img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg',
        route: 'category3'
      },
      {
        id: 4,
        description: 'desctiption cat4',
        title: 'Abstract design',
        img: 'https://placekitten.com/300/200',
        route: 'category4'
      },
      {
        id: 5,
        description: 'desctiption cat5',
        title: 'Tech',
        img: 'https://placekitten.com/300/200',
        route: 'category5'
      },
      {
        id: 6,
        description: 'desctiption cat6',
        title: 'Nightlife',
        img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
        route: 'category6'
      },
      {
        id: 7,
        title: 'Nightlife',
        description: 'desctiption cat7',
        img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
        route: 'category7'
      },
      {
        id: 8,
        title: 'Nightlife',
        description: 'desctiption cat8',
        img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
        route: 'category8'
      },
      {
        id: 9,
        title: 'Nightlife',
        description: 'desctiption cat9',
        img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
        route: 'category9'
      }
    ]
  }

}

export interface Category {
  id: number,
  title: string,
  description: string,
  img: string,
  route: string
}

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}