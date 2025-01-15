import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private income: number = 0;
  private expenses: number = 0;

  setExpensesData(income: number, expenses: number): void {
    this.income = income;
    this.expenses = expenses;
  }

  getExpensesData() {
    return { income: this.income, expenses: this.expenses };
  }
}
