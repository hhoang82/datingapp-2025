import { HttpInterceptorFn } from '@angular/common/http';
import { AccountService } from '../services/account-service';
import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const acccountService = inject(AccountService)

  const user = acccountService.currentUser();

  if (user) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${user.token}`
      }
    })
  }

  return next(req);
};
