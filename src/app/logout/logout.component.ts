import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor( private app: AppComponent){
         
    this.startLogout()  //össze kapcsolod ugye az App  componenttel
  }

  ngOnInti() {}

  startLogout() {
    this.app.isLoggedIn = false  //ha kijelentkezett, eltünik a kulcs érték (hogy be lenne lépve)
    localStorage.removeItem('isLoggedIn') //az első localstorage bejelentkezést töröljük, mert most ki akarunk jelentkezni, ezért egyszer törölni kell
  }
}
