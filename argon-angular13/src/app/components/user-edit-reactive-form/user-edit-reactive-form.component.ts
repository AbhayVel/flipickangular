import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {   Observable, Observer, Subscription } from 'rxjs';
import { Project } from '../../models/Project';
import { CalcService } from '../../services/calc.service';

import { interval, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Call } from '@angular/compiler/src/expression_parser/ast';
import { ProductService } from '../../services/product.service';

 
@Component({
  selector: 'qdn-user-edit-reactive-form',
  templateUrl: './user-edit-reactive-form.component.html',
  styleUrls: ['./user-edit-reactive-form.component.css']
})
export class UserEditReactiveFormComponent implements OnInit {

  ProjectFormGroup?: FormGroup;

  @ViewChild('id') idText?: NgModel;
  project: Project = new Project();

  sub?: Subscription;
  constructor(private ac: ActivatedRoute, private router: Router, private ca: CalcService,

    private cd: ChangeDetectorRef, private productServce: ProductService

    
  ) { }
  idData?: number;
  ngOnInit(): void {
    debugger;
    this.ac.params.subscribe((e) => {
      this.idData = +e["id"];
      this.productServce.getById(this.idData).subscribe((project) => {
        this.project = project;
        this.setForm(project);
      })
    })

  }


  setForm(project: Project) {
   
    this.ProjectFormGroup = new FormGroup({
      id: new FormControl(project.id, [Validators.required, Validators.min(3)]),
      project: new FormControl({value: project.project, disabled: true }, [Validators.required])
    })
  }

  removeValidator() {
    this.ProjectFormGroup?.get("id")?.clearValidators();
    this.ProjectFormGroup?.get("id")?.markAsPristine();
  }
  addValidator() {
    this.ProjectFormGroup?.get("id")?.addValidators([Validators.required, Validators.min(3)])
    this.ProjectFormGroup?.get("id")?.markAsDirty();
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
 }, (error) => {

 }, () => {
   console.log("I am in complete");
 })

  }

  intervalCall() {
 //this.ca.myInterval(1000).subscribe((r) => {
 //     console.log(r);
 //})
    this.ca.myOf(1, 3, 5, 9, 8, 19).pipe(map((t) => t * 2), filter((x: number) => x < 15)).subscribe((r: number) => {
      console.log(r);
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
    debugger;
   // this.router.navigate(['user', 'edit', this.idText?.value]);
  }

}
