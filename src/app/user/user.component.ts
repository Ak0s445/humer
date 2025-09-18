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
    // this.userList = this.user.getUsers();
    this.user.getUsers().subscribe //feliratkozunk, és most lekérjük

    console.log(this.userList)
  }
}
