import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-only-one-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatButton
  ],
  templateUrl: './only-one-form.component.html',
  styleUrl: './only-one-form.component.sass'
})
export class OnlyOneFormComponent {
  singleFieldControl: FormControl;

  constructor() {
    this.singleFieldControl = new FormControl(['']);
  }

  onSubmit(): void {
    console.log(this.singleFieldControl.value);
  }
}
