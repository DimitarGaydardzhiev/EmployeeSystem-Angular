import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'home-card',
  templateUrl: './home-card.component.html'
})

export class HomeCardComponent {
  @Input() disableLink: boolean
  @Input() btnTitle: string
  @Input() description: string
  @Input() title: string
  @Input() route: string
  @Output() routeChange = new EventEmitter<any>();

  onNavigate() {
    this.routeChange.emit(this.route)
  }
}
