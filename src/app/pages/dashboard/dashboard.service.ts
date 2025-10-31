import { Injectable } from '@angular/core';
import { Appointment } from '../../models/interfaces.interface';
import { UserService } from '../../services/user.service';
import { Output, EventEmitter, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private userService = inject(UserService);
  @Output() updateSidebarFocusToForms = new EventEmitter<string>();

  appointments: Appointment[] = [];
  loading = false;
  user = this.userService.getCurrentUser();

  loadAppointments(): void {
    this.loading = true;

    setTimeout(() => {
      this.appointments = [
        {
          id: '1',
          title: 'Dental Check-up',
          providerName: 'Dr. Alan Grant',
          date: 'June 20, 2025',
          time: '10:00 AM',
          location: {
            latitude: 34.0522,
            longitude: -118.2437,
          },
        },
        {
          id: '2',
          title: 'Project Kickoff',
          providerName: 'Alice Consulting',
          date: 'July 2, 2025',
          time: '2:00 PM',
          location: {
            latitude: 37.7749,
            longitude: -122.4194,
          },
        },
      ];
      this.loading = false;
    }, 1000);
  }

  onReschedule(appointment: Appointment): void {
    alert(`Reschedule appointment: ${appointment.title}`);
  }

  onCancel(appointment: Appointment): void {
    if (confirm(`Are you sure you want to cancel "${appointment.title}"?`)) {
      this.appointments = this.appointments.filter(
        (apt) => apt.id !== appointment.id
      );
    }
  }

  onViewForms(value: string): void {
    this.updateSidebarFocusToForms.emit(value);
  }
}
