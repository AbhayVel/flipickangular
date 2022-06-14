import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: Array<any> = [
    {
      id: 1,
      icon: "../assets/img/small-logos/logo-spotify.svg",
      project: "Argon Design System",
      budget: 2500,
      status: 1,
      users: "av",
      completion: 60
    },
    {
      id: 2,
      icon: "../assets/img/small-logos/logo-invision.svg",
      project: "de Now UI Kit PRO",
      budget: 7500,
      status: 2,
      users: "av",
      completion: 70
    },
    {
      id: 3,
      icon: "../assets/img/small-logos/logo-jira.svg",
      project: "ZZ Design System",
      budget: 3500,
      status: 3,
      users: "av",
      completion: 90
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "lke Design System",
      budget: 34500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "mke Design System",
      budget: 24500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "nke Design System",
      budget: 14500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "oke Design System",
      budget: 6500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "pke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ke Design System",
      budget: 45001,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "qke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "rke Design System",
      budget: 500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "ske Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "tke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "uke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "vke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    },
    {
      id: 4,
      icon: "../assets/img/theme/bootstrap.jpg",
      project: "wke Design System",
      budget: 4500,
      status: 4,
      users: "av",
      completion: 35
    }
  ]


  constructor() { }



  getAll() {

    return new Promise((res, rej) => {
      res(this.product);
    })

  }

  getById(id: number) {
    return new Observable((o: Observer<any>) => {
      let index = this.product.findIndex((x) => x.id == id);
      if (index > -1) {
        o.next(this.product[index]);
      }
    })
  }
}
