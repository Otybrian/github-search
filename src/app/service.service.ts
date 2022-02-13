import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Repos } from './repos';
import { Profile } from './profile';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  profile!:Profile;
  repos!:Repos;

  constructor(private http:HttpClient) { 
    this.profile = new Profile("","","",0);
    this.repos = new Repos("","","","");
  }
}
