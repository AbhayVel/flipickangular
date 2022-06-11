import { HostBinding, HostListener } from '@angular/core';
import { OnInit } from '@angular/core';
import { Directive, ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[qdnModel]',
  exportAs: 'qdnModel'
})
export class QdnModelDirective implements OnInit {
  public error?: any = {};

  @Input('qdnModel') model?: any;
  name: string = '';
  constructor(public ele: ElementRef<any>) { }

  @HostBinding('class.qdn-invalid') get Valid() { return !this.isValid}


  ngOnInit(): void {
    debugger;
    this.name = this.ele.nativeElement.getAttribute("name")
    this.ele.nativeElement.value = this.model[this.name];

    }

  public isValid: boolean = true;

  @HostListener('input', ['$event'])
  binderEvent($event: any) {
    this.binder($event.target, this.model);
  }

  binder(element: any, currentObject: any) {
    let value = element.value;
    let name = element.name
    currentObject[name] = value;
  }


  @HostListener('blur', ['$event'])
  validate($event: any) {
   
    let value = $event.target;
    //debugger;

    this.validateFormElement($event.target, this.error);
  }


  validateFormElement(element: any, error: any) {
    let value = element.value;
    let name = element.name
    let counter = 0;
    error = {
      message: []
    };
    if (element.validity.valueMissing) {
      error["requried"] = true;
      error.message.push(`${name} is required`);

    }
    let minValue = element.getAttribute("min");
    if (minValue) {
      if (+value < +minValue) {
        error["min"] = true;
        error.message.push(`${name} should be minimum ${minValue}`);
      }
    }

    let maxValue = element.getAttribute("max");
    if (maxValue) {
      if (+value > +maxValue) {
        error["max"] = true;
        error.message.push(`${name} should be maximum ${maxValue}`);
      }
    }

    if (Object.entries(error).length == 1) {
      error.message = [];
      
      this.isValid = true;
      return true;
    }
    this.error = error;
    this.isValid = false;
    return false;
  }



}
