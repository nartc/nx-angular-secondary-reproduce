import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'test-secondary-secondary-two',
  templateUrl: './secondary-two.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondaryTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
