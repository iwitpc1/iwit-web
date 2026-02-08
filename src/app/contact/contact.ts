import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  protected fullName = signal('');
  protected email = signal('');
  protected message = signal('');

  onSubmit(): void {
    console.log('Form submitted:', {
      fullName: this.fullName(),
      email: this.email(),
      message: this.message()
    });
    // Add form submission logic here
  }
}
