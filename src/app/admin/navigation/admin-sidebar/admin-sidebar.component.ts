import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  @Output() public themeChanged = new EventEmitter();
  public isDarkTheme: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  public toggleTheme = () => {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeChanged.emit();

  }

}
