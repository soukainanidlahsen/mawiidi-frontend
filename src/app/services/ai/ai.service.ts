import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface ChatMessage {
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor() { }

  sendMessage(message: string): Observable<ChatMessage> {
    // Mock AI response logic
    let responseText = "I'm sorry, I didn't understand that.";
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
      responseText = "Hello! How can I assist you with your health today?";
    } else if (lowerMsg.includes('appointment') || lowerMsg.includes('book')) {
      responseText = "You can book an appointment by navigating to the 'Book Appointment' section in the sidebar.";
    } else if (lowerMsg.includes('record') || lowerMsg.includes('history')) {
      responseText = "Your medical records are available under the 'Medical Records' tab.";
    } else if (lowerMsg.includes('thank')) {
      responseText = "You're welcome! Stay healthy.";
    }

    const response: ChatMessage = {
      text: responseText,
      sender: 'ai',
      timestamp: new Date()
    };

    // Simulate network delay
    return of(response).pipe(delay(1000));
  }
}
