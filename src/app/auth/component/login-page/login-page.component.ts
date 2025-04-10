import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../../service.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, CommonModule,HttpClientModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  showPassword = false;
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    private service: ServiceService
  ) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    const payload = {
      email: this.email,
      password: this.password,
      device_type: 'W',
      device_token: '',
      device_model: '',
      app_version: '',
      os_version: '',
      phone_code: '+965', 


    };
  
    const url = 'https://dev.myemprove.com/api/ver3api/student-login?lang=en&store=KW';
  
    this.http.post<any>(url, payload).subscribe({
      next: (res) => {
        console.log('API Response:', res);
  
        if (res?.status === 200 && res?.data && res?.token) {
          this.service.setUser(res.data); 
  
          this.router.navigate(['/login-details']);
        } else {
          alert(res?.message || 'Login failed.');
        }
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert(err?.error?.message || 'Server error. Please try again later.');
      }
    });
  }
  
}
