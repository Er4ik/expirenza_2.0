import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-businesses-register',
  imports: [ReactiveFormsModule],
  templateUrl: './businesses-register.component.html',
  styleUrl: './businesses-register.component.scss'
})
export class BusinessesRegisterComponent {
  registerForm: FormGroup;
  error = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value).subscribe({
        next: () => this.router.navigate(['businesses/places']),
        error: (err: any) => this.error = err.error.message || 'Registration failed'
      });
    }
  }

  goToLogin() {
    this.router.navigate(['businesses/login']);
  }
}
