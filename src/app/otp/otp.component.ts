import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  compiledOtp : string = '';

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  move(e:any, p:any, c:any, n:any){
    let length = c.value.length;
    let maxlength = c.getAttribute('maxlength');
    if(length == maxlength){
      if(n != ""){
        n.focus();
      }
    }
    if(e.key === "Backspace"){
      if(p != ""){
        p.focus();
      }
    }
  }

  otp: any='';
    otpFormValue(){     
      let elements = document.querySelectorAll("#otp-form-box input[type=text]");
      for(let i = 0; i < elements.length; i++ )
      {
        let boxVal = document.querySelector<HTMLInputElement>(`#${elements[i].id}` )!.value;
        this.otp+=boxVal;        
      }
    }
  verifyOtp(){

    this.otpFormValue();
    console.log(this.otp);
    this.router.navigate(['success']);
  }

}
