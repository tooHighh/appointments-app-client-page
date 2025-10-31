import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { LayoutService } from './layout.service';
import {
  trigger,
  transition,
  style,
  animate,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent],
  styleUrls: ['./layout.component.css'],
  templateUrl: './layout.component.html',
  animations: [
    trigger('fadeInOut', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({
              position: 'absolute',
              width: '94%',
              opacity: '0',
              transform: 'translateY(20px)',
            }),
            animate(
              '400ms ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class LayoutComponent implements OnInit {
  constructor(public layoutService: LayoutService) {}

  get isSidebarVisible() {
    return this.layoutService.isSidebarVisible;
  }

  get activeItem() {
    return this.layoutService.activeItem;
  }

  get pageTitle() {
    return this.layoutService.pageTitle;
  }

  ngOnInit() {
    if (window.location.pathname !== '/') {
      window.history.replaceState({}, '', '/');
    }

    this.layoutService.updateView();
    window.addEventListener('resize', () => this.layoutService.updateView());
  }

  toogleSidebarState() {
    this.layoutService.toogleSidebarState();
  }

  onNavigationChange(route: string) {
    this.layoutService.onNavigationChange(route);
  }

  onLogout() {
    this.layoutService.router.navigate(['/login']);
  }

  setPageTitle(title: string) {
    this.layoutService.pageTitle = title;
  }
}
