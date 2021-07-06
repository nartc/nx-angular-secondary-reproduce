import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyLibSecondaryOneModule } from '@my/my-lib/secondary-one';
import { SecondaryTwoComponent } from './secondary-two.component';

@NgModule({
  imports: [CommonModule, MyLibSecondaryOneModule],
  declarations: [
    SecondaryTwoComponent
  ],
  exports: [
    SecondaryTwoComponent
  ]
})
export class MyLibSecondaryTwoModule {
}
