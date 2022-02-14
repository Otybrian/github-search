export class Repository {
    [x: string]: any;

    constructor(
        public html_url:string,
        public description:string,
        public contributors_url:string,
        public license:string

    ){}
}
