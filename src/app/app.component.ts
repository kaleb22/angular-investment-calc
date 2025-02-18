import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-investiment-calc';
}
