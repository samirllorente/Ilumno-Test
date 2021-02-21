import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';

@NgModule({
  declarations: [NewComponent],
  imports: [
    CommonModule,
    MatCardModule,
    NewRoutingModule
  ]
})
export class NewModule { }
