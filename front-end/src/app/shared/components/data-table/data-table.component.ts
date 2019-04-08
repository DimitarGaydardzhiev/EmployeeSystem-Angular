import { Component, Input, AfterViewInit, OnInit } from '@angular/core'

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html'
})

export class DataTableComponent implements OnInit {
  @Input() data: any[]

  ngOnInit(): void {
    console.log(this.data)
  }
}
