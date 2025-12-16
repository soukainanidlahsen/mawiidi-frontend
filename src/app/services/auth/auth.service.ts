import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, of } from 'rxjs';
import { Router } from '@angular/router';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'PATIENT' | 'DOCTOR' | 'ADMIN';
}

export interface AuthResponse {
  token: string;
  role: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/api/auth';
  private tokenKey = 'auth_token';
  private userKey = 'auth_user';

  constructor(private http: HttpClient, private router: Router) { }

  login(request: LoginRequest): Observable<AuthResponse> {
    // Mock Login for Demo
    if (request.email === 'patient@mawiidi.com' && request.password === 'demo123') {
      const mockResponse: AuthResponse = {
        token: 'mock-jwt-token-patient',
        role: 'PATIENT',
        userId: 101
      };
      return of(mockResponse).pipe(
        tap((response: AuthResponse) => {
          this.saveToken(response.token);
          this.saveUser(response);
        })
      );
    }

    return this.http.post<AuthResponse>(`${this.apiUrl}/authenticate`, request).pipe(
      tap(response => {
        this.saveToken(response.token);
        this.saveUser(response);
      })
    );
  }

  register(request: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, request);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.router.navigate(['/login']);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  saveUser(user: AuthResponse): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  getUser(): AuthResponse | null {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
