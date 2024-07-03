import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url : string = "https://jsonplaceholder.typicode.com/posts/1/comments"
  constructor(private http:HttpClient){}
  getEmployees(){
    return this.http.get(this.url)
    .pipe(map((response:any) => response.json()))
    .pipe(catchError(this.errorHandler));
        
  }
  errorHandler(error : Response){
    console.error(error);
    return throwError(error || "Server Error" );
  }
}
