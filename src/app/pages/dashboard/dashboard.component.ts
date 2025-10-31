import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBannerComponent } from '../../components/action-banner/action-banner.component';
import { AppointmentCardComponent } from '../../components/appointment-card/appointment-card.component';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ActionBannerComponent, AppointmentCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.loadAppointments();
  }
}
