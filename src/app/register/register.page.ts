import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  apiUri = '/register';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  register(name: string, phone: string) {
    let user={"userName":name,"phone":phone};
    console.log(user);
    this.http.get(environment.apiUrl + this.apiUri, { params: { name, phone } })
      .subscribe((token: string) => {
        localStorage.setItem("user", token);
        console.log(token);
      })
  }
}
