import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ProfileServiceService } from '../profile-service.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;
  profile:User[]=[]
  repository!:Repository;

  constructor(private profileService:ProfileServiceService) { 
    this.user = new User("","","");
    
  }

  ngOnInit(): void {
    this.profileService.getMyProfile();
    this.user = this.profileService.user;
    
   
    
  }  

}
