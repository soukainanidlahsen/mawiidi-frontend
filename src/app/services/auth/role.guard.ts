import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }

  const user = authService.getUser();
  const expectedRoles = route.data['roles'] as Array<string>;

  if (user && expectedRoles.includes(user.role)) {
    return true;
  }

  // Redirect to appropriate dashboard if logged in but wrong role
  if (user) {
    if (user.role === 'ADMIN') router.navigate(['/admin']);
    else if (user.role === 'DOCTOR') router.navigate(['/doctor']);
    else router.navigate(['/patient']);
  } else {
    router.navigate(['/login']);
  }

  return false;
};
