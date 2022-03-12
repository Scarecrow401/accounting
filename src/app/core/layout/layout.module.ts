import { CommonModule } from '@angular/common';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';

@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  imports: [CommonModule, HeaderModule, FooterModule, ContainerModule, SidebarModule],
})
export class LayoutModule {}
