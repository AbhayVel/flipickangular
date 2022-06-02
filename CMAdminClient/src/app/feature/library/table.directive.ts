import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[cmadminTable]'
})
export class TableDirective {

  @Input() public name?: string;

  constructor(public temp: TemplateRef<any>) { }

}
