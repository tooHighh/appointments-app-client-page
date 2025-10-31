import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-banner.component.html',
  styleUrls: ['./action-banner.component.css'],
})
export class ActionBannerComponent {
  @Output() updateSidebarFocusToForms = new EventEmitter<string>();

  onViewForms(): void {
    this.updateSidebarFocusToForms.emit('forms');
  }
}
