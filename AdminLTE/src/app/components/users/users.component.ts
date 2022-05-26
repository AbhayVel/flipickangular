import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  filterTerm!: string;
  userRecords: UsersData[] = [
    {
      id: 1,
      icon: "../assets/dist/img/avatar.png",
      firstName: 'Leanne',
      lastName: 'Graham',
      email: 'Sincere@april.biz',
      address: '7687 Jadon Port',
      dob:'16 Apr 1970',
      completion: 50
    },
    {
      id: 2,
      icon: "../assets/dist/img/avatar5.png",
      firstName: 'Ervin',
      lastName: 'Howell',
      email: 'Shanna@melissa.tv',
      address: '156 Streich Ports',
      dob:'12 Apr 1971',
      completion: 20
    },
    {
      id: 3,
      icon: "../assets/dist/img/avatar3.png",
      firstName: 'Patricia',
      lastName: 'Lebsack',
      email: 'Julianne.OConner@kory.org',
      address: '5203 Jordon Center',
      dob:'12 Jan 1987',
      completion: 40
    },
    {
      id: 4,
      icon: "../assets/dist/img/avatar4.png",
      firstName: 'Chelsey',
      lastName: 'Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      address: '91057 Davion Club',
      dob:'12 Jan 1987',
      completion: 67
    },
    {
      id: 5,
      icon: "../assets/dist/img/avatar5.png",
      firstName: 'Dennis',
      lastName: 'Schulist',
      email: 'Karley_Dach@jasper.info',
      address: '1280 Jon Club',
      dob:'12 Jan 1987',
      completion: 67
    },
    /*{
      id: 6,
      icon: "../assets/dist/img/avatar3.png",
      firstName: 'Kurtis',
      lastName: 'Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      address: '1670 Denver Club',
      dob:'12 Jan 1987',
      completion: 67
    },
    {
      id: 7,
      icon: "../assets/dist/img/avatar.png",
      firstName: 'Nicholas',
      lastName: 'Runolfsdottir',
      email: 'Sherwood@rosamond.me',
      address: '91057 Mark Club',
      dob:'12 Jan 1990',
      completion: 67
    },
    {
      id: 8,
      icon: "../assets/dist/img/avatar2.png",
      firstName: 'Glenna',
      lastName: 'Reichert',
      email: 'Chaim_McDermott@dana.io',
      address: '1122 Sam Club',
      dob:'12 Jan 1990',
      completion: 67
    },
    {
      id: 9,
      icon: "../assets/dist/img/avatar.png",
      firstName: 'Clementina',
      lastName: 'DuBuque',
      email: 'Rey.Padberg@karina.biz',
      address: '1567 Davion Club',
      dob:'12 Jan 1990',
      completion: 67
    },
    {
      id: 10,
      icon: "../assets/dist/img/avatar2.png",
      firstName: 'Lucious',
      lastName: 'Leuschke',
      email: 'Leuschke.Leuschke@g.biz',
      address: '16288 Reichel Harbor',
      dob:'12 Jan 1990',
      completion: 67
    }*/
  ];
  
  constructor() { }

  ngOnInit(): void { }

  orderby: number=-1;
  sortData(columnName:string)
  {
    this.orderby = this.orderby*-1;
    console.log('coulmnName:' + columnName);
    this.userRecords.sort((a:any,b:any)=>{
      return a[columnName] > b[columnName] ? -1*this.orderby : 1*this.orderby;
    });
  }
}

export interface UsersData {
  id:number;
  icon:string;
  firstName: string;
  lastName: string;
  email:string;
  address: string; 
  dob: string;
  completion: number; 
}
