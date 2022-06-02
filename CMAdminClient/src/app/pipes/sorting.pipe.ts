import { Pipe, PipeTransform } from '@angular/core';
import { SortModel } from '../models/sort-model';
import { sort } from '../utilities/utility';

@Pipe({
  name: 'sorting',
  pure: false
})
export class SortingPipe implements PipeTransform {

  transform(list: Array<any>,sortObj:SortModel) {
      return sort(list,sortObj.columnName,sortObj.orderBy,sortObj.sortType, sortObj.condition);
  }
}


//5+1
/*
Primitive ->
string
number
boolean
null
undefined
*/

/*
Object
*/

//Es6->
//5+1+1
/*
Symbol
*/
//5+1+1+1
//any
//unknown



