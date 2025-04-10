import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../../service.service';

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}

@Component({
  selector: 'app-login-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-details.component.html',
  styleUrl: './login-details.component.scss',
})
export class LoginDetailsComponent implements OnInit {
  userData: any;
  user: UserProfile = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    countryCode: '',
  };

  showOldPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;

  constructor(private http: HttpClient, private service: ServiceService) {}

 ngOnInit() {
   this.service.getUser('some-id').subscribe((data: any) =>  {
     this.user.firstName = data.firstName;
     this.user.lastName = data.lastName;
     this.user.email = data.email;
     this.user.phoneNumber = data.phoneNumber;
     this.user.countryCode = data.countryCode || '965';
   });
 }

  loginAndFetchProfile() {
    const loginPayload = {
      email: 'test@yopmail.com',
      password: '123456',
      device_type: 'W',
      device_token: '',
      device_model: '',
      app_version: '',
      os_version: '',
      phone_code: '+965',
    };

    this.http
      .post<UserProfile>(
        'https://dev.myemprove.com/api/ver3api/student-login?lang=en&store=KW',
        loginPayload
      )
      .subscribe({
        next: (response) => {
          this.user = {
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
            phoneNumber: response.phoneNumber,
            countryCode: response.countryCode,
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
          };
        },
        error: (error) => {
          console.error('Login failed:', error);
        },
      });
  }

  onSubmit() {
    const payload = {
      ...this.user,
    };

    this.http
      .post<UserProfile>(
        'https://dev.myemprove.com/api/ver3api/student-login?lang=en&store=KW',
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      )

      .subscribe({
        next: (response) => {
          console.log('Profile updated:', response);
        },
        error: (error) => {
          console.error('Update error:', error);
        },
      });
  }

  togglePasswordVisibility(field: string) {
    switch (field) {
      case 'old':
        this.showOldPassword = !this.showOldPassword;
        break;
      case 'new':
        this.showNewPassword = !this.showNewPassword;
        break;
      case 'confirm':
        this.showConfirmPassword = !this.showConfirmPassword;
        break;
    }
  }
}
