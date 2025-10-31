export interface Appointment {
  id: string;
  title: string;
  providerName: string;
  date: string;
  time: string;
  status?: 'upcoming' | 'completed' | 'cancelled';
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface User {
  firstName: string;
  lastName: string;
  email?: string;
  initials?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  route: string;
}

export interface Form {
  id: string;
  title: string;
  status: 'pending' | 'completed';
  canFill: boolean;
}

export interface ServiceHistory {
  id: string;
  service: string;
  provider: string;
  date: string;
  status: 'completed' | 'pending' | 'cancelled';
  invoiceUrl?: string;
}

export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  smsNotifications: boolean;
  emailNotifications: boolean;
  whatsappNotifications: boolean;
}

export interface Invoice {
  id: string;
  billedTo: string;
  service: string;
  amount: number;
  total: number;
}
