import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fg : FormGroup;
  constructor(private data : DataService , private router : Router) { }

  ngOnInit() {}

 logout(){
   this.router.navigateByUrl("")
 }
}
