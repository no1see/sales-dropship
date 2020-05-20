import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
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
