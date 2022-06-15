import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AMEmployeeService {

  employee: Array<any> = [
    {
      id: 1,
      icon: "../assets/dist/img/avatar.png",
      firstName: 'Leanne',
      lastName: 'Graham',
      email: 'Sincere@april.biz',
      phone: 8787654545,
      address: '7687 Jadon Port',
      countryId: 1,
      city: "Phoenix",
      zip: "41201",
      dob:'04/16/1970',
      jod: '04/12/2001',
      term: true,
      gender: 'male'
    },
    {
      id: 2,
      icon: "../assets/dist/img/avatar5.png",
      firstName: 'Ervin',
      lastName: 'Howell',
      email: 'Shanna@melissa.tv',
      phone: 8787654545,
      address: '156 Streich Ports',
      countryId: 2,
      city: "Atlanta",
      zip: "41201",
      dob:'04/12/1971',
      jod: '04/11/2003',
      term: true,
      gender: 'male'
    },
    {
      id: 3,
      icon: "../assets/dist/img/avatar3.png",
      firstName: 'Patricia',
      lastName: 'Lebsack',
      email: 'Julianne.OConner@kory.org',
      phone: 8787654545,
      address: '5203 Jordon Center',
      countryId: 3,
      city: "Portland",
      zip: "41170",
      dob:'01/11/2022',
      jod: '04/11/2017',
      term: true,
      gender: 'female'
    },
    {
      id: 4,
      icon: "../assets/dist/img/avatar4.png",
      firstName: 'Chelsey',
      lastName: 'Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      phone: 8787654545,
      address: '91057 Davion Club',
      countryId: 4,
      city: "Boston",
      zip: "54323",
      dob:'02/12/2022',
      jod: '05/11/2014',
      term: true,
      gender: 'female'
    },
    {
      id: 5,
      icon: "../assets/dist/img/avatar5.png",
      firstName: 'Dennis',
      lastName: 'Schulist',
      email: 'Karley_Dach@jasper.info',
      phone: 8787654545,
      address: '1280 Jon Club',
      countryId: 5,
      city: "Wichita",
      zip: "5654",
      dob:'03/16/2022',
      jod: '06/11/2013',
      term: true,
      gender: 'female'
    },
    {
      id: 6,
      icon: "../assets/dist/img/avatar3.png",
      firstName: 'Kurtis',
      lastName: 'Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      phone: 8787654545,
      address: '1670 Denver Club',
      countryId: 4,
      city: "Boston",
      zip: "54323",
      dob:'03/17/2022',
      jod: '05/30/2013',
      term: true,
      gender: 'male'
    },
    {
      id: 7,
      icon: "../assets/dist/img/avatar.png",
      firstName: 'Nicholas',
      lastName: 'Runolfsdottir',
      email: 'Sherwood@rosamond.me',
      phone: 8787654545,
      address: '91057 Mark Club',
      countryId: 2,
      city: "Atlanta",
      zip: "41201",
      dob:'03/20/2022',
      jod: '01/29/2000',
      term: true,
      gender: 'male'
    },
    {
      id: 8,
      icon: "../assets/dist/img/avatar2.png",
      firstName: 'Glenna',
      lastName: 'Reichert',
      email: 'Chaim_McDermott@dana.io',
      phone: 8787654545,
      address: '1122 Sam Club',
      countryId: 4,
      city: "Boston",
      zip: "54323",
      dob:'06/06/2022',
      jod: '04/29/2022',
      term: true,
      gender: 'male'
    },
    {
      id: 9,
      icon: "../assets/dist/img/avatar.png",
      firstName: 'Clementina',
      lastName: 'DuBuque',
      email: 'Rey.Padberg@karina.biz',
      phone: 8787654545,
      address: '1567 Davion Club',
      countryId: 2,
      city: "Atlanta",
      zip: "41201",
      dob:'01/12/1990',
      jod: '05/15/2022',
      term: true,
      gender: 'male'
    },
    {
      id: 10,
      icon: "../assets/dist/img/avatar2.png",
      firstName: 'Lucious',
      lastName: 'Leuschke',
      email: 'Leuschke.Leuschke@g.biz',
      phone: 8787654545,
      address: '16288 Reichel Harbor',
      countryId: 4,
      city: "Boston",
      zip: "54323",
      dob:'01/12/1990',
      jod: '06/01/2022',
      term: true,
      gender: 'male'
    }
  ];


  constructor() { }



  getAll() {

    return new Promise((res, rej) => {
      res(this.employee);
    })

  }

  getById(id: number) {
    return new Observable((o: Observer<any>) => {
      let index = this.employee.findIndex((x) => x.id == id);
      if (index > -1) {
        o.next(this.employee[index]);
      }
    })
  }
}
