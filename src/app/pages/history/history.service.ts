import { Injectable } from '@angular/core';
import { ServiceHistory } from '../../models/interfaces.interface';

@Injectable({ providedIn: 'root' })
export class HistoryService {
  isActivated = false;
  serviceHistory: ServiceHistory[] = [];

  loadServiceHistory(): void {
    this.serviceHistory = [
      {
        id: '1',
        service: 'Dental Cleaning',
        provider: 'Dr. Alan Grant',
        date: 'May 15, 2024',
        status: 'completed',
        invoiceUrl: '#',
      },
      {
        id: '2',
        service: 'Medical Checkup',
        provider: 'Dr. Sarah Johnson',
        date: 'April 10, 2024',
        status: 'completed',
        invoiceUrl: '#',
      },
      {
        id: '3',
        service: 'Vision Exam',
        provider: 'Dr. Michael Chen',
        date: 'March 5, 2024',
        status: 'completed',
        invoiceUrl: '#',
      },
    ];
  }

  viewInvoice(): void {
    this.isActivated = !this.isActivated;
  }
}
