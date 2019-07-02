import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      uName: [''],
      username: [''],
      description: ['']
    }, { validators: anyOneFieldRequired });
  }

  submit(value) {
    console.log('Form Value: ', value);
  }
}

function anyOneFieldRequired(formGroup: FormGroup) {
  const uName = formGroup.controls['uName'].value;
  const username = formGroup.controls['username'].value;
  const description = formGroup.controls['description'].value;
  return uName === '' && username === '' && description === '' ? { oneFieldRequired: true } : null;
}