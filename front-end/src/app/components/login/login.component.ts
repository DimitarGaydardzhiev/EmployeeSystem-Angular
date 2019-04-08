import { Component } from "@angular/core"
import { Store } from "@ngrx/store";
import { State } from "../../core/store/reducers";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { BaseComponent } from "../../shared/components/base.component";
import { LoginAction } from "../../core/store/actions/auth.actions";
import { getAuthState } from "../../core/store/reducers";

@Component({
  templateUrl: "./login.component.html"
})
export class LoginComponent extends BaseComponent {
  form: FormGroup
  error: string

  constructor(
    public store: Store<State>,
    fb: FormBuilder) {
    super(store)

    this.form = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })

    store.select(getAuthState).takeWhile(data => this.isAlive).subscribe(state => {
      this.error = state.error
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.authenticate(this.form.value)
    } else {
      this.error = 'invalid form'
    }
  }

  authenticate(user) {
    this.store.dispatch(new LoginAction(user))
  }
}
