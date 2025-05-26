import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-businesses-login',
  imports: [ReactiveFormsModule],
  templateUrl: './businesses-login.component.html',
  styleUrl: './businesses-login.component.scss'
})
export class BusinessesLoginComponent {
  loginForm: FormGroup;
  error = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe({
        next: (res) => {
          this.auth.saveToken(res.token);
          this.router.navigate(['businesses/places']);
        },
        error: err => this.error = err.error.message || 'Login failed'
      });
    }
  }

  goToRegister() {
    this.router.navigate(['businesses/register']);
  }
}
