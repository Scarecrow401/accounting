import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidepanelComponent } from './sidepanel.component';

@NgModule({
  declarations: [SidepanelComponent],
  exports: [SidepanelComponent],
  imports: [CommonModule],
})
export class SidepanelModule {}
