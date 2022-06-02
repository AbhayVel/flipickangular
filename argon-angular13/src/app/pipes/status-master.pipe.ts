import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusMaster'
})
export class StatusMasterPipe implements PipeTransform {

  status =[
    {
      id:1,
      name: "pending"
    },
    {
      id:2,
      name: "completed"
    },
    {
      id:3,
      name: "inprogress"
    }
  ]

  transform(value: number) {
   
   let index=   this.status.findIndex((e)=>{
        return e.id==value;
      });

      if(index> -1){
        return this.status[index].name;
      }
    return 'na';
  }

}
