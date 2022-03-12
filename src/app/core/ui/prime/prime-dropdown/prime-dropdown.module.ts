import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { PrimeDropdownComponent } from './prime-dropdown.component';

@NgModule({
  declarations: [PrimeDropdownComponent],
  exports: [PrimeDropdownComponent],
  imports: [CommonModule, DropdownModule],
})
export class PrimeDropdownModule {}
