import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data;
  search: any = '';

  constructor() {
    this.data = [
      {
        Name:"Aaaa",
        MName:"Aaaa",
        Rate:7500,
        Discount:15,
        image:"/assets/img/unnamed.jpg"
      },
      {
        Name:"Bbbb",
        MName:"Bbbb",
        Rate:75,
        Discount:15,
        image:"/assets/img/unnamed.jpg"
      },
      {
        Name:"Cccc",
        MName:"Cccc",
        Rate:75,
        Discount:15,
        image:"/assets/img/unnamed.jpg"
      },
      {
        Name:"Dddd",
        MName:"Dddd",
        Rate:75,
        Discount:15,
        image:"/assets/img/unnamed.jpg"
      },
      {
        Name:"Eeee",
        MName:"Eeee",
        Rate:75,
        Discount:15,
        image:"/assets/img/unnamed.jpg"
      },
      {
        Name:"Ffff",
        MName:"Ffff",
        Rate:75,
        Discount:15,
        image:"/assets/img/unnamed.jpg"
      }
    ]
  }
}
