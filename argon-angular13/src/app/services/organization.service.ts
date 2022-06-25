import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ColumnsDetails } from '../models/table-template-model';

const apiUrl = "https://dev.mediawide.com/CMAdminAPI/api/";
   
@Injectable({
  providedIn: 'root',
})

export class OrganizationService {
 
  headers = new HttpHeaders().set('Content-Type', 'application/json');   
  constructor(private http: HttpClient, public router: Router) {}    
  
  getOrganizations(): Observable<any> {
    return this.http.get<any>(apiUrl + "api/Organization", { headers: this.headers}); 
  }

  getOrganizationsData(params: any): Observable<any> {
    return this.http.get<any>(apiUrl + "Organization/GetOrganizationGrid", { headers: this.headers, params: params });
  }

  create(data: any): Observable<any> {
    return this.http.post(apiUrl + 'api/Organization/CreateOrganization', data, { headers: this.headers });  
  }

  

}