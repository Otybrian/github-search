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
  repository!: Repository;
  constructor(private http: HttpClient) {
    this.user = new User("", "", "");
    this.repository = new Repository("", "", "");
  }
  getUserProfile(searchItem: string | number) {
    interface apiResults {
      name: string,
      avatar_url: string,
      bio: string,
      html_url: string,
      contributors_url:string,
      description:string
      // followers: number,
      // following: number,
      // public_repos: number
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
        // this.user.followers = response!.followers
        // this.user.following = response!.following
        // this.user.html_url = response!.html_url
        // this.user.public_repos = response!.public_repos
        // console.log(this.profile)
        resolve(null)
      },
        error => {
          reject(error)
        })
    })
    return promise
  }
  displayRepos(user: any) {
    interface apiResponse {
      contributors_url: string,
      html_url: string,
      description: string,
      // language: string
    }
    let url = environment.apiUrl + user + '/repos';
    let promise = new Promise((resolve, reject) => {
      this.http.get<apiResponse>(url).toPromise().then(response => {
        this.repository.contributors_url = response!.contributors_url
        // this.repository.login = response!.login
        this.repository.html_url = response!.html_url
        this.repository.description = response!.description
        // this.repository.language = response!.language
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

