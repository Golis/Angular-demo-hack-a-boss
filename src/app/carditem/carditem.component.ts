import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/models/employee';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.css']
})
export class CarditemComponent {
 @Input() employee: any;
 @Output()
 employeeSelected = new EventEmitter<Employee>();

 constructor(){

 }

 onEmployeeChecked(currentEmployee: Employee){
  this.employeeSelected.emit(currentEmployee);
 }

 onCheckRank(rank: string){
  if(rank === "senior"){
    return {'text-decoration': "underline"};
  }
  else{
    return null;
  }
 }


}
