import { Injectable, signal } from "@angular/core";
import { ChangePasswordStatus } from "./change-password-status";

@Injectable({
  providedIn: "root",
})
export class ChangePasswordService {
  succeedPercentage: number = 0.8; // Temporary
  delayMilliseconds: number = 2000;

  isChanging = signal(false);
  changeResult = signal<ChangePasswordStatus>(ChangePasswordStatus.None);

  changePassword(currentPassword: string, newPassword: string): Promise<void> {
    this.isChanging.set(true);
    this.changeResult.set(ChangePasswordStatus.None);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 1 - this.succeedPercentage;
        this.isChanging.set(false);
        const result = isSuccess ? ChangePasswordStatus.Success : ChangePasswordStatus.Error;
        this.changeResult.set(result);

        if (isSuccess) {
          resolve();
        } else {
          reject();
        }
      }, this.delayMilliseconds);
    });
  }
}
