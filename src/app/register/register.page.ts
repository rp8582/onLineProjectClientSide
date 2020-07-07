import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  apiUrl = "";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  register(name: string, tel: string) {
    let user={"userName":name,"phone":tel};
    console.log(name, tel);
    /* this.http.get(this.apiUrl, { params: { name, tel } })
       .subscribe((token: string) => {
         localStorage.setItem("user", token);
         console.log(token);
       })*/
    localStorage.setItem("user", name);

  }
}
