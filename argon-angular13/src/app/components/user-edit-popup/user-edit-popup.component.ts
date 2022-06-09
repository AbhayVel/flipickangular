import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/Project';

@Component({
  selector: 'qdn-user-edit-popup',
  templateUrl: './user-edit-popup.component.html',
  styleUrls: ['./user-edit-popup.component.css']
})
export class UserEditPopupComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ViewChild("form") form: any;
  @Input() project: Project = new Project();
  constructor() { }
    ngAfterViewInit(): void {
      debugger;
    }
    ngAfterContentInit(): void {
      debugger;
    }

  error: any = {

  }

  ngOnInit(): void {
    debugger;
  }

  binderEvent($event: any) {
    this.binder($event.target, this.project);
  }

  validate($event :any) {
    let value = $event.target;
    //debugger;

    this.validateFormElement($event.target, this.error);
    
  }

  binder(element: any,currentObject: any) {
    let value = element.value;
    let name = element.name
    currentObject[name] = value;

  }

  validateForm(form: any, error: any) {
    let allElement = form.querySelectorAll("[qdn-model]");
    let isElementSetFoucs = false;
    for (var i = 0; i < allElement.length; i++) {
      let isValid = this.validateFormElement(allElement[i], error);
      if (!isValid && !isElementSetFoucs) {
        isElementSetFoucs = true;
        allElement[i].focus();
      }
    }

  }

  validateFormElement(element: any, error: any) {
    let value = element.value;
    let name = element.name
    let counter = 0;
    error[name] = {
      message: []
    };
    if (element.validity.valueMissing) {
      error[name]["requried"] = true;
      error[name].message.push(`${name} is required`);
      
    }
    let minValue = element.getAttribute("min");
    if (minValue) {
      if (+value < +minValue) {
        error[name]["min"] = true;
        error[name].message.push(`${name} should be minimum ${minValue}`);
      }
    }

    let maxValue = element.getAttribute("max");
    if (maxValue) {
      if (+value > +maxValue) {
        error[name]["max"] = true;
        error[name].message.push(`${name} should be maximum ${maxValue}`);
      }
    }
     
    if (Object.entries(error[name]).length == 1) {
      delete error[name];
      return true;
    }
    return false;
  }


  save() {
    this.validateForm(this.form.nativeElement, this.error);
    if (Object.entries(this.error).length == 0) {
      console.log("I will save.");
    }
    else {
      console.log("There is error.");
    }
  }
  


}
