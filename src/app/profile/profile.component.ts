import { ProfileService } from './../profile-service.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  user: User;
  repository:any;


  constructor(private profileService: ProfileService) {
    this.user = new User("", "", "",0,0,0,"","","",0)
    this.repository = new Repository()
  }


  search(searchItem: any = []) {
    this.profileService.getMyProfile(searchItem).then((success) => {
      this.user = this.profileService.user
      console.log(this.user)
    })

  
    this.profileService.showMyRepos(searchItem).then((success) => {
      this.repository = this.profileService.repository
      console.log(this.repository)
    })



  }
  ngOnInit(): void {
    this.search('Otybrian')
  }
}




