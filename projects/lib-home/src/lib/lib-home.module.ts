import { NgModule } from '@angular/core';
import { LibHomeComponent } from './lib-home.component';
import { HomeComponent } from './component/home/home.component';



@NgModule({
  declarations: [
    LibHomeComponent,
    HomeComponent
  ],
  imports: [
  ],
  exports: [
    LibHomeComponent,
    HomeComponent
  ]
})
export class LibHomeModule { }
