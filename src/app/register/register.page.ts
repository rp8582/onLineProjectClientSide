import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  apiUrl = 'http://localhost:52764/api/register';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  register(name: string, phone: string) {
    //let user={"userName":name,"phone":tel};
    console.log(name, phone);
     this.http.get(this.apiUrl, { params: { name, phone } })
       .subscribe((token: string) => {
         localStorage.setItem("user", token);
         console.log(token);
       })
    

  }
}
