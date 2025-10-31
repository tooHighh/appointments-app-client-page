import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookNewService } from './book-new.service';

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent {

  constructor(public bookNewService: BookNewService) {}

}
