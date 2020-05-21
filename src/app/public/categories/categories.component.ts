import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categorySelected: boolean = false;
  categoryList: Category[] = [
    {
      id: 0,
      name: 'category1',
      displayName: 'Category 1'
    },
    {
      id: 1,
      name: 'category2',
      displayName: 'Category 2'
    },
    {
      id: 2,
      name: 'category3',
      displayName: 'Category 3'
    },
    {
      id: 3,
      name: 'category4',
      displayName: 'Category 4'
    }
  ];

  menu: NavItem [] = [
    {
      displayName: 'Cat1',
      iconName: 'desktop_windows',
      route: 'category1',
    },        
    {
      displayName: 'Category 2',
      iconName: 'ballot',
      children: [
        {
          displayName: 'sub cat of 2 - 1',
          iconName: 'search',
          route: 'category2'
        },
        {
          displayName: 'sub cat of 2 - 1',
          iconName: 'search',
          route: 'category2'
        }
      ]
    },
    {
      displayName: 'sub cat 2.1',
      iconName: 'group',
      children: [
          {
            displayName: 'sub cat of 2 - 1',
            iconName: 'search',
            route: 'category3'
          }
        ]
      }
  ];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(({url}: NavigationEnd) => {
      this.categorySelected = !(url == '/categories');
    });
  }

  ngOnInit(): void {
    // console.log(this.activatedRoute);
    // this.categorySelected = this.activatedRoute.children.length ? true : false;
  }

  redirectToCategory = (item) => {
    this.categorySelected = true;
    this.router.navigate(['categories', item]);

  }

}

export interface Category {
  id: number,
  name: string,
  displayName: string
}

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}