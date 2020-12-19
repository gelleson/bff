import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bff-shared-padding',
  templateUrl: './padding.component.html',
  styleUrls: ['./padding.component.css']
})
export class PaddingComponent implements OnInit {

  @Input()
  left = '24px';
  @Input()
  right = '24px';

  @Input()
  top = '24px';

  @Input()
  bottom = '24px';

  constructor() { }

  ngOnInit(): void {
  }

  get padding(): string {
    return `${this.top} ${this.right} ${this.bottom} ${this.left}`
  }
}
