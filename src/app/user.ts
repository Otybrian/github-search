export class User {
  constructor(
    public bio: string,
    public name: string,
    public avatar_url: string,
    public followers: number,
    public following: number,
    public repos: number,
    public contributors_url: string,
    public html_url: string,
    public description: string,
    public public_repos: number,
  ) { }
}
