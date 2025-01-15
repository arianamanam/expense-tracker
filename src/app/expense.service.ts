export class ExpenseService {
  private expenses: Expense[] = [];

  getExpenses() {
    return this.expenses;
  }

  addExpense(expense: Expense) {
    this.expenses.push(expense);
  }
}
