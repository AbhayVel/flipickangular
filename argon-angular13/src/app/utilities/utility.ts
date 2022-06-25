import { formatDate } from "@angular/common";
import { PagingAccess } from "../models/am-employee";

export function sort(list: Array<any>, columnName: any, orderBy: number , columnType: string, condition : any)
{
  return list.sort((a, b) => {  //callback function

    if (condition != null) {
      console.log("I am in condition");
      return condition(a, b, orderBy);
    }
    if (columnType == 'num' || columnType == 'cs') {
      return a[columnName] > b[columnName] ? -1 * orderBy : 1 * orderBy;
    } else if (columnType == 'ci') {    //
      return a[columnName].toLowerCase() > b[columnName].toLowerCase() ? -1 * orderBy : 1 * orderBy;
    }
    else if (columnType == 'date') {
      let date1 = new Date(a[columnName]);
      let date2 = new Date(b[columnName]);
      return formatDate(date1,'yyyy-MM-dd','en_US') > formatDate(date2,'yyyy-MM-dd','en_US') ? -1 * orderBy : 1 * orderBy;
    } else {
      return a[columnName] > b[columnName] ? -1 * orderBy : 1 * orderBy;
    }
});
}



export function filterFun(filterObject: any, ) {
  let rows = filterObject.data;
  for (var key in filterObject.filter) {
    let val = filterObject.filter[key].value;
    let col = filterObject.filter[key].columnName;
    if (val == '') {
      continue;
    }
    rows = rows.filter((e: any) => {   
      if (filterObject.filter[key].type == 'cs') {
        return e[col].indexOf(val) > -1;
      } else if (filterObject.filter[key].type == 'numGte') {
        return e[col] >= val;
      } else if (filterObject.filter[key].type == 'numLte') {
        return e[col] <= val;
      }else  if (filterObject.filter[key].type == 'date') {
        let date1 = new Date(e[col]);
        let date2 = new Date(val);
        if (formatDate(date1,'yyyy-MM-dd','en_US') == formatDate(date2,'yyyy-MM-dd','en_US')) 
        {
          return true;
        }
        else { return false;}
      }else if (filterObject.filter[key].type == 'dteGte') {
        let date1 = new Date(e[col]);
        let date2 = new Date(val);
        if (formatDate(date1,'yyyy-MM-dd','en_US') >= formatDate(date2,'yyyy-MM-dd','en_US')) 
        {
          return true;
        }
        else { return false;}      
      }
      else if (filterObject.filter[key].type == 'dteLte') {
        let date1 = new Date(e[col]);
        let date2 = new Date(val);
        if (formatDate(date1,'yyyy-MM-dd','en_US') <= formatDate(date2,'yyyy-MM-dd','en_US')) 
        {
          return true;
        }
        else { return false;}      
      }
       else {
        return e[col] == val;
      }
    })
  }
  filterObject.rows = rows;
  
}



export function deepCopy<T>(instance: T): T {
  if (instance == null) {
    return instance;
  }

  // handle Dates
  if (instance instanceof Date) {
    return new Date(instance.getTime()) as any;
  }

  // handle Array types
  if (instance instanceof Array) {
    var cloneArr = [] as any[];
    (instance as any[]).forEach((value) => { cloneArr.push(value) });
    // for nested objects
    return cloneArr.map((value: any) => deepCopy<any>(value)) as any;
  }
  // handle objects
  if (instance instanceof Object) {
    var copyInstance = {
      ...(instance as { [key: string]: any }
      )
    } as { [key: string]: any };
    for (var attr in instance) {
      if ((instance as Object).hasOwnProperty(attr))
        copyInstance[attr] = deepCopy<any>(instance[attr]);
    }
    return copyInstance as T;
  }
  // handling primitive data types
  return instance;
}


export function getFilterForFilterObject(columns: any)
{
  var filters = [];
  for(var i= 0; i< columns.length; i++)
  {
    //debugger
    var colName = columns[i].name.toString();
    var filterType = columns[i].filter.filterType;
    var type = columns[i].type;
    if(filterType =="range")
    {
      if(type == "num")
      {
        var filterFrom= columns[i].filter.filterFrom; 
        let filterobj1= { [filterFrom]: { 'columnName' : colName, 'value' : '', type: 'numGte' }};
        filters.push(filterobj1);
        var filterTo= columns[i].filter.filterTo;
        let filterObj2= { [filterTo]: { 'columnName' : colName, 'value' : '', type: 'numLte' }};
        filters.push(filterObj2);
      }
    }
    else if(filterType =="daterange")
    {
      if(type == "date")
      {
        filterFrom= columns[i].filter.filterFrom; 
        let filterobj1= { [filterFrom]: { 'columnName' : colName, 'value' : '', type: 'dteGte' }};
        filters.push(filterobj1);
        filterTo= columns[i].filter.filterTo;
        let filterObj2= { [filterTo]: { 'columnName' : colName, 'value' : '', type: 'dteLte' }};
        filters.push(filterObj2);
      }
    }
    else
    {
      let filter= { [colName]: { 'columnName' : colName, 'value' : '', type: columns[i].type }};
      filters.push(filter);
    }
  }
  var obj = filters.reduce((a, b) => Object.assign(a, b), {});  
 // console.log('fiterObj: ' + JSON.stringify(obj));
  return  obj;
}

export function getAccessListFunction(filterObject: any)
{
  filterObject.pagingAccessList = [];
  var totalPages = Math.ceil(filterObject.rows.length / filterObject.pageSize);
  if (totalPages > 1)
  {
      for (var i = 1; i <= totalPages; i++)
      {
          var obj = new PagingAccess();
          obj.key = i;
          obj.value = i.toString();
          filterObject.pagingAccessList.push(obj);
      }
  }
  else
  {
    var obj = new PagingAccess();
      obj.key = 1;
      obj.value = "1";
      filterObject.pagingAccessList.push(obj);
  }
  return filterObject.pagingAccessList;
}