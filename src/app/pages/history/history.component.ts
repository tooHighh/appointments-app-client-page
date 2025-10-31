import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from '../../components/invoice/invoice.component';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, InvoiceComponent],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  constructor(public historyService: HistoryService) {}

  ngOnInit(): void {
    this.historyService.loadServiceHistory();
  }
}
