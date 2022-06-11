import { AfterContentInit, AfterViewInit, TemplateRef } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { ContentChildren, Directive, ElementRef, QueryList } from '@angular/core';
import { QdnModelDirective } from './qdn-model.directive';

@Directive({
  selector: '[qdnForm]',
  exportAs: 'qdnForm'
})
export class QdnFormDirective implements AfterContentInit, AfterViewInit {

  @ContentChildren(QdnModelDirective) controls?: QueryList<QdnModelDirective>

  @ContentChildren("[qdnModel]") controls2?: QueryList<QdnModelDirective>

  @ViewChildren(QdnModelDirective) controlView?: QueryList<QdnModelDirective>

  constructor(public ele: ElementRef<any>) { }
    ngAfterViewInit(): void {
       
    }
    ngAfterContentInit(): void {
      debugger;

    }
  ngOnInit(): void {
     

  }


 

}
