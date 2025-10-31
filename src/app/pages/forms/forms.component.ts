import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsService } from './forms.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  constructor(public formsService: FormsService) {}
}
