import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  user$!: Observable<User>;

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }
}
