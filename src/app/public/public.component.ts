import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  public isDarkTheme: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  public changeTheme = () => {
    this.isDarkTheme = !this.isDarkTheme;
  }

}
