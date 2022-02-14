import { User } from './../user';
import { ProfileService } from '../profile-service.service';
import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  user: User;
  profile: User[] = []
  repository: Repository;


  constructor(private profileRequest: ProfileService) {
    this.user = new User("", "", "")
    this.repository = new Repository("", "", "")
  }


  search(searchItem: any) {
    this.profileRequest.getUserProfile(searchItem).then((success) => {
      this.user = this.profileRequest.user
      console.log(this.user)
    })


    this.profileRequest.displayRepos(searchItem).then((success) => {
      this.repository = this.profileRequest.repository
      console.log(this.repository)
    })



  }
  ngOnInit(): void {
    this.search('Otybrian')
  }
}




