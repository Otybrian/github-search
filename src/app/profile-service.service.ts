import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user!: User;
  repository: any;

  constructor(private http: HttpClient) {
    this.user = new User("", "", "", 0, 0, 0,"","","",0);
    this.repository = new Repository();
  }
  getMyProfile(searchItem: string | number) {
    interface apiResults {
      name: string,
      avatar_url: string,
      bio: string,
      // html_url: string,
      followers: number,
      following: number,
      repos: number,
      contributors_url: string,
      html_url: string,
      description: string,
      public_repos: number,
    }
    let headers = new HttpHeaders({
      authorization: environment.apiUrl + environment.apiKey,
    })
    let options = { headers: headers }
    let completeUrl = environment.apiUrl + searchItem;
    let promise = new Promise((resolve, reject) => {
      this.http.get<apiResults>(completeUrl, options).toPromise().then(response => {
        this.user.name = response!.name
        this.user.avatar_url = response!.avatar_url
        this.user.bio = response!.bio
        this.user.followers = response!.followers
        this.user.following = response!.following
        this.user.repos = response!.repos
        this.user.contributors_url = response!.contributors_url
        this.user.public_repos = response!.public_repos
        this.user.html_url = response!.html_url
        this.user.description = response!.description
        console.log(this.user)
        resolve(null)
      },
        error => {
          reject(error)
        })
    })
    return promise
  }
  showMyRepos(user: any = []) {
    interface apiResponse {
      contributors_url: string,
      html_url: string,
      description: string,
      public_repos: number,

      // followers: number,
      // following: number,
      // repos:number,

    }
    let headers = new HttpHeaders({
      authorization: environment.apiUrl + environment.apiKey,
    })
    let options = { headers: headers }
    let url = environment.apiUrl + user + '/repos';
    let promise = new Promise((resolve, reject) => {
      this.http.get<apiResponse>(url, options).toPromise().then(response => {
        // this.repository.contributors_url = response!.contributors_url
        // this.repository.public_repos = response!.public_repos
        // this.repository.html_url = response!.html_url
        // this.repository.description = response!.description

        // this.repository.followers = response!.followers
        // this.repository.following = response!.following
        // this.repository.repos = response!.repos


        console.log(this.repository)
        resolve(null)


      }, error => {
        reject();
        console.log(error)
      })
    });
    return promise
  }
}

