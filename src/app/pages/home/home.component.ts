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
    { id: 3, name: 'Кредит' },
    { id: 4, name: 'Прочее' },
  ];

  items = [
    { selectedCategory: this.categories[1], cost: 1200 },
    { selectedCategory: this.categories[0], cost: 25000 },
    { selectedCategory: this.categories[2], cost: 4215 },
    { selectedCategory: this.categories[3], cost: 22000 },
    { selectedCategory: this.categories[4], cost: 12530 },
  ];

  total: number;
  balance: number;
  salary = 80000;

  constructor() {}

  ngOnInit(): void {
    this.items.reduce((acc, item) => (this.total = acc += item.cost), 0);
    this.balance = this.salary - this.total;
  }
}
