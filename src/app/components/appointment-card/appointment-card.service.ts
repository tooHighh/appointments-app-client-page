import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class AppointmentCardService {
  openLocationInMaps(latitude: number, longitude: number): void {
    if (latitude && longitude) {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
        '_blank'
      );
    } else {
      console.warn('No location available for this appointment');
    }
  }
}