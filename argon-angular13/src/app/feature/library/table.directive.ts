import { Input, TemplateRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[qdnTable]'
})
export class TableDirective {

  @Input() public name?: string;


  constructor(public temp: TemplateRef<any>) { }

}
