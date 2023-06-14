import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  constructor(private api:ApiService){}


  send(f:NgForm){
    console.log(f.value);
    this.api.postbill(f.value).subscribe(
      (data)=>{
        console.log("success");
      },
      (Error)=>{
        console.log("fail");
      }
    )

  }

}
