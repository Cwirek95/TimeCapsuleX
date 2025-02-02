import { Injectable, signal } from "@angular/core";
import { CreateTimeBasedCapsuleStatus } from "./create-time-based-capsule-status";

@Injectable({
  providedIn: "root",
})
export class CreateTimeBasedCapsuleService {
  succeedPercentage: number = 0.8; // Temporary
  delayMilliseconds: number = 2000;

  isSending = signal(false);
  sendResult = signal<CreateTimeBasedCapsuleStatus>(CreateTimeBasedCapsuleStatus.None);

  sendEmail(name: string, email: string, message: string): Promise<void> {
    this.isSending.set(true);
    this.sendResult.set(CreateTimeBasedCapsuleStatus.None);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 1 - this.succeedPercentage;
        this.isSending.set(false);
        const result = isSuccess ? CreateTimeBasedCapsuleStatus.Success : CreateTimeBasedCapsuleStatus.Error;
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
