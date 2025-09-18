import { Component } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userList:any[] = []
  constructor(private user : UserService) { //ide mindig a backend végpont jön, amiből szeretnénk adatot nyerni

  }
  ngOnInit() {
    this.user.getUsers().subscribe ({
      next:(data) => {
        console.log(data)

      } //a subscribe al feliratkozunk a válaszra, és ha jó minden a konzol fülön a weboldalon kiirja a 2 felvett felhasználót
    })//feliratkozunk, és most lekérjük
    //a read művelet már létezik, tudunk felhasználókat lekérni a backendből

  }
}
