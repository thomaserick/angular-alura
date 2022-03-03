import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;
  @ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>;

  constructor(
    private readonly formBuild: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private readonly platformDetectionService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuild.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const userName = this.loginForm.get('userName')!.value;
    const password = this.loginForm.get('password')!.value;

    this.authService.authenticate(userName, password).subscribe({
      next: () => {
        this.router.navigate(['user', userName]);
      },
      error: () => {
        this.loginForm.reset();
        this.platformDetectionService.isPlatformBrowser() &&
          this.userNameInput.nativeElement.focus();
      },
    });
  }
}
