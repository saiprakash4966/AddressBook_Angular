import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddressBookModel } from 'src/app/addressbookmodel';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit
 {
  City=["mumbai","pune"]
  State=["Karnataka","TamilNadu","Maharashtra","Rajasthan"];

  Id:any = this.route.snapshot.paramMap.get("Id");

  address:AddressBookModel =new AddressBookModel("","","","","","")
  constructor(private router:Router,private addService:ServiceService,private route:ActivatedRoute,private fb: FormBuilder,) {
    
   
  }

addressGroup=new FormGroup({
  firstName:new FormControl(''),
  mobile_Number :new FormControl(''),
 address:new FormControl(''),
 city:new FormControl(''),
 state:new FormControl(''),
 zip_code:new FormControl('')
})

  ngOnInit(): void {
    this.addService.getById(this.Id).subscribe((response:any)=>{
    console.log(response);
    this.address=response.data;
    })
  }
 
  onCancel(){
    this.router.navigate(["dashboard"]);
  }

  submit(){
    console.log(this.address);
    console.log("data added")
    this.addService.add(this.addressGroup.value).subscribe((data:any)=>{
      console.log(this.addressGroup.value)
      this.router.navigate(["dashboard"]);
      
    });
  }

  updateData(){
    this.addService.updateById(this.addressGroup.value,this.Id).subscribe((data:any)=>{
      console.log(this.addressGroup.value);
      this.router.navigate(["dashboard"]);
    });
  }}