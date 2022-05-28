import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/service/dataSharing.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private userData : DataSharingService) { }
username="" ;
name ="";
email="";
  ngOnInit(): void {
    
this.userData.myUserName.subscribe(value=>{this.name=value})
this.userData.username.subscribe(value=>{this.username=value})
this.userData.email.subscribe(value=>{this.email =value});

  }

  isUpdateOn=false;
  update(){
    this.isUpdateOn=true;


  }

}
