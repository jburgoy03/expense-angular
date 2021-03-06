import { Employee } from "../employee/employee.class";
import { ExpenseLine } from "../expenseline/expenseline.class";

export class Expense {
    id: number = 0;
    description: string = "";
    status: string = "NEW";
    total: number = 0;
    
    employeeId: number = 0;
    employee!: Employee;

    expenseLines!: ExpenseLine[];

    employeeName: string = "";
}