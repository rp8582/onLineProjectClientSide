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

  @ViewChild('userName',{static:false, read: ElementRef }) userName: ElementRef;
  @ViewChild('userPhone', { static: false , read: ElementRef}) userPhone: ElementRef;
  apiUri = '/register';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  register() {
    let name =this.userName.nativeElement.value;
    let phone=this.userPhone.nativeElement.value;
    console.log('name:',name,'  phone:',phone);
    this.http.get(environment.apiUrl + this.apiUri, { params: {name,phone} })
      .subscribe((token: string) => {
        localStorage.setItem("user", token);
        console.log(token);
      })
  }
}
