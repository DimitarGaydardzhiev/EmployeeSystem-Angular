import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { Store } from "@ngrx/store"
import { State } from '../store/reducers'
import { ToastrService } from '../services';
import { BaseGuard } from './base.guard';

@Injectable()
export class AdminGuard extends BaseGuard implements CanActivate {
  constructor(private router: Router, public store: Store<State>, private toastr: ToastrService) {
    super(store)
  }

  canActivate(): boolean {
    if (this.isAdmin) {
      return true
    }

    this.toastr.error("You do not have permisions to see this page!")
    this.router.navigate(['home'])
    return false
  }
}