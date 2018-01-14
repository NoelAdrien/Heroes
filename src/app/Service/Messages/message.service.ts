import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  Messages: string[] = [];

  Add(message: string) {
    this.Messages.push(message);
  }

  Clear() {
    this.Messages = [];
  }
}
