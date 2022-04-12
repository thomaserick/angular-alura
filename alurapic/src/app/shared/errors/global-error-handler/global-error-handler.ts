import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import * as stacktrace from 'stacktrace-js';
import { ServerLogService } from './server-log.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private readonly injector: Injector) {}

  handleError(error: any): void {
    const location = this.injector.get(LocationStrategy);
    const userService = this.injector.get(UserService);
    const logService = this.injector.get(ServerLogService);
    const url = location instanceof PathLocationStrategy ? location.path() : '';

    const message = error.message ? error.message : error.toString();
    stacktrace.fromError(error).then((stackFrames) => {
      const stracAsString = stackFrames.map((sf) => sf.toString).join('\n');
      logService
        .log({
          message,
          url,
          userName: userService.getUserName(),
          stack: stracAsString,
        })
        .subscribe((error) =>
          console.log('Erro ao enviar para o servidor de log!')
        );
    });
  }
}
