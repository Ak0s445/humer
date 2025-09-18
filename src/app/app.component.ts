import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [ 
    RouterOutlet,  
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoggedIn = false;
  ngOnInit() {
    this.readLogged();
  }

  readLogged() {
    const a =   localStorage.getItem('isLoggedIn') //ha a felhasználó belépett akkor az Application fülnél (f12) elöjön kulcsként hogy bejelentkezett
    console.log('Eredmény: ',a)
    if(a != null) {
      this.isLoggedIn = true  
    } //ez azért kell h az  oldal frissülése után ne tűnjön el az eredmény : islogedim, tehát hogy be vagy jelentkezve. A lap frissitése után is belépve maradsz


  }

}
