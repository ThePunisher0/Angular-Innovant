import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private userData: any = null;

  setUser(data: any) {
    this.userData = data;
  }

  getUser(id: string) {
    return of({
      firstName: 'test',
      lastName: 'test',
      email: 'test@yopmail.com',
    });
  }
}
