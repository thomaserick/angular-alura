import { Component, Input } from '@angular/core';
import { Alert } from './alert';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent {
  @Input() timeout = 3000;
  alerts: Alert[] = [];

  constructor(private alertService: AlertService) {
    this.alertService.getAlert().subscribe((alert) => {
      if (!alert) {
        this.alerts = [];
        return;
      }
      this.alerts.push(alert);
      setTimeout(() => this.removeAlert(alert), this.timeout);
    });
  }

  removeAlert(alertDissme: Alert) {
    this.alerts = this.alerts.filter((alert) => alert != alertDissme);
  }

  getAlertClass(alert: Alert) {
    if (!alert) return '';

    const alertClass = {
      0: 'alert alert-success',
      1: 'alert alert-warning',
      2: 'alert alert-danger',
      3: 'alert alert-info',
    };

    return alertClass[alert.alertType];
  }
}
