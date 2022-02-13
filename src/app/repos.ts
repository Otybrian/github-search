import { AppRoutingModule } from "./app-routing.module";

export class Repos {
    constructor(
        public name:string,
        public bio:string,
        public avatar_url:string,
        public followers:number,
        public following:number,
        public public_repos:number,


    ){}
}
