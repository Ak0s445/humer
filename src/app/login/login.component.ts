import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: any;



  constructor(private builder: FormBuilder, 
    private app : AppComponent,
    private router: Router)  {} //Router szolgáltatásának injektálása
    //A Router egy beépített Angular szolgáltatás, amely lehetővé teszi az útvonalváltást, azaz hogy a felhasználót átirányítsd egyik oldalról a másikra az alkalmazásban.
  ngOnInit() {
    this.loginForm = this.builder.group({ //
      user: 'admin',
      pass: 'admin'
    });
  }
login(event:any) {
  console.log(this.loginForm.value) //megnézzük mit irt be a felhasználó a mezőkbe (neve, jelszava, és kiirja a konzolra)
  const user = this.loginForm.value.user //nézi az user neved
  const pass = this.loginForm.value.pass //nézi a passt
  if(user=="admin" && pass == "admin"){ //ha mindkettő admin, tovább enged
    console.log("Belépés rendben...")
    this.app.isLoggedIn = true  //az appcomponentben false volt, de itt átáll true-vá
    localStorage.setItem('isLoggedIn', 'true')
    this.router.navigate (['/employee'])  //átnavigálunk az employee-re
  }
  //alert("Belépés...")
  event.preventDefault() //hogy ne terjedjen tovább az esemény

}
}
