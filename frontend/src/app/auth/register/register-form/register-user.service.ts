import { Injectable, signal } from "@angular/core";
import { RegisterUserStatus } from "./register-user-status";

@Injectable({
  providedIn: "root",
})
export class RegisterUserService {
  succeedPercentage: number = 0.8; // Temporary
  delayMilliseconds: number = 2000;

  isSending = signal(false);
  sendResult = signal<RegisterUserStatus>(RegisterUserStatus.None);

  register(email: string, username: string, password: string): Promise<void> {
    this.isSending.set(true);
    this.sendResult.set(RegisterUserStatus.None);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 1 - this.succeedPercentage;
        this.isSending.set(false);
        const result = isSuccess ? RegisterUserStatus.Success : RegisterUserStatus.Error;
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
