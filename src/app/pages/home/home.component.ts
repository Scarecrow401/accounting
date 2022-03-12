import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public categories = [
    { id: 0, name: 'Образование' },
    { id: 1, name: 'Еда' },
    { id: 2, name: 'Такси' },
    { id: 3, name: 'Прочее' },
  ];

  selectedCategory;
  cost;

  constructor() {}

  ngOnInit(): void {}
}
