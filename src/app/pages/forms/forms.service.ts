import { Injectable } from '@angular/core';
import { Form } from '../../models/interfaces.interface';

@Injectable({ providedIn: 'root' })
export class FormsService {
  forms: Form[] = [
    {
      id: '1',
      title: 'New Client Intake Form',
      status: 'pending',
      canFill: true,
    },
    {
      id: '2',
      title: 'Service Agreement',
      status: 'completed',
      canFill: false,
    },
  ];

  fillForm(form: Form): void {
    if (form.canFill) {
      console.log('Filling form:', form.title);
    }
  }
}
