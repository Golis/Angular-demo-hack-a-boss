import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
//import { employees } from 'src/assets/fixtures/employees';
import { Employee } from 'src/models/employee';
import { CarditemComponent } from '../carditem/carditem.component';
import { Observable, Subscription } from 'rxjs';
import { MockServiceService } from 'src/app/services/mock-service.service';
import { TranslateService } from 'src/app/services/translate.service';

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
  employees: any;
  employees$?: Observable<Employee[]>;
  today = new Date();
  datepipe: DatePipe = new DatePipe('en-US')
  text?: any;
  subscription?: Subscription;
  /*firstEmployee = employees[0];
  secondEmployee = employees[1];
  thirdEmployee = employees[2];
  fourthEmployee = employees[3];*/

  constructor(private mockService: MockServiceService,
    private cd: ChangeDetectorRef,
    private translateService: TranslateService){
    console.log(this.todayRef?.nativeElement.innerText);
  }

  ngOnInit(){
    //this.employees$ = this.mockService.getEmployees();
    this.subscription = this.mockService.getEmployees().subscribe(
      data=> {
        this.employees = data;
      }
    )

    this.translateService.use('eng', undefined);
  }

  /*ngDoCheck(){
    this.cd.markForCheck();
  }*/

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


  onEdit(){
    this.employees[0].name='Push Test';
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
