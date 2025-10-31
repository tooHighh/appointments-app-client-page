import { Injectable } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  public router = inject(Router);
  isSidebarVisible: boolean = true;
  isMobileView: boolean = false;
  pageTitle: string = 'Dashboard';
  activeItem: string = 'dashboard';
  private sidebarService = inject(SidebarService);

  updateView() {
    if (window.innerWidth > 1050) {
      this.isSidebarVisible = true;
    } else {
      this.isSidebarVisible = false;
    }

    if (window.innerWidth <= 768) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    }
  }

  onNavigationChange(route: String): void {
    this.activeItem = route.substring(1);
    this.router.navigate([route]);
  }

  onRouteActivate(component: any) {
    if (component.updateSidebarFocusToForms) {
      component.updateSidebarFocusToForms.subscribe((value: string) => {
        this.updateFocus(value);
      });
    }
  }

  updateFocus(title: string): void {
    this.sidebarService.activeItem = '';

    if (title && title === 'profile') {
      this.pageTitle = 'Profile';
      this.activeItem = '';
      this.router.navigate(['/profile']);
    } else if (title && title === 'forms') {
      this.pageTitle = 'Forms';
      this.activeItem = 'forms';
      this.router.navigate(['/forms']);
    }
  }

  getOutletState(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'] || 'none';
  }

  toogleSidebarState(): void {
    if (this.isSidebarVisible) {
      this.isSidebarVisible = false;
    } else {
      this.isSidebarVisible = true;
    }
  }
}
