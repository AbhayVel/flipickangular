import { Injectable } from '@angular/core';
import { Observable, observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }


  getObsTime() {
    return new Observable((o: Observer<any>) => {
      setInterval(() => {
        o.next(new Date())
      }, 1000);
    });
  }

  getPromiseTime() {
    return new Promise((succsess: any) => {
      setInterval(() => {
        succsess(new Date())
      }, 1000);
    });
  }

  getCallBackTime(succsess:any) {
    
      setInterval(() => {
        succsess(new Date())
      }, 1000);
  
  }


  public calculatObservable(a: any, b: any) {


    return new Observable((o: Observer<any>) => {
      console.log("I am inside Obs");
      if (b == 0) {
        o.error("b should not be zero");
      } else {
        o.next(a / b);
      }

      o.complete();
    })



  }



  public calculatPromise(a: any, b: any) {

    
    return new Promise((success, error) => {
      console.log("I am in Promise");
      if (b == 0) {
        error("b should not be zero");
      } else {
        success(a / b);
      }
    })

   

  }

  public calculatCallBack(a: any, b: any, error: any, success: any) {
    if (b == 0) {
      error("b should not be zero");
    } else {
      success(a / b);
    }
   
  }

  public calculat(a: any, b: any) {
    if (b == 0) {
      throw "b should not be zero";
    }
    return a / b;
  }
}
