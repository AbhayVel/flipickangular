import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from '../../models/Project';
import { CalcService } from '../../services/calc.service';

@Component({
  selector: 'qdn-user-edit-reactive-form',
  templateUrl: './user-edit-reactive-form.component.html',
  styleUrls: ['./user-edit-reactive-form.component.css']
})
export class UserEditReactiveFormComponent implements OnInit {

  @ViewChild('id') idText?: NgModel;
  project: Project = new Project();

  sub?: Subscription;
  constructor(private ac: ActivatedRoute, private router: Router, private ca: CalcService,

    private cd: ChangeDetectorRef

    
  ) { }
  idData?: string='1';
  ngOnInit(): void {
    debugger;
    this.ac.params.subscribe((e) => {
      this.idData = e["id"];
    })

  }
  result?: any = ''
  message?: any = ''

  showTimeCallBack: string='';
  showTimePromise: string='';
  showTimeObservable: string = '';
  isCallBackStop: boolean = true;

  start() {
    this.isCallBackStop = false;
    this.ca.getCallBackTime((r: any) => {
      if (!this.isCallBackStop) {
        this.showTimeCallBack = r;
      }
      
    })

    this.ca.getPromiseTime().then((r: any) => {
      this.showTimePromise = r;
    })

 this.sub=   this.ca.getObsTime().subscribe((r: any) => {
      this.showTimeObservable = r;
    })

  }


  stop() {
    this.sub?.unsubscribe();
    this.isCallBackStop = true;
  }

  calculate_o(a: any, b: any) {
   this.ca.calculatObservable(a, b).subscribe((res: any) => {
      console.log("I am inside Obs res");
      this.result = res;
      this.message = '';
    },(err) => {
      this.result = '';
      this.message = err;
    })
    console.log("I am after Obs");
    //this.ca.calculatObservable(a, b).toPromise()
    //.then((res: any) => {
    //  this.result = res;
    //  this.message = '';
    //}).catch((err) => {
    //  this.result = '';
    //  this.message = err;
    //})
  }


 async calculate(a: any, b: any) {
    //this.ca.calculatPromise(a, b)
    
    //  .then((res: any) => {
    //    console.log("I am inside Promise res");
    //  this.result = res;
    //  this.message = '';
    //}).catch((err) => {
    //  this.result = '';
    //  this.message = err;
    //})

    this.result =await this.ca.calculatPromise(a, b);

    console.log("I am after Promise");
  }

  calculateCallBack(a: any, b: any) {  
   this.ca.calculatCallBack(a, b, (err: any) => {
      debugger;
      this.message = err;
      this.cd.detectChanges();
    },
      (res: any) => {
        debugger;
        this.result = res;
        this.cd.detectChanges();
      }
    );
  }


  calculate_Try(a: any, b: any) {
    try {
      this.result = this.ca.calculat(a, b);
    } catch (ex) {
      this.message = ex;
    }

  }

  save() {
    this.router.navigate(['user', 'edit', this.idText?.value]);
  }

}
