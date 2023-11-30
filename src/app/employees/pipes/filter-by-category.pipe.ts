import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from "src/models/employee";

@Pipe({
    name:'FilterByCategoryPipe'
})
export class FilterByCategoryPipe implements PipeTransform{
    transform(employees: Employee[], rank: string) {
        return employees.filter(employee => employee.rank === rank);
    }
}