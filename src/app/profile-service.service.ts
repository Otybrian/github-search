import { Injectable } from '@angular/core';
import { User } from './user';
import  axios  from 'axios';
import { environment } from 'src/environments/environment';
import { Repository } from './repository';



@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  user:User;
  profile:User[]=[];
  repository!:Repository;

  constructor() {
    this.user = new User("","","");
    
   }

   async getMyProfile(){

    try{
      const getResponse = await axios.get(`https://api.github.com/users/Otybrian`, {headers:{"Authorization":environment.apiKey}})
     console.log(getResponse)
      const responseArray = getResponse.data.data;
      
      responseArray.forEach((_element:any) => {

        this.user.push(new User("","",""))
        
        
        
      });

      console.log(responseArray);
      console.log(this.user);




    }catch(error){

    }
  }
   
}
