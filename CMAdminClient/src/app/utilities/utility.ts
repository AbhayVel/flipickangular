import { PagingAccess } from "../models/pagingaccess";

export function sort(list: Array<any>, columnName: any, orderBy: number , columnType: string, condition : any)
{
  return list.sort((a, b) => {  //callback function
    if (condition != null) {
      console.log("I am in condition");
      return condition(a, b, orderBy);
    }
    if(columnType == 'num')
    {
      return parseInt(a[columnName]) > parseInt(b[columnName]) ? -1 * orderBy : 1 * orderBy;
    }
    else if (columnType == 'cs') {
      return a[columnName] > b[columnName] ? -1 * orderBy : 1 * orderBy;
    } else if (columnType == 'cin') {    //
      return a[columnName].toLowerCase() > b[columnName].toLowerCase() ? -1 * orderBy : 1 * orderBy;
    } else {
      return a[columnName] > b[columnName] ? -1 * orderBy : 1 * orderBy;
    }
});
}

export function filterFunction(filterObject: any)
{

  let rows = filterObject.data;    
  for( var key in filterObject.filter)
  {
    let val = filterObject.filter[key].value;
    let col = filterObject.filter[key].columnName;
    if(val == ''){continue;}
    rows = rows.filter((e: any) =>{
      //debugger;
      if(filterObject.filter[key].type == 'cs')
      {
        return e[col].indexOf(val) > -1;
      }
      else if(filterObject.filter[key].type == 'numGte')
      {
        return parseInt(e[col]) >= parseInt(val);
      }
      else if(filterObject.filter[key].type == 'numLte')
      {
        return parseInt(e[col]) <= parseInt(val);
      }
      else { return e[col] == val; }
    })
  }    
  filterObject.rows = rows;
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
    else
    {
      let filter= { [colName]: { 'columnName' : colName, 'value' : '', type: columns[i].type }};
      filters.push(filter);
    }
  }
  var obj = filters.reduce((a, b) => Object.assign(a, b), {});  
  console.log('fiterObj: ' + JSON.stringify(obj));
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

