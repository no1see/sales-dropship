import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public themeChanged = new EventEmitter();
  public isDarkTheme: boolean = true;
  constructor() { }

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

}
