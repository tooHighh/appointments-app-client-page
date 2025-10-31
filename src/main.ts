import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LayoutComponent } from './app/components/layout/layout.component';
import { DashboardComponent } from './app/pages/dashboard/dashboard.component';
import { BookNewComponent } from './app/pages/book-new/book-new.component';
import { HistoryComponent } from './app/pages/history/history.component';
import { FormsComponent } from './app/pages/forms/forms.component';
import { ProfileComponent } from './app/pages/profile/profile.component';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  template: `<app-layout></app-layout>`,
})
class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
        data: { animation: 'dashboard' },
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { animation: 'dashboard' },
      },
      {
        path: 'book-new',
        component: BookNewComponent,
        data: { animation: 'bookNew' },
      },
      {
        path: 'history',
        component: HistoryComponent,
        data: { animation: 'history' },
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: { animation: 'forms' },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { animation: 'profile' },
      },
      {
        path: '**',
        redirectTo: '/dashboard',
        data: { animation: 'dashboard' },
      },
    ]),
    provideHttpClient(),
    provideAnimations(),
  ],
});
