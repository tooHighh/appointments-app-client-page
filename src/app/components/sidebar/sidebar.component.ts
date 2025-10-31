import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { NavigationItem } from '../../models/interfaces.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule],
})
export class SidebarComponent {
  @Input() activeItem = '';
  @Output() activeItemChange = new EventEmitter<string>();
  @Output() navigationChange = new EventEmitter<string>();
  @Output() logout = new EventEmitter<void>();
  @Output() toggleSidebar = new EventEmitter<void>();

  navigationItems: NavigationItem[];

  constructor(public sidebarService: SidebarService) {
    this.navigationItems = this.sidebarService.navigationItems;
  }

  onItemClick(item: NavigationItem): void {
    this.activeItem = item.id;
    this.sidebarService.setActiveItem(item.id);
    this.activeItemChange.emit(item.label);
    this.navigationChange.emit(item.route);

    if (window.innerWidth <= 768) {
      this.toggleSidebar.emit();
    }
  }

  onLogout(): void {
    this.logout.emit();
  }
}
