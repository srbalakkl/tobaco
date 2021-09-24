import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  fg: FormGroup;
  result: any;
  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.fg = new FormGroup({
      login: new FormControl('',),
      Password: new FormControl('',),
      confirmpassword: new FormControl('',)
    })
  }

  fpassword() {
    if (this.fg.value.Password == this.fg.value.confirmpassword) {
    
    this.data.fpassword(this.fg.value).subscribe(r => {
      this.result = r;
      if (this.result.message = "sucessfully Done") {
        this.router.navigateByUrl("");
      }
      else {
        alert ('login id is not there')
      }
    })
  }
else {
  alert('password  confirmpassword plz check')
}
}
}
