import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  add:Array<any>=[];
  countNumber=0;
  
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.getAll();
    
  }
  onAddUser(){
    this.router.navigate(["form"]);

  }

  getAll(){
    this.service.getAll().subscribe((data:any)=>{
      console.log(data);
      this.add=data;
      this.countNumber=this.add.length;
    })
  }
  deleteById(Id:number){
    console.log(Id);
    this.service.deleteById(Id).subscribe((data:any)=>{
      this.router.navigate(["dashboard"]);
      this.ngOnInit();
     
    })

  }

  editById(Id:number)
  {
    this.router.navigate(['update',Id]);

  }

}
