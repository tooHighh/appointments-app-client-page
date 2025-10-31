import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice',
  imports: [CommonModule],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  standalone: true,
})
export class InvoiceComponent {
  invoiceNumber: string = 'INV-001';
  customerName: string = 'John Doe';
  @Output() closeWindowEvent = new EventEmitter<void>();
  items: { description: string; price: number }[] = [
    { description: 'Service A', price: 50 },
    { description: 'Service B', price: 100 },
  ];

  get totalAmount(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  closeWindow(): void {
    this.closeWindowEvent.emit();
  }
}
