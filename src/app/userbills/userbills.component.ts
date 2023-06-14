import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-userbills',
  templateUrl: './userbills.component.html',
  styleUrls: ['./userbills.component.sass']
})
export class UserbillsComponent {

  billtable:any;

  ngOnInit(): void {

  }

  constructor(private api:ApiService){
    this.bills()
  }

  bills(){
    this.api.getbillsByUser().subscribe(
      (data) =>{
        console.log(data)
        this.billtable = data
      }
    )

  }

}
