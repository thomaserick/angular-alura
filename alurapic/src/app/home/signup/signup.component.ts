import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { SignupService } from './signup.services';
import { UserNotTakeValidatorService } from './user-not-taken.validator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [UserNotTakeValidatorService],
})
export class SignupComponent implements OnInit, AfterViewInit {
  signupForm!: FormGroup;
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly userNotTakeVailidator: UserNotTakeValidatorService,
    private readonly sinupService: SignupService,
    private readonly router: Router
  ) {}
  ngAfterViewInit(): void {
    this.emailInput.nativeElement.focus();
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          lowerCaseValidator,
        ],
        this.userNotTakeVailidator.checkUserNameTaken(),
      ],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
        ],
      ],
    });
  }

  signup() {
    if (this.signupForm.invalid || this.signupForm.pending) {
      return;
    }

    const newUser: NewUser = this.signupForm.getRawValue();
    this.sinupService
      .signup(newUser)
      .subscribe(() => this.router.navigate(['']));
  }
}
