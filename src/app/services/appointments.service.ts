import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Appointment } from '../models/interfaces.interface';
import { environment } from '../models/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private http = inject(HttpClient);
  private appointmentsSubject = new BehaviorSubject<Appointment[]>([]);
  public appointments$ = this.appointmentsSubject.asObservable();

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${environment.apiBaseUrl}/appointments`).pipe(
      tap(appointments => this.appointmentsSubject.next(appointments))
    );
  }

  rescheduleAppointment(appointmentId: string, newDate: string, newTime: string): Observable<Appointment> {
    return this.http.put<Appointment>(
      `${environment.apiBaseUrl}/appointments/${appointmentId}`,
      { date: newDate, time: newTime }
    ).pipe(
      tap(() => this.refreshAppointments())
    );
  }

  cancelAppointment(appointmentId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiBaseUrl}/appointments/${appointmentId}`).pipe(
      tap(() => this.refreshAppointments())
    );
  }

  private refreshAppointments(): void {
    this.getAppointments().subscribe();
  }
}

