import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  initialValue = signal('0');
  anualValue = signal('0');
  expectReturn = signal('6');
  duration = signal('10');

  onSubmit() {}
}
