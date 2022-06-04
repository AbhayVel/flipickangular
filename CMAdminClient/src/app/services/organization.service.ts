import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ColumnsDetails } from '../models/table-template-model';
const apiUrl = `${environment.apiUrl}`;
   
@Injectable({
  providedIn: 'root',
})

export class OrganizationService {
 
    headers = new HttpHeaders().set('Content-Type', 'application/json');
   
    constructor(private http: HttpClient, public router: Router) {}
    
    getOrganizations(): Observable<any> {
      return this.http.get<any>(apiUrl + "api/Organization", { headers: this.headers}); 
   }
    getOrganizationColumns(): Observable<any> {
      return this.http.get<any>(apiUrl + "api/Organization/GetOrganizationColumns", { headers: this.headers});
    }
  
    getOrganizationsData(params: any): Observable<any> {
      return this.http.get<any>(apiUrl + "api/Organization/GetOrganizationRows", { headers: this.headers, params: params });
    
    }

    

    organizationsData: Array<any> = [
        {
            srNo: 1,
            groupConfigLabel: "HBI",
            instituteLabelConfig: "7",
            instructorLabelConfig: "12",
            subScribeStudentLabelConfig: "4",
            trialStudentLabelConfig: "0",
            paidStudentCnt: "4",
            row: "1",
            totalRowCount: "397"
        },
        {
            srNo: 2,
            groupConfigLabel: "Altru Health System",
            instituteLabelConfig: "8",
            instructorLabelConfig: "12",
            subScribeStudentLabelConfig: "4",
            trialStudentLabelConfig: "0",
            paidStudentCnt: "4",
            row: "1",
            totalRowCount: "397"
        },
        {
            srNo: 3,
            groupConfigLabel: "Benefis Health System",
            instituteLabelConfig: "9",
            instructorLabelConfig: "11",
            subScribeStudentLabelConfig: "4",
            trialStudentLabelConfig: "0",
            paidStudentCnt: "4",
            row: "1",
            totalRowCount: "397"
        },
        {
            srNo: 4,
            groupConfigLabel: "Avita Health System",
            instituteLabelConfig: "7",
            instructorLabelConfig: "16",
            subScribeStudentLabelConfig: "5",
            trialStudentLabelConfig: "0",
            paidStudentCnt: "4",
            row: "1",
            totalRowCount: "397"
        },
        {
            srNo: 5,
            groupConfigLabel: "Charles Cole Memorial Hospital",
            instituteLabelConfig: "7",
            instructorLabelConfig: "17",
            subScribeStudentLabelConfig: "2",
            trialStudentLabelConfig: "0",
            paidStudentCnt: "4",
            row: "1",
            totalRowCount: "397"
        },
        {
            srNo: 6,
            groupConfigLabel: "Coulee Medical Center",
            instituteLabelConfig: "7",
            instructorLabelConfig: "18",
            subScribeStudentLabelConfig: "3",
            trialStudentLabelConfig: "0",
            paidStudentCnt: "4",
            row: "1",
            totalRowCount: "397"
        },
        {
            srNo: 7,
            groupConfigLabel: "Children's Healthcare of Atlanta",
            instituteLabelConfig: "7",
            instructorLabelConfig: "19",
            subScribeStudentLabelConfig: "3",
            trialStudentLabelConfig: "0",
            paidStudentCnt: "4",
            row: "1",
            totalRowCount: "397"
        }
    ]
  
  
  Columns: Array<ColumnsDetails>=[
            {
              name: "srNo",
              displayName: "Sr. No.",
              html: false,
              htmlName: "",
              type: "num",
              isSorting: true,
              filter: { isFiltering: true, filterType: "input", filterName: "srNo", filterFrom: "", filterTo: ""}
            },
            {
              name: "groupConfigLabel",
              displayName: "Organization Name",
              html: false,
              htmlName: "",
              type: "cs",
              isSorting: true,
              filter: { isFiltering: true, filterType: "input", filterName: "groupConfigLabel", filterFrom: "", filterTo: ""}
            },
            {
              name: "instituteLabelConfig",
              displayName: "#Facility(s)",
              html: false,
              htmlName: "",
              type: "num",
              isSorting: false,
              filter: { isFiltering: true, filterType: "input", filterName: "instituteLabelConfig", filterFrom: "", filterTo: ""}
            },
            {
              name: "instructorLabelConfig",
              displayName: "#Admin User(s)",
              html: false,
              htmlName: "",
              type: "num",
              isSorting: false,
              filter: { isFiltering: true, filterType: "range", filterName: "instructorLabelConfig", filterFrom: "instructorLabelConfigFrom", filterTo: "instructorLabelConfigTo"}
            },
            {
              name: "subScribeStudentLabelConfig",
              displayName: "#Subscribed Member",
              html: false,
              htmlName: "",
              type: "num",
              isSorting: false,
              filter: { isFiltering: false, filterType: "input", filterName: "subScribeStudentLabelConfig", filterFrom:"", filterTo: ""}
            },
            {
              name: "trialStudentLabelConfig",
              displayName: "#Trial Member",
              html: false,
              htmlName: "",
              type: "num",
              isSorting: false,
              filter: { isFiltering: false, filterType: "input", filterName: "trialStudentLabelConfig", filterFrom: "", filterTo: ""}
            }
          ];

}