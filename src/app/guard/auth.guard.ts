import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true; // Permitir acceso si el usuario está autenticado

    } else {
      this.router.navigate(['/login']); // Redirigir al usuario al inicio de sesión si no está autenticado
      return false;
    }
  }
}