import { Component, Input } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    @Input() isLogged: boolean
    @Input() isAdmin: boolean

    constructor(private router: Router) { }

    openLoginForm() {
        this.router.navigateByUrl('/login')
    }
}
