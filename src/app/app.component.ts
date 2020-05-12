import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sales-drop';
  public isDarkTheme: boolean = true;

  public changeTheme = () => {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
