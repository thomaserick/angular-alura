import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private readonly formBuild: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuild.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
