import {Component, OnInit, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {FromOneComponent} from "./from-one/from-one.component";
import {FromTwoComponent} from "./from-two/from-two.component";
import {OnlyOneFormComponent} from "./only-one-form/only-one-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatFormField, MatSelect, MatOption, MatInput, MatLabel, ReactiveFormsModule
    , MatButton, FromOneComponent, FromTwoComponent, FromOneComponent, FromTwoComponent, OnlyOneFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  @ViewChild(FromOneComponent) formOneComponent!: FromOneComponent;
  @ViewChild(FromTwoComponent) formTwoComponent!: FromTwoComponent;
  loginForm!: FormGroup;
  addressForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.setLoginFormFromGroup();
  }


  ngOnInit(): void {
    this.onChangeFormValue();
  }

  onSubmit(): void {
    if (this.formOneComponent.formOne.valid && this.formTwoComponent.formTwo.valid) {
      const combinedFormData = {
        ...this.formOneComponent.formOne.value,
        ...this.formTwoComponent.formTwo.value
      };
      console.log('Combined Form Data:', combinedFormData);
    } else {
      console.log('Forms are not valid');
    }
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
