export function sort(list:Array<any>,columnName:string,orderBy:number,columnType:string){
    list.sort((a, b) => {
        if (columnType == 'num' || columnType == 'cs') {
            return a[columnName] > b[columnName] ? -1 * orderBy : 1 * orderBy;
        }
        else if (columnType == 'ci') {
            return a[columnName].toLowerCase() > b[columnName].toLowerCase() ? -1 * orderBy : 1 * orderBy;
        }
    });
}