import { DatePipe } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { employees } from 'src/assets/fixtures/employees';
import { Employee } from 'src/models/employee';
import { CarditemComponent } from '../carditem/carditem.component';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css']
})
export class ListitemsComponent {
  @ViewChild('todayRef') todayRef?:ElementRef;

  @ViewChildren('component')
  cards!: QueryList<CarditemComponent>;

  selectedEmployee?: Employee;
  employees = employees;
  today = new Date();
  datepipe: DatePipe = new DatePipe('en-US')
  text?: any;
  /*firstEmployee = employees[0];
  secondEmployee = employees[1];
  thirdEmployee = employees[2];
  fourthEmployee = employees[3];*/

  constructor(){
    console.log('constructor');
    console.log(this.todayRef?.nativeElement.innerText);
  }

  onEmployeeChecked(employee: Employee){
    this.selectedEmployee = employee;
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
    console.log('today');
    console.log(this.todayRef?.nativeElement.innerText);
    console.log('tomorrow');
    this.text = this.todayRef?.nativeElement.innerText;
    this.text = this.datepipe.transform(new Date(this.today.setDate(this.today.getDate() +1)), 'dd/MM/YYYY');
    console.log(this.text);
    console.log('cards');
    console.log(this.cards);
  }

}