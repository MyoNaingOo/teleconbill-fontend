import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.sass']
})
export class BillsComponent implements OnInit{

  billtable:any;

  ngOnInit(): void {

  }

  constructor(private api:ApiService){
    this.bills()
  }

  bills(){
    this.api.getbills().subscribe(
      (data) =>{
        console.log(data)
        this.billtable = data

      }
    )

  }

}
