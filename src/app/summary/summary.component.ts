import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './expense.service.ts'; // وارد کردن سرویس

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  providers: [ExpenseService], // اضافه کردن سرویس به providers
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  income: number = 0;
  expenses: number = 0;
  remainingAmount: number = 0;

  constructor(private expenseService: ExpenseService) {} // تزریق سرویس

  ngOnInit(): void {
    const data = this.expenseService.getExpensesData();
    this.income = data.income;
    this.expenses = data.expenses;
    this.remainingAmount = this.income - this.expenses;
  }
}
