import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild('userName', { static: true }) userName: ElementRef;
  @ViewChild('userPhone', { static: true }) userPhone: ElementRef;
  apiUri = '/register';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  register() {
    let user = { "userName": this.userName.nativeElement, "phone": this.userPhone.nativeElement };
    let name = user.userName;
    let phone=user.phone;
    console.log(user);
    this.http.get(environment.apiUrl + this.apiUri, { params: {name,phone} })
      .subscribe((token: string) => {
        localStorage.setItem("user", token);
        console.log(token);
      })
  }
}
