import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, EventEmitter, Input, Output } from '@angular/core';
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
  console.log('constructor');
  console.log(this.employee);
 }

 ngOnChanges(changes: any){
  console.log('ngOnChanges', changes);
 }

 ngOnInit(){
  console.log('ngOnInit');
  console.log('Método importante para conectar por primera vez con backend o modificar un Input');
  console.log(this.employee);
 }

 ngDoCheck(){
  console.log('ngDoCheck');
  console.log('Buen método para implementar cualquier lógica de detección manual de cambios');
 }

 ngAfterContentInit(){
  console.log('ngAfterContentInit');
  console.log('Buen método para inicializar cualquier variable que guarde relación con @ContentChild o @Contenchildren');
 }

 ngAfterContentChecked(){
  console.log('ngAfterContentChecked');
  console.log('Se llama cada vez que se ejecuta el ngOnchanges. Es el lugar en donde Angular verifica el contenido del componente antes de que la vista sea renderizada');
 }

 ngAfterViewInit(){
  console.log('Contenido del employeeContent1');
  console.log('Buen método para inicializar cualquier variable que guarde relación con @ViewChild @ViewChildren');

  console.log(this.employeeContent1);
 }

 ngAfterViewChecked(){
  console.log('ngAfterViewChecked');
  console.log('Se llama siempre tras el ngContentChecked. Buen método para realizar cualquier modificación en el DOM');
 }

 ngOnDestroy(){
  console.log('ngOnDestroy');
  console.log('Buen método para liberar memoria de las suscripciones que hemos realizado');
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
