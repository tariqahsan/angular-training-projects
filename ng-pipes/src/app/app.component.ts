import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipes';

  // user = {
  //   id: 100,
  //   firstName: 'Tariq',
  //   lastName: 'Ahsan',
  //   city: 'New York',
  //   state: 'VA',
  //   dob: '10/16/1961',
  //   salary: 1000
  // };
  users = [{
    id: 100,
    firstName: 'Mohammed',
    lastName: 'Ali',
    city: 'New York',
    state: 'NY',
    dob: '01/01/1955',
    salary: 1000000
  },
  {
    id: 200,
    firstName: 'Tariq',
    lastName: 'Ahsan',
    city: 'Woodbridge',
    state: 'VA',
    dob: '10/16/1961',
    salary: 1000
  },
  {
    id: 300,
    firstName: 'Abu',
    lastName: 'Bakr',
    city: 'Washington D.C.',
    state: 'DC',
    dob: '01/02/1958',
    salary: 450000
  },
  {
    id: 400,
    firstName: 'Farzeen',
    lastName: 'Ahsan',
    city: 'Chicago',
    state: 'IL',
    dob: '12/29/2005',
    salary: 300000
  },
  {
    id: 500,
    firstName: 'Tausif',
    lastName: 'Ahsan',
    city: 'Springfield',
    state: 'VA',
    dob: '11/20/1995',
    salary: 100000
  }];
}
