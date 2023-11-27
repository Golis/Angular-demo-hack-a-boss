import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/models/employee';

@Injectable({
  providedIn: 'root'
})
export class MockServiceService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any>{
    return this.http.get<Employee[]>('../assets/fixtures/employees.json');
  }
}
