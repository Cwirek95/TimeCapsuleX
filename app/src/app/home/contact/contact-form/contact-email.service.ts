import { Injectable, signal } from "@angular/core";
import { ContactEmailStatus } from "./contact-email-status";

@Injectable({
  providedIn: "root",
})
export class ContactEmailService {
  succeedPercentage: number = 0.8; // Temporary
  delayMilliseconds: number = 2000;

  isSending = signal(false);
  sendResult = signal<ContactEmailStatus>(ContactEmailStatus.None);

  sendEmail(name: string, email: string, message: string): Promise<void> {
    this.isSending.set(true);
    this.sendResult.set(ContactEmailStatus.None);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 1 - this.succeedPercentage;
        this.isSending.set(false);
        const result = isSuccess ? ContactEmailStatus.Success : ContactEmailStatus.Error;
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
