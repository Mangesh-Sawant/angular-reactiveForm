import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-from-two',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './from-two.component.html',
  styleUrl: './from-two.component.sass'
})
export class FromTwoComponent {
  formTwo: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formTwo = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  ngOnInit(): void {}
}
