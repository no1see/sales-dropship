import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public themeChanged = new EventEmitter();
  @ViewChild('menu', {static: true}) public menu: any;
  public isDarkTheme: boolean = true;

  categoryList = [
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
  ]


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  /**
   * onToggleSideNav
  => */
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  public toggleTheme = () => {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeChanged.emit();
  }

  public redirectToCategory = (category: string) => {
    this.router.navigate([`/categories/${category}`]);
  }

}
