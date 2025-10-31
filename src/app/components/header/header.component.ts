import { Component, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/interfaces.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isActivated: boolean = true;
  @Output() toogleSidebarEvent = new EventEmitter<void>();
  private userService = inject(UserService);
  user: User = this.userService.getCurrentUser();
  @Input() pageTitle: string = '';
  @Output() updateSidebarFocusToProfile = new EventEmitter<string>();
  @Output() logout = new EventEmitter<void>();

  navigateTo(): void {
    this.updateSidebarFocusToProfile.emit('profile');
  }

  toogleSidebarState(): void {
    this.toogleSidebarEvent.emit();
  }

  onLogout(): void {
    this.logout.emit();
  }
}
