import { AfterContentInit, AfterViewInit, TemplateRef } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { ContentChildren, Directive, ElementRef, QueryList } from '@angular/core';
import { QdnModelDirective } from './qdn-model.directive';

@Directive({
  selector: '[qdnForm]',
  exportAs: 'qdnForm'
})
export class QdnFormDirective implements AfterContentInit, AfterViewInit {

  @ContentChildren(QdnModelDirective, { descendants: true }) private _control?: QueryList<QdnModelDirective>

  public controls?: any = {};

  constructor(public ele: ElementRef<any>) { }
    ngAfterViewInit(): void {
       
  }

  get isValid() {
    let valid = true;
    this._control?.forEach((e) => {
      valid = valid && e.isValid;
    })
    return valid;
  }
    ngAfterContentInit(): void {
      this._control?.forEach((e) => {
        let name = e.name;
        this.controls[name] = e;
      })

    }
  ngOnInit(): void {
     

  }


 

}
