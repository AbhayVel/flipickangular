import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {

  transform(value: string, id: any): string {
debugger;
    return `(${id})-${value}` ;
  }

}
