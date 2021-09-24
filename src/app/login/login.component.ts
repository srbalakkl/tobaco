import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  fg : FormGroup;
  result: any;
  
  constructor( private data : DataService , private router : Router ) { }

  ngOnInit() {
    this.fg = new FormGroup({
      LoginID: new FormControl('',),
      password : new FormControl('',),
    })
  }
   login(){
    this.data.login(this.fg.value).subscribe(r=>{
      this.result = r;
      console.log(this.result.message);
      
      if (this.result.message=="sucessfully Done"){
        this.router.navigateByUrl("Home");
        
        
     }
     else {
       alert ('plz check ur password ID');
     }

    })
    
     
   }
}
