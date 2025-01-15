// add-expense.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from './expense.service';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
})
export class AddExpenseComponent {
  expenseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private expenseService: ExpenseService
  ) {
    this.expenseForm = this.fb.group({
      income: ['', Validators.required],
      expenses: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.expenseForm.valid) {
      const income = this.expenseForm.value.income;
      const expenses = this.expenseForm.value.expenses;

      // ذخیره داده‌ها در سرویس
      this.expenseService.setExpensesData(income, expenses);

      // هدایت به صفحه خلاصه
      this.router.navigate(['/summary']);
    }
  }
}
