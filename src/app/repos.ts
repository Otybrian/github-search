import { AppRoutingModule } from "./app-routing.module";

export class Repos {
    constructor(
        public name:string,
        public clone_url:string,
        public language:string,
        public description:string,
    ){}
}
