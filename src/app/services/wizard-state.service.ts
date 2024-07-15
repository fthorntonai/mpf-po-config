import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

// chat.service.ts
@Injectable({ providedIn: 'root' })
export class WizardStateService {
  private messagesSubject = new BehaviorSubject<string[]>([]);
  messages$ = this.messagesSubject.asObservable();

  addMessage(message: string) {
    const currentMessages = this.messagesSubject.value;
    currentMessages.push(message);
    this.messagesSubject.next(currentMessages);
  }
}