import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'other'
})
export class OtherPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value} x`;
  }

}