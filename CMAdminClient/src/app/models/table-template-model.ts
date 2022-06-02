export class ColumnsDetails
{
    name:string ="";
    displayName:string ="";
    html: boolean = false;
    htmlName:string ="";
    type:string ="";
    isSorting: boolean = false;
    filter: FilterConfig = new FilterConfig();
}

export class FilterConfig
{
    isFiltering: boolean = false;
    filterType: string ="";
    filterName: string ="";
    filterFrom: string ="";
    filterTo: string ="";
}




