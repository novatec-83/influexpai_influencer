import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl, NgForm} from '@angular/forms';
import {Config} from '../../config';
import {Headers, Response, Http} from '@angular/http';
import {FacebookService, InitParams, LoginResponse} from 'ngx-facebook';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import {RecapchaService} from '../../recapcha/recapcha.service';
import {ViewChild} from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import {App_service} from '../../app.service';
import swal from "sweetalert2";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers:[RecapchaService]


})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  step: any = [];
  model: any= {};
  hide= true;
  currentUser;
  recaptcha= true;
  private loaded: boolean;
  userFormControl = new FormControl('', [
    Validators.required,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required]);
  constructor(private fb: FormBuilder, private router: Router, private http: Http, private fB: FacebookService,
  public toastr: ToastsManager , vcr: ViewContainerRef,
              private  recacha: RecapchaService,private socialAuthService: AuthService, private service: App_service ) {


  this.toastr.setRootViewContainerRef(vcr);

    const initParams: InitParams = {
      // appId: '1940081329603075',
      appId: '2076488752606610',
      xfbml: true,
      version: 'v2.12'
    };
    fB.init(initParams);
  }

  ngOnInit() {

    localStorage.clear();
    this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }
  signinFb() {
    this.fB.logout();
    this.fB.login()
    // uid: response['authResponse']['userID'],
 // Authorization: Bearer <backend_name> <backend_token>
      .then((response: LoginResponse) => {
        const headers = new Headers({'Authorization': 'Bearer facebook ' + response['authResponse']['accessToken'].toString()});
        headers.append('Content-Type', 'application/json');
        this.http.post(Config.api + '/login_inf_socialAccnt/', {uid: response['authResponse']['userID']}, {headers: headers}
        )
          .subscribe(res => {
              console.log(res.json());
              localStorage.setItem('currentUser', JSON.stringify(res.json()));
             this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

              if (this.currentUser.profile_completed)
              {
                this.router.navigate(['/profile']);
              }
              else
              {
                this.router.navigate(['/onboarding']);
              }




            },
            error => {
                 this.showError();
            });

      })
      .catch((error: any) => console.error(error));

  }


  signinGoogle(){
    let socialPlatformProvider;

      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;


    this.socialAuthService.signIn(socialPlatformProvider).then(
      (response) => {
        console.log('hello' + response)
        const headers = new Headers({'Authorization': 'Bearer google-oauth2 ' + response['token'].toString()});
        headers.append('Content-Type', 'application/json');
        this.http.post(Config.api + '/login_inf_googleAccnt/', {uid: response['id']}, {headers: headers}
        )
          .subscribe(res => {
              console.log(res.json());
              localStorage.setItem('currentUser', JSON.stringify(res.json()));
              this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

              if (this.currentUser.profile_completed)
              {
                this.router.navigate(['/profile']);
              }
              else {
                this.router.navigate(['/onboarding']);
              }




            },
            error => {
              this.showError();
            });

      }
    );
  }

  showError() {
      this.toastr.error('This user is not registered currently!');
    }

  signinFB() {
    this.fB.logout();
    this.fB.login()
    // uid: response['authResponse']['userID'],

  .then((response: LoginResponse) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post(Config.api + '/login_inf_socialAccnt/', {uid: response['authResponse']['userID']}, {headers: headers}
    )
      .subscribe(res => {
          console.log(res.json());
          localStorage.setItem('currentUser', JSON.stringify(res.json()));

        },
        error => {

        });

      })
      .catch((error: any) => console.error(error));

  }
  getTwAccessToken(){

  }

  login_f(username: string, password: string) {


    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(Config.api + '/influencer_login/', {username: username, password: password}, {headers: headers}
    ).map((res: Response) => res.json()).subscribe(
          data =>{
            this.router.navigate(['/onboarding']);
          }
    );


  }

  resolved(captchaResponse: string){
    if(captchaResponse){
      this.recaptcha= true;
    }
  }
  login(f: NgForm) {
    this.loaded = true;
    this.recaptcha = this.recacha.check();
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.recaptcha == true) {

      this.service.login(this.model.username, this.model.password).subscribe(data => {
          this.router.navigate(['/profile']);
          localStorage.setItem('username', this.model.username);
          this.loaded = false;
        },
        error1 => {
          if(error1.status==400){
            swal('oops','User does not exits','warning')
          }
          else   if(error1.status==500 || error1.status==502){
            swal('Please Wait we are working on it','','warning')
          }
        })
    }
  }

}
