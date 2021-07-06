import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryOneComponent } from './secondary-one.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SecondaryOneComponent
  ],
  exports: [
    SecondaryOneComponent
  ],
})
export class MyLibSecondaryOneModule {}
