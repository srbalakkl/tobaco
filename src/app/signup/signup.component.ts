import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  fg : FormGroup;
  result: any;
  constructor( private data : DataService, private router : Router ) { 
  }

  ngOnInit() {
    this.fg = new FormGroup({
      Name : new FormControl('',),
      FName : new FormControl('',),
      Gender : new FormControl('',),
      birthday : new FormControl('',),

    })
  }
  signup(){
    this.data.signup(this.fg.value).subscribe(r=>{
      this.result = r;
      if (this.result.message="sucessfully Done"){
        alert ('click forgot password to set password')
        this.router.navigateByUrl("");
     }
    })
}

}

      
