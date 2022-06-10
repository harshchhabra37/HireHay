import { Component, OnInit } from '@angular/core';
import {GetAppliedListService} from "../get-applied-list.service"
@Component({
  selector: 'app-applied-list',
  templateUrl: './applied-list.component.html',
  styleUrls: ['./applied-list.component.css']
})
export class AppliedListComponent implements OnInit {

  public CompanyLogo="HIREHAY";
  public entries = {'id':1,'firstName':"hemanshu",'lastName':"kumar",'handle':true};
  candidate=[{
    id:1,
    fullName:'',
    email:'',
    phone:''
  }];
  public feedback= {
    userName:'',
    text: ''
  };
  constructor(private _get_list:GetAppliedListService) { 
    this._get_list.getList().subscribe(
      data=> {
        this.candidate = data.applicationsFound},
      error=> console.log(error))
  }


  ngOnInit(): void {
  }

  onClick(): void{
    this._get_list.getAppliedList().subscribe(
      data=> {
        console.log(data);
        this.candidate = data.applicationsFound},
      error=> console.log(error))
  }
}
