import { Injectable, signal } from "@angular/core";
import { LoginUserStatus } from "./login-user-status";

@Injectable({
  providedIn: "root",
})
export class LoginUserService {
  succeedPercentage: number = 0.1; // Temporary
  delayMilliseconds: number = 2000;

  isSending = signal(false);
  sendResult = signal<LoginUserStatus>(LoginUserStatus.None);

  login(email: string, username: string, password: string): Promise<void> {
    this.isSending.set(true);
    this.sendResult.set(LoginUserStatus.None);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 1 - this.succeedPercentage;
        this.isSending.set(false);
        const result = isSuccess ? LoginUserStatus.Success : LoginUserStatus.Error;
        this.sendResult.set(result);

        if (isSuccess) {
          resolve();
        } else {
          reject();
        }
      }, this.delayMilliseconds);
    });
  }
}
