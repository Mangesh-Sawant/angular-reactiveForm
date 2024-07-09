import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatFormField, MatSelect, MatOption, MatInput, MatLabel, ReactiveFormsModule, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  loginForm!: FormGroup;
  addressForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.setLoginFormFromGroup();
  }


  ngOnInit(): void {
    this.onChangeFormValue();
  }

  submit(): void {
    console.log(this.loginForm.value);
  }

  private setLoginFormFromGroup(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      info: ['', [Validators.required]],
      address: this.addressForm = this.formBuilder.group({
        address: ['', [Validators.required]]
      }) as FormGroup
    }) as FormGroup;
  }

  private onChangeFormValue(): void {
    this.loginForm?.valueChanges.subscribe(val => {
      console.log(val);
    });
  }
}
