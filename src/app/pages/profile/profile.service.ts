import { Injectable } from '@angular/core';
import { UserProfile } from '../../models/interfaces.interface';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  userProfile: UserProfile = {
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1-202-555-0173',
    smsNotifications: true,
    emailNotifications: true,
    whatsappNotifications: false,
  };

  saveChanges(): void {
    console.log('Saving profile changes:', this.userProfile);
  }
}
