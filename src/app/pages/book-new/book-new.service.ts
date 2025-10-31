import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BookNewService {
  appointment = {
    service: '',
    provider: 'any',
    date: '',
    time: '',
  };

  availableTimes = [
    { time: '09:00 AM', available: true },
    { time: '10:00 AM', available: false },
    { time: '11:00 AM', available: true },
    { time: '02:00 PM', available: true },
    { time: '03:00 PM', available: false },
    { time: '04:00 PM', available: true },
  ];

  selectTime(time: string) {
    this.appointment.time = time;
  }

  onSubmit(form: NgForm) {
    if (form.valid && this.appointment.time) {
      console.log('Appointment confirmed:', this.appointment);
      alert(
        `Appointment booked for ${this.appointment.date} at ${this.appointment.time}`
      );
      form.resetForm({ provider: 'any' });
    } else {
      console.warn('Form invalid');
    }
  }
}
