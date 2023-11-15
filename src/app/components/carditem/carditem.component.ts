import { Component, ContentChild, ContentChildren, EventEmitter, Input, Output } from '@angular/core';
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

 @ContentChildren('employeeContent1') employeeContent1:any;

 constructor(){

 }

 ngAfterViewInit(){
  console.log('Contenido del employeeContent1');
  console.log(this.employeeContent1);
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
