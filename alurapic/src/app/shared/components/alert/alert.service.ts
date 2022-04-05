import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  alert$: Subject<Alert> = new Subject<Alert>();
  keepAfterRouterChange: boolean = false;

  constructor(private readonly route: Router) {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouterChange) {
          this.keepAfterRouterChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  success(message: string, keepAfterRouterChange: boolean = false) {
    this.alert(AlertType.SUCCESS, message, keepAfterRouterChange);
  }

  warning(message: string, keepAfterRouterChange: boolean = false) {
    this.alert(AlertType.WARNING, message, keepAfterRouterChange);
  }

  danger(message: string, keepAfterRouterChange: boolean = false) {
    this.alert(AlertType.DANGER, message, keepAfterRouterChange);
  }

  info(message: string, keepAfterRouterChange: boolean = false) {
    this.alert(AlertType.INFO, message, keepAfterRouterChange);
  }

  private alert(
    alertType: AlertType,
    message: string,
    keepAfterRouterChange: boolean
  ) {
    this.keepAfterRouterChange = keepAfterRouterChange;
    this.alert$.next(new Alert(alertType, message));
  }

  getAlert() {
    return this.alert$.asObservable();
  }

  clear() {
    this.alert$.next(null as any);
  }
}
