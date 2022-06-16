import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }


  get<T>(url: string) {
    return this.http.get<T>(url);
  }

  put<T>(url: string, data: any) {
    return this.http.put<T>(url,data);
  }

  
}
