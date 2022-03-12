import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Breakpoints } from '@angular/cdk/layout';
import { LayoutService } from './layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  readonly breakpoints = Breakpoints;

  layoutType$!: Observable<string>;

  constructor(private readonly layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutType$ = this.layoutService.layoutType$;
  }
}
