import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-secondary-secondary-one',
  templateUrl: 'secondary-one.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondaryOneComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
