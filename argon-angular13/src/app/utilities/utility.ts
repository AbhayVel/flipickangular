import { formatDate } from "@angular/common";

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
