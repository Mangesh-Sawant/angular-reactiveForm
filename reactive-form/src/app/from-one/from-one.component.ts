import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-from-one',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './from-one.component.html',
  styleUrl: './from-one.component.sass'
})
export class FromOneComponent {
  formOne: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formOne = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
}
