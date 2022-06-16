import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AMEmployee } from '../models/am-employee';
import { ApiCallService } from './api-call.service';

@Injectable({
  providedIn: 'root'
})
export class AMEmployeeService {

  employee?: Array<any> | null =null;


  constructor(private http: ApiCallService) { }



  getAll() {
       
    return new Promise((res, rej) => {
      this.http.get<Array<any>>("https://argon-50195-default-rtdb.firebaseio.com/employess.json").subscribe((resData: Array<any>) => {
        this.employee = resData;
        res(resData);
      });
      
    })

  }

  save(obj: any) {
    return new Observable((o: Observer<Array<any>>) => {
      if (this.employee) {
        let index = this.employee.findIndex((x) => x.id == obj.id);
        if (index > -1) {
          for (let key in obj) {
            if (this.employee[index].hasOwnProperty(key)) {
              this.employee[index][key] = obj[key];
            }

          }
        } else {
          this.employee.sort((a, b) => {
            return a > b ? 1 : -1;
          })
          obj.id = this.employee[0].id + 1;
          this.employee.push(obj);
        }



        this.http.put<Array<any>>("https://argon-50195-default-rtdb.firebaseio.com/employess.json", this.employee).subscribe((res: Array<any>) => {
          debugger
          o.next(res);
        }, (error) => {
          debugger;
          o.error(error)
        })
      }
      else {
        o.error("There is some issue");
      }
      })

  }

  getById(id: number) {
     

    return new Observable((o: Observer<any>) => {

      if (this.employee == null) {
        this.getAll().then((r) => {
          if (this.employee) {
            let index = this.employee.findIndex((x) => x.id == id);
            if (index > -1) {
              o.next(this.employee[index]);
            } else {
              o.next(new AMEmployee());
            }

          } else {
            o.next({});
          }
          
        })
      } else {
        let index = this.employee.findIndex((x) => x.id == id);
        if (index > -1) {
          o.next(this.employee[index]);
        }
      }

      
    })
  }
}
