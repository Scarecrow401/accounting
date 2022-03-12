import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { InputNumberModule } from 'primeng/inputnumber';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, InputNumberModule, DropdownModule],
})
export class HomeModule {}
