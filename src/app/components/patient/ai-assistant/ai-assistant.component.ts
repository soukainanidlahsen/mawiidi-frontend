import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiService, ChatMessage } from '../../../services/ai/ai.service';

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-assistant.component.html',
  styleUrl: './ai-assistant.component.scss'
})
export class AiAssistantComponent implements AfterViewChecked {
  isOpen: boolean = false;
  messages: ChatMessage[] = [];
  newMessage: string = '';
  isTyping: boolean = false;

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  constructor(private aiService: AiService) {
    // Initial greeting
    this.messages.push({
      text: 'Hello! I am your personal health assistant. How can I help you today?',
      sender: 'ai',
      timestamp: new Date()
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
  }

  sendMessage(): void {
    if (!this.newMessage.trim()) return;

    const userMsg: ChatMessage = {
      text: this.newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    this.messages.push(userMsg);
    this.newMessage = '';
    this.isTyping = true;

    this.aiService.sendMessage(userMsg.text).subscribe(response => {
      this.messages.push(response);
      this.isTyping = false;
    });
  }
}
