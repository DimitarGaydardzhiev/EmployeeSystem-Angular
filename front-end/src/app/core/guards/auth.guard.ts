import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { Store } from "@ngrx/store"
import { State } from '../store/reducers'
import { ToastrService } from 'ngx-toastr';
import { BaseGuard } from './base.guard';

@Injectable()
export class AuthGuard extends BaseGuard implements CanActivate {
  constructor(private router: Router, public store: Store<State>, private toastr: ToastrService) {
    super(store)
  }

  canActivate(): boolean {
    if (this.isLogged) {
      return true
    }

    this.toastr.error("Please login see this page!")
    this.router.navigate(['login'])
    return false
  }
}