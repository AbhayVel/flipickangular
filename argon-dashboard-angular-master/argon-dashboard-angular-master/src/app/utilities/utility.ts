
export function sort(list: Array<any>, columnName: string, orderBy: number , columnType: string, condition : any)
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
    } else {
      return a[columnName] > b[columnName] ? -1 * orderBy : 1 * orderBy;
    }
});
}
