import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    @Input() isLogged: boolean
    @Input() isAdmin: boolean
    @Input() userEmail: string
    @Output() logOut = new EventEmitter<any>();

    constructor(private router: Router) { }

    openLoginForm() {
        this.router.navigateByUrl('/login')
    }

    onLogOut() {
        this.logOut.emit();
    }
}
