import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentCardService } from './appointment-card.service';
import { Appointment } from '../../models/interfaces.interface';

@Component({
  selector: 'app-appointment-card',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./appointment-card.component.css'],
  templateUrl: './appointment-card.component.html',
})
export class AppointmentCardComponent {
  constructor(public appointmentCardService: AppointmentCardService) {}
  @Input() appointment!: Appointment;
  @Output() reschedule = new EventEmitter<Appointment>();
  @Output() cancel = new EventEmitter<Appointment>();

  onReschedule(): void {
    this.reschedule.emit(this.appointment);
  }

  onCancel(): void {
    this.cancel.emit(this.appointment);
  }

  onLocation(): void {
    this.appointmentCardService.openLocationInMaps(
      this.appointment.location.latitude,
      this.appointment.location.longitude
    );
  }
}
