import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListitemsComponent } from './listitems/listitems.component';
import { CarditemComponent } from './carditem/carditem.component';
import { FilterByCategoryPipe } from './pipes/filter-by-category.pipe';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslateService } from '../services/translate.service';



@NgModule({
  declarations: [
    ListitemsComponent,
    CarditemComponent,
    FilterByCategoryPipe,
    TranslatePipe
  ],
  imports: [
    CommonModule
  ],
  providers:[
    TranslateService
  ]
})
export class EmployeesModule { }
