import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidepanelModule } from '../sidepanel/sidepanel.module';

@NgModule({
  declarations: [ContainerComponent],
  exports: [ContainerComponent],
  imports: [CommonModule, SidepanelModule, RouterModule],
})
export class ContainerModule {}
