import { Pipe, PipeTransform } from '@angular/core';
import { Expense } from '../expense/expense.class';

@Pipe({
  name: 'expenseSearch'
})
export class ExpenseSearchPipe implements PipeTransform {

  transform(exps: Expense[], search: string = ""): Expense[] {
    if(search.length == 0)
      return exps;
    search = search.toLowerCase();
    let selectedEmployees: Expense[] = [];
    for(let e of exps) {
      if(
        e.id.toString().includes(search) 
        || e.description.toLowerCase().includes(search)
        || e.status.toLowerCase().includes(search)
        || e.total.toString().includes(search)
        ) {
            selectedEmployees.push(e);
          }
    }
    return selectedEmployees;
  }

}
