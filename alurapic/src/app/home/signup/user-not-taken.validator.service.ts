import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs';
import { SignupService } from './signup.services';

@Injectable()
export class UserNotTakeValidatorService {
  constructor(private readonly signupService: SignupService) {}

  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(
          switchMap((userName) => {
            return this.signupService.checkUserNameTaken(userName);
          })
        )
        .pipe(map((isTaken) => (isTaken ? { userNameTaken: true } : null)))
        .pipe(first());
    };
  }
}
