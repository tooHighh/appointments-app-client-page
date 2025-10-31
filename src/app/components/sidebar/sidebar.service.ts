import { Injectable } from '@angular/core';
import { NavigationItem } from '../../models/interfaces.interface';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  activeItem = 'dashboard';

  navigationItems: NavigationItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: '<i class="fa-regular fa-window-restore"></i>',
      route: '/dashboard',
    },
    {
      id: 'book-new',
      label: 'Book New Appointment',
      icon: '<i class="fa-solid fa-circle-plus"></i>',
      route: '/book-new',
    },
    {
      id: 'history',
      label: 'History & Invoices',
      icon: '<i class="fa-solid fa-clock-rotate-left"></i>',
      route: '/history',
    },
    // {id: 'forms', // label: 'Forms', // icon: '<i class="fa-regular fa-file"></i>', // route: '/forms', // },
  ];

  setActiveItem(itemId: string) {
    this.activeItem = itemId;
  }
}
